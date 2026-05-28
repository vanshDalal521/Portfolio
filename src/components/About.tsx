import { motion } from "framer-motion";
import "./styles/About.css";

const About = () => {
  return (
    <motion.div
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="about-me">
        <div className="title-wrap">
          <h3>About</h3>
          <span className="title-accent">Me</span>
          <span className="title-line" />
        </div>
        <p>
          I build digital experiences at the intersection of design and
          engineering. Currently crafting with React, TypeScript, and modern
          frameworks — turning complex problems into clean, performant
          interfaces that feel effortless.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
