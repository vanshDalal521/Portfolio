// SEO Configuration
export const seoConfig = {
  title: "Vansh Dalal | Frontend Developer",
  description: "Award-winning portfolio of Vansh Dalal, a creative frontend developer specializing in immersive web experiences.",
  keywords: [
    "frontend developer",
    "web developer",
    "react developer",
    "three.js",
    "3d web",
    "immersive web",
    "creative developer",
    "portfolio",
    "web design",
    "ux/ui"
  ],
  author: "Vansh Dalal",
  siteUrl: "https://vanshdalal.dev",
  social: {
    linkedin: "vanshdalal1",
    github: "vanshDalal521",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vanshdalal.dev",
    siteName: "Vansh Dalal Portfolio",
    title: "Vansh Dalal | Frontend Developer",
    description: "Award-winning portfolio of Vansh Dalal, a creative frontend developer specializing in immersive web experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Dalal | Frontend Developer",
    description: "Award-winning portfolio of Vansh Dalal, a creative frontend developer specializing in immersive web experiences.",
  }
};

// Accessibility configuration
export const accessibilityConfig = {
  // ARIA labels for common components
  ariaLabels: {
    mainNavigation: "Main navigation menu",
    skipToContent: "Skip to main content",
    heroImage: "Hero image showing Vansh Dalal, Frontend Developer",
    projectCard: "Project card",
    contactForm: "Contact form",
    socialLink: "Social media link",
  },
  // Focus management settings
  focus: {
    outlineStyle: "2px solid #7C7CFF", // Secondary color for focus
    outlineOffset: "2px",
  },
  // Screen reader only text helper
  srOnlyClass: "absolute h-0 w-0 overflow-hidden whitespace-nowrap"
};

// Performance metrics
export const performanceConfig = {
  // Core Web Vitals targets
  coreWebVitals: {
    lcp: 2500, // Largest Contentful Paint in ms
    fcp: 1800, // First Contentful Paint in ms
    cls: 0.1,  // Cumulative Layout Shift
    fid: 100,  // First Input Delay in ms
  },
  // Image optimization settings
  imageOptimization: {
    formats: ["webp", "avif"],
    lazyLoading: true,
    placeholder: "blur",
  }
};