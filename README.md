# Vansh Dalal — Portfolio

> Interactive 3D portfolio built with React, Three.js, GSAP & TypeScript.

---

## Overview

A modern, immersive personal portfolio website featuring a real-time 3D character, smooth scroll animations, and a clean responsive layout. Designed to showcase projects, skills, and experience in a way that stands out.

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18, TypeScript, Vite |
| **3D & Graphics** | Three.js, React Three Fiber, Drei, Rapier, Postprocessing |
| **Animations** | GSAP (ScrollTrigger, SplitText), Framer Motion |
| **Scrolling** | Lenis (smooth scroll) |
| **UI** | React Icons, React Fast Marquee |
| **Analytics** | @vercel/analytics |
| **Tools** | ESLint, Draco 3D |

---

## Features

- **3D Character Model** — Encrypted, Draco-compressed 3D avatar with interactive hover & scroll-triggered animations
- **Smooth Scrolling** — Lenis-powered smooth scroll fully integrated with GSAP ScrollTrigger
- **Loading Screen** — Animated loading sequence with progress bar, marquee text, and click-to-enter interaction
- **Custom Cursor** — Animated cursor follows mouse movement with hover effects on interactive elements
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Scroll Animations** — GSAP-powered scroll-triggered animations with SplitText typography effects
- **Tech Stack Showcase** — Animated tech stack section with 3D-style cards
- **Contact Section** — Direct email link and social media integration

---

## Sections

- **Landing** — Hero section with 3D character, animated typography, and rotating role display
- **About** — Personal introduction and background
- **What I Do** — Services and specializations
- **Career** — Professional experience timeline
- **Work** — Project showcase with filterable grid
- **Tech Stack** — 3D animated technology cards
- **Contact** — Get in touch section

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/vanshDalal521/Portfolio.git
cd Portfolio
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Build output goes to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Character/           # 3D character scene, loader, animations, lighting
│   │   └── utils/           # Decryption, animation, mouse tracking, resize
│   ├── styles/              # Component CSS files
│   ├── utils/               # GSAP scroll, SplitText, entry FX
│   ├── About.tsx
│   ├── Career.tsx
│   ├── Contact.tsx
│   ├── Cursor.tsx
│   ├── HoverLinks.tsx
│   ├── Landing.tsx
│   ├── Loading.tsx
│   ├── MainContainer.tsx
│   ├── Navbar.tsx
│   ├── SocialIcons.tsx
│   ├── TechStack.tsx
│   ├── WhatIDo.tsx
│   ├── Work.tsx
│   └── WorkImage.tsx
├── context/
│   └── LoadingProvider.tsx
├── data/
│   └── boneData.ts
├── App.tsx
├── index.css
└── main.tsx
```

---

## 3D Character Model

The 3D avatar is encrypted and loaded at runtime:

1. **Encrypted model** stored in `public/models/character.enc`
2. **Decrypted** in-browser using AES-CBC (Web Crypto API)
3. **Loaded** via GLTFLoader with Draco decompression
4. **Animated** with GSAP scroll timelines and mouse tracking

The encryption utility is at `public/models/encrypt.cjs`.

---

## Deployment

### Vercel (Recommended)

Push to GitHub, import at [vercel.com/new](https://vercel.com/new), and deploy — Vercel auto-detects Vite.

Via CLI:

```bash
npm i -g vercel
vercel
```

No environment variables are required.

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with network host |
| `npm run build` | TypeScript check + Vite production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## License

MIT License — see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Vansh Dalal

---

## Contact

**Vansh Dalal** — [vanshd994@gmail.com](mailto:vanshd994@gmail.com)

GitHub: [@vanshDalal521](https://github.com/vanshDalal521)

---

<p align="center">Built with React, Three.js & GSAP</p>
