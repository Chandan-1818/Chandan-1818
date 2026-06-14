# Chandan S — Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** — utility-first styling with custom theme tokens
- **Framer Motion** — page and scroll animations
- **Vite 8** — build tool and dev server
- **react-icons** — brand icons (GitHub, LinkedIn, AWS, etc.)
- **canvas-confetti** — celebration effect

## Sections

- **Hero** — intro, typing animation, resume download
- **About** — background and summary
- **Skills** — categorized tech stack with progress bars
- **Education** — timeline
- **Projects** — filterable/searchable project cards
- **Certifications** — AWS and Google certifications
- **GitHub** — live profile stats and contribution calendar
- **Contact** — email, phone, social links

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

Opens at **http://localhost:5173**

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
PORTFOLIO/
├── public/
│   ├── resume.pdf          # Resume file for download
│   └── *.png               # Project screenshots
├── src/
│   ├── components/         # All page sections
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/light mode
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Tailwind + custom theme tokens
├── index.html
├── vite.config.ts
└── tailwind.config.js
```

## Customization

- Personal details (name, email, phone, links) are hardcoded in their respective components under `src/components/`
- Replace `public/resume.pdf` with your actual resume to enable the download button
- Theme colors (`brand-blue`, `brand-cyan`) are defined in `src/index.css` under `@theme`
