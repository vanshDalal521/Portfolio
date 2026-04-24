'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const KamiWearDetail = () => {
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
                KamiWear <span className="text-secondary-500">E-Commerce</span>
              </h1>
              <p className="text-xl text-muted max-w-3xl">
                A fully self-built anime-themed e-commerce platform featuring modern UI, 
                comprehensive cart functionality, and seamless shopping experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary-500/10 text-secondary-500 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-accent-500/10 text-accent-500 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-secondary-500/10 text-secondary-500 rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-accent-500/10 text-accent-500 rounded-full text-sm">E-Commerce</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/vanshDalal521/Kamiwear"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary-500 text-background rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source Code
            </a>
            <a
              href="https://kamiwear-j2b9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-secondary-500 text-secondary-500 rounded-lg font-medium hover:bg-secondary-500 hover:text-background transition-all inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
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
            <div className="bg-background/50 border border-muted/10 rounded-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-5xl mb-3">🏠</div>
                  <p>Homepage Preview</p>
                  <p className="text-sm mt-2">(Add your screenshot here)</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-200 mb-2">Homepage</h3>
                <p className="text-muted text-sm">Main landing page showcasing featured anime merchandise with hero banner and category navigation.</p>
              </div>
            </div>
            
            <div className="bg-background/50 border border-muted/10 rounded-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-5xl mb-3">🛍️</div>
                  <p>Product Listing</p>
                  <p className="text-sm mt-2">(Add your screenshot here)</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-200 mb-2">Product Catalog</h3>
                <p className="text-muted text-sm">Filterable product listings with category sorting, search functionality, and detailed product cards.</p>
              </div>
            </div>
            
            <div className="bg-background/50 border border-muted/10 rounded-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-5xl mb-3">🛒</div>
                  <p>Shopping Cart</p>
                  <p className="text-sm mt-2">(Add your screenshot here)</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-200 mb-2">Cart System</h3>
                <p className="text-muted text-sm">Full cart functionality with item management, quantity adjustment, and real-time price calculation.</p>
              </div>
            </div>
            
            <div className="bg-background/50 border border-muted/10 rounded-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-5xl mb-3">💳</div>
                  <p>Checkout Process</p>
                  <p className="text-sm mt-2">(Add your screenshot here)</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-200 mb-2">Checkout Flow</h3>
                <p className="text-muted text-sm">Streamlined checkout process with form validation, payment options, and order confirmation.</p>
              </div>
            </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background/50 border border-muted/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary-200 mb-4">Key Features</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>Product catalog with category filtering and search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>Complete shopping cart functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>Responsive design for all device sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>Modern anime-inspired UI with smooth animations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>User-friendly checkout process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span>Performance optimized with lazy loading</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background/50 border border-muted/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary-200 mb-4">Technical Implementation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-secondary-500 mb-2">Frontend Architecture</h4>
                  <p className="text-muted text-sm">Component-based React structure with reusable UI elements and state management.</p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-500 mb-2">Styling Approach</h4>
                  <p className="text-muted text-sm">Tailwind CSS utility classes for rapid development and consistent design system.</p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-500 mb-2">State Management</h4>
                  <p className="text-muted text-sm">React hooks for cart state, user preferences, and application data flow.</p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-500 mb-2">Performance</h4>
                  <p className="text-muted text-sm">Optimized bundle size, image compression, and efficient re-rendering strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary-200 mb-6">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 border border-muted/10 rounded-xl p-6">
              <h3 className="font-semibold text-secondary-500 mb-3">Cart State Persistence</h3>
              <p className="text-muted mb-3">Challenge: Maintaining cart data across page refreshes and sessions.</p>
              <p className="text-muted text-sm">Solution: Implemented localStorage integration with automatic data synchronization and fallback mechanisms.</p>
            </div>
            <div className="bg-background/50 border border-muted/10 rounded-xl p-6">
              <h3 className="font-semibold text-secondary-500 mb-3">Responsive Product Grid</h3>
              <p className="text-muted mb-3">Challenge: Creating adaptive product layouts that work on all screen sizes.</p>
              <p className="text-muted text-sm">Solution: Used CSS Grid with responsive breakpoints and flexible component sizing.</p>
            </div>
          </div>
        </motion.section>

        {/* Results & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary-200 mb-6">Results & Impact</h2>
          <div className="bg-gradient-to-r from-secondary-500/10 to-accent-500/10 border border-secondary-500/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary-500 mb-2">100%</div>
                <div className="text-muted">Solo Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-500 mb-2">4+</div>
                <div className="text-muted">Core Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-500 mb-2">25+</div>
                <div className="text-muted">UI Components</div>
              </div>
            </div>
            <p className="text-center text-muted mt-6 max-w-2xl mx-auto">
              Successfully delivered a complete e-commerce solution demonstrating full-stack thinking, 
              attention to user experience, and modern web development practices.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KamiWearDetail;