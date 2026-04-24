'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const GeneralProjectDetail = ({ params }: { params: { slug: string } }) => {
  // Define project data based on slug
  const getProjectData = () => {
    switch (params.slug) {
      case 'resu-nova':
        return {
          title: 'Resu-Nova',
          subtitle: 'AI Resume Builder',
          description: 'A professional branding platform and AI-powered resume builder that helps job seekers create high-impact resumes in minutes.',
          tags: ['Next.js', 'React', 'OpenAI', 'Tailwind CSS', 'PostgreSQL'],
          github: 'https://github.com/vanshDalal521/ResuNova',
          demo: 'https://resu-nova.vercel.app',
          screenshots: [
            { emoji: '📄', title: 'AI Resume Generation', desc: 'Generate professional resumes based on your experience and skills' },
            { emoji: '✨', title: 'Real-time Editor', desc: 'Edit your resume with live preview and AI suggestions' },
            { emoji: '🎯', title: 'ATS Optimization', desc: 'Optimize your resume for applicant tracking systems' },
            { emoji: '🎨', title: 'Professional Templates', desc: 'Choose from a variety of modern, professional designs' }
          ],
          features: [
            'AI-powered content generation',
            'Real-time resume editing',
            'Multiple professional templates',
            'ATS optimization tools',
            'PDF export functionality',
            'Secure user authentication'
          ]
        };
      case 'ar-experience':
        return {
          title: 'AR Experience App',
          subtitle: 'Augmented Reality',
          description: 'An augmented reality application for product visualization with immersive 3D interactions.',
          tags: ['React Native', 'ARKit', 'WebGL', 'Three.js'],
          github: 'https://github.com/vanshDalal521/ar-experience-app',
          demo: 'https://ar-experience-demo.netlify.app',
          screenshots: [
            { emoji: '📱', title: 'Camera View', desc: 'AR camera interface with overlay controls' },
            { emoji: '🎯', title: 'Object Placement', desc: '3D object positioning and scaling' },
            { emoji: '🔄', title: 'Interaction Controls', desc: 'Gesture-based manipulation' },
            { emoji: '🎨', title: 'Customization Panel', desc: 'Material and texture options' }
          ],
          features: [
            'Real-time AR rendering',
            '3D object manipulation',
            'Gesture recognition',
            'Light estimation',
            'Surface detection',
            'Cross-platform compatibility'
          ]
        };
      default:
        return {
          title: 'Project',
          subtitle: 'Development',
          description: 'A comprehensive project showcasing modern web development techniques and innovative solutions.',
          tags: ['React', 'Next.js', 'TypeScript', 'CSS'],
          github: '#',
          demo: '#',
          screenshots: [
            { emoji: '🖼️', title: 'Interface Preview', desc: 'Main user interface design' },
            { emoji: '⚙️', title: 'Features', desc: 'Key functionality demonstration' },
            { emoji: '📱', title: 'Responsive Design', desc: 'Mobile and tablet adaptation' },
            { emoji: '🎨', title: 'UI/UX Elements', desc: 'Visual design components' }
          ],
          features: [
            'Modern user interface',
            'Responsive design',
            'Optimized performance',
            'Clean code architecture',
            'Comprehensive documentation',
            'Test coverage'
          ]
        };
    }
  };

  const project = getProjectData();

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-secondary-500 hover:text-accent-500 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-200 mb-4">
                {project.title} <span className="text-secondary-500">{project.subtitle}</span>
              </h1>
              <p className="text-xl text-muted max-w-3xl">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary-500/10 text-secondary-500 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary-500 text-background rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source Code
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-secondary-500 text-secondary-500 rounded-lg font-medium hover:bg-secondary-500 hover:text-background transition-all inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary-200 mb-6">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="bg-background/50 border border-muted/10 rounded-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 flex items-center justify-center">
                  <div className="text-center text-muted">
                    <div className="text-5xl mb-3">{screenshot.emoji}</div>
                    <p>{screenshot.title}</p>
                    <p className="text-sm mt-2">(Add your screenshot here)</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary-200 mb-2">{screenshot.title}</h3>
                  <p className="text-muted text-sm">{screenshot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Project Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary-200 mb-6">Project Details</h2>
          <div className="bg-background/50 border border-muted/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary-200 mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Technical Implementation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-primary-200 mb-6">Technical Implementation</h2>
          <div className="bg-gradient-to-r from-secondary-500/10 to-accent-500/10 border border-secondary-500/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-3">Architecture</h3>
                <p className="text-muted">
                  Built with modern web technologies following best practices for performance,
                  maintainability, and scalability. The project follows component-based architecture
                  with clean separation of concerns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-3">Performance</h3>
                <p className="text-muted">
                  Optimized for fast loading times and smooth interactions. Implements lazy loading,
                  code splitting, and efficient state management to ensure optimal user experience.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// Dynamic route component
const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  return <GeneralProjectDetail params={params} />;
};

export default ProjectDetailPage;