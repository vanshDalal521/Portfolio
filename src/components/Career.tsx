import { motion } from "framer-motion";
import "./styles/Career.css";

const Career = () => {
  return (
    <motion.div
      className="career-section section-container"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>InLighnX Global</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built responsive React-based UIs, developed reusable components,
              integrated REST APIs, and collaborated on modern frontend
              workflows for real-world products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Sushant University (Sunstone)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently in 3rd year, actively building projects in Full Stack
              Development, AI/ML, and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary</h4>
                <h5>DAV Centenary Public School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed senior secondary education with a strong foundation in
              science and mathematics.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Career;
