'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/lib/utils/mouse-position';
import { useScroll, useTransform } from 'framer-motion';
import DynamicCanvasWrapper from '@/components/3d/DynamicCanvasWrapper';
import FloatingModel from '@/components/3d/FloatingModel';

const HomeContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -0.2]);

  const mousePosition = useMousePosition();

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero decorative element */}
        <div className="absolute inset-0 z-0 w-full h-full opacity-30">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-secondary-500/20 to-accent-500/20 blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary mb-6 tracking-tight font-heading"
              style={{
                transform: `rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
              }}
            >
              Vansh <span className="text-secondary-500">Dalal</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-text-tertiary max-w-3xl mx-auto mb-10 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Creative <span className="text-accent-500 font-medium">Frontend Developer</span> crafting immersive digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-secondary-500 text-background rounded-full font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-3 border border-secondary-500 text-secondary-500 rounded-full font-medium hover:bg-secondary-500 hover:text-background transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-0.5 h-8 bg-muted"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              About <span className="text-secondary-500">Me</span>
            </h2>
            <p className="text-text-tertiary text-lg md:text-xl leading-relaxed mb-6">
              I'm a passionate frontend developer with expertise in creating immersive web experiences using modern technologies.
              My focus is on combining beautiful design with exceptional functionality to deliver products that users love.
            </p>
            <p className="text-text-tertiary text-lg md:text-xl leading-relaxed">
              With experience in React, Next.js, TypeScript, and 3D web technologies, I bring ideas to life with clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-secondary-500/10 text-secondary-500 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-accent-500/10 text-accent-500 rounded-full text-sm">Three.js</span>
              <span className="px-4 py-2 bg-secondary-500/10 text-secondary-500 rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-accent-500/10 text-accent-500 rounded-full text-sm">Animation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="h-96 md:h-[500px] w-full flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-secondary-500/10 to-accent-500/10 blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full mb-4"></div>
                  <p className="text-muted text-sm">Interactive 3D Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              My <span className="text-secondary-500">Skills</span>
            </h2>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
              Technologies and tools I specialize in to create exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'React', level: 95 },
              { name: 'TypeScript', level: 90 },
              { name: 'Next.js', level: 85 },
              { name: 'Three.js', level: 80 },
              { name: 'Framer Motion', level: 85 },
              { name: 'Tailwind CSS', level: 95 },
              { name: 'Node.js', level: 75 },
              { name: 'GraphQL', level: 70 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-background/50 backdrop-blur-sm border border-muted/10 rounded-xl p-6 text-center transition-all duration-300 group-hover:border-secondary-500/50">
                  <div className="text-primary-200 font-semibold mb-2">{skill.name}</div>
                  <div className="text-sm text-muted">{skill.level}%</div>
                  <motion.div
                    className="h-1 w-full bg-muted/20 rounded-full mt-2 overflow-hidden"
                    whileHover={{ scaleX: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              Featured <span className="text-secondary-500">Projects</span>
            </h2>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing innovative solutions and elegant design
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex space-x-8 overflow-x-auto pb-12 hide-scrollbar">
              {[
                {
                  title: 'KamiWear - Anime E-Commerce',
                  description: 'Fully self-built e-commerce website selling anime-themed fashion products with modern UI, cart logic, and smooth shopping experience.',
                  tags: ['React', 'Tailwind CSS', 'JavaScript', 'E-Commerce'],
                  detailPage: '/projects/kamiwear',
                  github: 'https://github.com/vanshDalal521/Kamiwear',
                  demo: 'https://kamiwear-j2b9.vercel.app/',
                  highlight: 'Solo built complete e-commerce platform from UI design to implementation with full cart & checkout functionality'
                },
                {
                  title: 'Resu-Nova - AI Resume Builder',
                  description: 'A professional branding platform and AI-powered resume builder that helps job seekers create high-impact resumes in minutes.',
                  tags: ['Next.js', 'React', 'OpenAI', 'Tailwind CSS'],
                  detailPage: '/projects/general/resu-nova',
                  github: 'https://github.com/vanshDalal521/ResuNova',
                  demo: 'https://resu-nova.vercel.app',
                  highlight: 'Built a full-stack AI platform for resume generation, career path visualization, and professional branding with real-time editing.'
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    y: -20,
                    transition: { duration: 0.3 }
                  }}
                  className="flex-shrink-0 w-80 md:w-96 bg-background/50 backdrop-blur-sm border border-muted/10 rounded-2xl p-6 cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-secondary-500/5 to-accent-500/5 rounded-xl mb-4 overflow-hidden relative">
                    {project.title.includes('KamiWear') ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(124,124,255,0.1)_0%,transparent_50%)]"></div>
                        <div className="relative z-10 text-center px-4">
                          <div className="text-4xl mb-2">👕</div>
                          <div className="text-primary-200 font-bold text-lg mb-1">KamiWear</div>
                          <div className="text-secondary-500 text-xs">Anime Fashion Store</div>
                        </div>
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                          <span className="text-xs">🛒</span>
                        </div>
                      </div>
                    ) : project.title.includes('Resu-Nova') ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1)_0%,transparent_60%)]"></div>
                        <div className="relative z-10 text-center px-4">
                          <div className="text-4xl mb-2">📄</div>
                          <div className="text-primary-200 font-bold text-lg mb-1">Resu-Nova</div>
                          <div className="text-accent-500 text-xs">AI Resume Platform</div>
                        </div>
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">
                          <span className="text-xs">✨</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900/20 to-slate-900/20 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(156,163,175,0.1)_0%,transparent_50%)]"></div>
                        <div className="relative z-10 text-center px-4">
                          <div className="text-4xl mb-2">🚀</div>
                          <div className="text-primary-200 font-bold text-lg mb-1">{project.title}</div>
                          <div className="text-muted text-xs">Featured Project</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-text-primary mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-text-tertiary text-sm md:text-base mb-4 leading-relaxed">{project.description}</p>
                  {project.highlight && (
                    <div className="mb-4 p-3 bg-secondary-500/5 border-l-2 border-secondary-500 rounded-r">
                      <p className="text-secondary-500 text-xs italic">{project.highlight}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary-500/10 text-secondary-500 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.detailPage && (
                      <motion.a
                        href={project.detailPage}
                        className="inline-flex items-center text-primary-200 bg-secondary-500/10 hover:bg-secondary-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        View Details →
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary-500 hover:text-accent-500 text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        GitHub →
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent-500 hover:text-secondary-500 text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Live Demo →
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-muted text-sm">
              <span>Scroll to explore</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-2 rounded-full bg-muted"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              Work <span className="text-secondary-500">Experience</span>
            </h2>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
              My journey through various roles and projects that shaped my expertise
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-secondary-500/20 via-secondary-500 to-accent-500/20 md:left-1/2 md:-ml-0.5"></div>

            <div className="space-y-12">
              {[
                {
                  period: '2023 - Present',
                  role: 'Senior Frontend Developer',
                  company: 'InnovateTech',
                  description: 'Leading frontend development for enterprise SaaS platforms with focus on performance and user experience.'
                },
                {
                  period: '2022 - 2023',
                  role: 'Frontend Engineer',
                  company: 'Creative Studio',
                  description: 'Developed interactive web applications with 3D visualization and immersive user interfaces.'
                },
                {
                  period: '2021 - 2022',
                  role: 'UI Developer',
                  company: 'Digital Agency',
                  description: 'Created responsive websites and web applications for diverse clients using modern technologies.'
                },
                {
                  period: '2020 - 2021',
                  role: 'Frontend Intern',
                  company: 'StartupXYZ',
                  description: 'Learned best practices in web development and contributed to multiple product features.'
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-10 md:pl-0 md:flex md:justify-center"
                >
                  <div className="absolute -left-2 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 md:left-1/2 md:ml-[-5px]"></div>
                  <div className="bg-background/50 backdrop-blur-sm border border-muted/10 rounded-xl p-6 max-w-md md:max-w-2xl">
                    <div className="text-secondary-500 text-sm font-medium mb-2">{exp.period}</div>
                    <h3 className="text-xl md:text-2xl font-black text-text-primary mb-2 tracking-tight">{exp.role}</h3>
                    <div className="text-accent-500 font-medium text-lg mb-4">{exp.company}</div>
                    <p className="text-text-tertiary leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              Get In <span className="text-secondary-500">Touch</span>
            </h2>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-black text-text-primary mb-5 tracking-tight">Let's connect</h3>
                <p className="text-text-tertiary mb-8 text-lg leading-relaxed">
                  I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 p-3 bg-secondary-500/10 rounded-lg">
                    <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Email</h4>
                    <p className="text-text-tertiary">vanshd994@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 p-3 bg-accent-500/10 rounded-lg">
                    <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Location</h4>
                    <p className="text-text-tertiary">Haryana, Gurugram, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 p-3 bg-secondary-500/10 rounded-lg">
                    <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Social</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://github.com/vanshDalal521" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-secondary-500 transition-colors">GitHub</a>
                      <a href="https://www.linkedin.com/in/vanshdalal1/" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent-500 transition-colors">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-background/50 backdrop-blur-sm border border-muted/10 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-background/50 border border-text-subtle/30 rounded-lg px-4 py-3 text-text-primary placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-background/50 border border-text-subtle/30 rounded-lg px-4 py-3 text-text-primary placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-background/50 border border-text-subtle/30 rounded-lg px-4 py-3 text-text-primary placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-secondary-500 to-accent-500 text-background font-medium rounded-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;