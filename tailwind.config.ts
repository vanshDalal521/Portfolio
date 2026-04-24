import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#eaeaea', // soft white (our primary)
          300: '#d6d6d6',
          400: '#b8b8b8',
          500: '#9ca3af', // muted text
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#1f2937',
        },
        secondary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#cfcfff',
          300: '#bfbfff',
          400: '#9f9fff',
          500: '#7c7cff', // royal violet (accent 1)
          600: '#5c5fcc',
          700: '#4c4caf',
          800: '#3c3c9c',
          900: '#2c2c8c',
        },
        accent: {
          50: '#f0fff9',
          100: '#e0fff3',
          200: '#d0ffed',
          300: '#b0ffe1',
          400: '#70ffd5',
          500: '#00ffd1', // soft neon mint (accent 2)
          600: '#00ccaa',
          700: '#009980',
          800: '#007761',
          900: '#005542',
        },
        background: '#0B0D10', // deep charcoal black
        foreground: '#EAEAEA', // soft white
        muted: '#9CA3AF', // muted text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'Inter', 'Neue Montreal', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
