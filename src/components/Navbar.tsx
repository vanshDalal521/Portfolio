import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis;

const Navbar = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isMobile,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const mainEl = document.querySelector("main");
    const isLoadingComplete = mainEl?.classList.contains("main-active");
    if (!isLoadingComplete) lenis.stop();

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        let section = (e.currentTarget as HTMLAnchorElement).getAttribute("data-href");
        if (!section) return;
        if (window.innerWidth > 1024) {
          e.preventDefault();
          lenis.scrollTo(section, { offset: 0, duration: 1.5 });
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-logo" data-cursor="disable">
          <span className="navbar-logo-letter">V</span>
          <span className="navbar-logo-text">ansh</span>
        </a>
        <a
          href="mailto:vanshd994@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vanshd994@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <HoverLinks text="RESUME" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
