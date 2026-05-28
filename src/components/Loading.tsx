import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading, setLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const triggered = useRef(false);
  const percentRef = useRef(0);
  percentRef.current = percent;

  useEffect(() => {
    const interval = setInterval(() => {
      const p = percentRef.current;
      if (p >= 100) return;
      const inc =
        p < 50
          ? Math.round(Math.random() * 6 + 4)
          : p < 80
            ? Math.round(Math.random() * 3 + 1)
            : Math.random() * 0.5 + 0.2;
      setLoading(Math.min(100, p + inc));
    }, 250);

    const safety = setTimeout(() => setLoading(100), 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (percent < 100 || triggered.current) return;
    triggered.current = true;

    const t1 = setTimeout(() => setLoaded(true), 50);
    const t2 = setTimeout(() => setClicked(true), 500);
    const t3 = setTimeout(() => setIsLoaded(true), 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;
    import("./utils/initialFX")
      .then((module) => {
        if (module.initialFX) module.initialFX();
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("initialFX error:", err);
        setIsLoading(false);
      });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          <span className="loader-title-letter">V</span>
          <span className="loader-title-text">ansh</span>
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Full Stack Developer</span> <span>Frontend Developer</span>
            <span> Full Stack Developer</span> <span>Frontend Developer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  const safetyTimeout = setTimeout(() => {
    clearInterval(interval);
    let fill = setInterval(() => {
      if (percent < 100) {
        percent++;
        setLoading(percent);
      } else {
        clearInterval(fill);
      }
    }, 10);
  }, 20000);

  function clear() {
    clearTimeout(safetyTimeout);
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearTimeout(safetyTimeout);
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
