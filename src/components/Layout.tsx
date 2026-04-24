'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CustomCursor from './ui/CustomCursor';
import PersistentBackground, { updateScrollPosition } from './3d/PersistentBackground';
import { useScrollPosition } from '../lib/hooks/useScrollPosition';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      updateScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Experience', href: '/#experience', id: 'experience' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PersistentBackground />
      <CustomCursor />

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
          }`}
      >
        <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Vansh<span className="text-secondary-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-secondary-500 ${pathname === link.href ? 'text-secondary-500' : 'text-text-primary'
                  }`}
                onClick={(e) => {
                  if (link.id !== 'home') {
                    if (pathname === '/') {
                      e.preventDefault();
                      const element = document.getElementById(link.id);
                      if (element) {
                        const offsetTop = element.offsetTop - 80; // Account for fixed header
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium py-2 transition-colors hover:text-secondary-500 ${pathname === link.href ? 'text-secondary-500' : 'text-text-primary'
                    }`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.id !== 'home') {
                      if (pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById(link.id);
                        if (element) {
                          const offsetTop = element.offsetTop - 80; // Account for fixed header
                          window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                          });
                        }
                      }
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-muted/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Vansh. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="#"
              className="text-muted hover:text-secondary-500 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-muted hover:text-secondary-500 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted hover:text-secondary-500 transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;