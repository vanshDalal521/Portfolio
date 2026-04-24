# Vansh Dalal - Portfolio Website

An award-winning, Awwwards-level portfolio website featuring real 3D models, buttery-smooth animations, and an interactive user experience.

## 🌟 Features

- **Real 3D Models**: Interactive 3D elements powered by Three.js, React Three Fiber, and Drei
- **Smooth Animations**: Framer Motion, GSAP, and Lenis for fluid animations
- **Luxury Design**: Premium color palette with deep charcoal black (#0B0D10), soft white (#EAEAEA), royal violet (#7C7CFF), and neon mint (#00FFD1)
- **Responsive Design**: Perfectly optimized for desktop and mobile devices
- **Performance Optimized**: Lazy loading, model compression, and performance optimizations
- **Modern Tech Stack**: Next.js 14+, TypeScript, Tailwind CSS, and more

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis
- **Deployment**: Vercel

## 🎨 Color Palette

- **Background**: #0B0D10 (Deep Charcoal Black)
- **Primary**: #EAEAEA (Soft White)
- **Accent 1**: #7C7CFF (Royal Violet - Tech Luxury)
- **Accent 2**: #00FFD1 (Soft Neon Mint - for hover & CTA)
- **Muted Text**: #9CA3AF

## 🔤 Typography

- **Heading Font**: Satoshi / Inter / Neue Montreal
- **Body Font**: Inter
- **Font Weights**: 400, 500, 700

## 🧩 Sections

1. **Hero Section**: Fullscreen hero with interactive 3D model and mouse movement effects
2. **About Me**: Minimal text with interactive 3D element
3. **Skills**: Floating 3D skill cards with physics-like movement
4. **Projects**: Horizontal scroll gallery with interactive 3D cards
5. **Experience**: Vertical timeline with scroll-triggered animations
6. **Contact**: Clean contact form with animated submit button

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vanshDalal521/Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── models/             # 3D models (.glb files)
│   └── images/             # Images and graphics
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout with providers
│   │   └── page.tsx       # Home page with all sections
│   ├── components/        # Reusable components
│   │   ├── 3d/           # 3D components
│   │   ├── ui/           # UI components
│   │   └── providers/    # Context providers
│   ├── lib/              # Utilities and hooks
│   │   ├── utils/        # Utility functions
│   │   └── hooks/        # Custom hooks
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

Deploy your site to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vanshDalal521/Portfolio)

### Manual Deployment

1. Build the production version:
```bash
npm run build
```

2. Preview the build locally:
```bash
npm run preview
```

3. Deploy the output to your hosting provider

## ⚙️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Performance & Accessibility

- Optimized for 60fps performance
- SEO-friendly with proper meta tags
- Accessible contrast ratios
- Responsive design for all screen sizes
- Keyboard navigation support

## 🎯 Future Enhancements

- Custom cursor with interactive states
- Ambient background sound toggle
- Light parallax effects
- Advanced loading screen with progress
- More interactive 3D models

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.