import { motion } from "framer-motion";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useRef, useState, useCallback, useEffect } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    id: 1,
    name: "Kamiwear",
    category: "E-Commerce",
    description: "Anime-inspired techwear marketplace with curated drops, KamiKoin loyalty rewards, and full cart/checkout.",
    tools: "HTML, CSS, JavaScript, Node.js, Express, MongoDB",
    image: "/images/kamiwear.png",
    link: "https://kamiwear-j2b9.vercel.app/",
    github: "https://github.com/vanshDalal521/Kamiwear",
  },
  {
    id: 2,
    name: "ResuNova",
    category: "AI Platform",
    description: "AI-powered interview prep with Gemini 1.5 Flash for resume analysis, skill gap mapping, and a 7-day readiness pathway.",
    tools: "React 19, Vite, Framer Motion, SCSS, Node.js, Express, MongoDB, Gemini AI, JWT",
    image: "/images/resunova.png",
    link: "https://resu-nova.vercel.app/",
    github: "https://github.com/vanshDalal521/ResuNova",
  },
  {
    id: 3,
    name: "GoldenCare Buddy",
    category: "Healthcare",
    description: "Award-winning elder care ecosystem with AI voice call reminders via Twilio, medication tracking, doctor dashboard, and bilingual AI assistant.",
    tools: "React 19, GSAP, Three.js, Styled Components, Node.js, Express, MongoDB, Twilio, OpenAI, Gemini",
    image: "/images/goldencare.png",
    link: "https://golden-care-buddyyy-tvt1.vercel.app/",
    github: "https://github.com/vanshDalal521/GoldenCare-Buddyyy",
  },
];

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalBoxes = projects.length;

  const getStep = useCallback(() => {
    const flex = flexRef.current;
    if (!flex) return 0;
    const box = flex.querySelector(".work-box") as HTMLElement;
    if (!box) return 0;
    return box.offsetWidth;
  }, []);

  const handlePrev = useCallback(() => {
    const step = getStep();
    if (!step) return;
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    gsap.to(flexRef.current, { x: -(newIndex * step), ease: "power2.inOut", duration: 0.5 });
  }, [currentIndex, getStep]);

  const handleNext = useCallback(() => {
    const step = getStep();
    if (!step) return;
    const newIndex = Math.min(totalBoxes - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    gsap.to(flexRef.current, { x: -(newIndex * step), ease: "power2.inOut", duration: 0.5 });
  }, [currentIndex, getStep]);

  useEffect(() => {
    const handleResize = () => {
      const step = getStep();
      if (step && flexRef.current) {
        gsap.set(flexRef.current, { x: -(currentIndex * step) });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, getStep]);

  return (
    <motion.div
      className="work-section"
      id="work"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Tools & Technologies</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
              <div className="work-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-btn work-btn-live">
                  <span>Live</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-btn work-btn-github">
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="work-arrow work-arrow-left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous project"
        >
          <MdArrowBack />
        </button>
        <button
          className="work-arrow work-arrow-right"
          onClick={handleNext}
          disabled={currentIndex === totalBoxes - 1}
          aria-label="Next project"
        >
          <MdArrowForward />
        </button>
      </div>
    </motion.div>
  );
};

export default Work;
