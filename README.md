# Pragati's Tech Notebook 📓

A creative, notebook-inspired developer portfolio designed to feel like exploring someone's personal tech journal. Built with interactive page flips, handwritten-style elements, sticky notes, doodles, and graph-paper layouts to showcase my journey, technical skills, and projects.

**Live Preview:** Opens with a notebook cover. Flip it open and explore About, Skills, Projects, Achievements, and Contact pages.

---

## ✨ Features

- 📖 **Interactive Notebook Cover** – Animated cover with a page-flip introduction.
- 🗂️ **Tabbed Navigation** – Dedicated pages for About, Skills, Projects, Achievements, and Contact.
- 🟨 **Sticky Notes** – Organised skill categories covering programming, backend, web development, AI/ML, and tools.
- 🖼️ **Taped Photos** – Polaroid-inspired images with rotation and washi-tape decorations.
- ✏️ **Hand-drawn Doodles** – Custom SVG illustrations scattered throughout the notebook.
- 📇 **Interactive Project Cards** – Graph-paper-inspired cards with hover animations.
- 🏆 **Achievements Wall** – A collection of certifications, coding achievements, and open-source contributions.
- 🎨 **Consistent Design System** – Reusable semantic design tokens and themed components.
- 📱 **Responsive Layout** – Notebook experience adapted for different screen sizes.

---

## 🧰 Tech Stack

**Core Development**
- React 18
- TypeScript
- Vite
- Tailwind CSS

**UI & Animations**
- shadcn/ui
- Radix UI
- Framer Motion
- Lucide React

**Styling & Typography**
- Semantic design tokens (HSL)
- Caveat
- Patrick Hand
- Indie Flower

**Testing & Code Quality**
- Vitest
- Playwright
- ESLint
- TypeScript Strict Mode

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── notebook/
│   │   ├── NotebookCover
│   │   ├── NotebookPage
│   │   ├── NotebookTabs
│   │   ├── StickyNote
│   │   ├── TapedPhoto
│   │   ├── TapeStrip
│   │   ├── DoodleSvg
│   │   └── ProjectCard
│   │
│   ├── pages/
│   │   ├── AboutPage
│   │   ├── SkillsPage
│   │   ├── ProjectsPage
│   │   ├── AchievementsPage
│   │   └── ContactPage
│   │
│   └── ui/
│
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
│
├── hooks/
├── lib/
└── index.css
```

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/Pragati-03/Pragati-s-Portfolio.git
cd my-digital-notebook
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Create a production build**

```bash
npm run build
```

---

## 🎨 Design Philosophy

The portfolio is designed around the idea of a personal technical notebook rather than a conventional developer website.

The visual language combines:

- Graph-paper and paper-texture backgrounds.
- Handwritten typography and ink-inspired colours.
- Sticky notes, taped photographs, and illustrated doodles.
- Subtle animations and interactive transitions.

The design uses reusable semantic tokens defined in `src/index.css` and `tailwind.config.ts`, keeping the visual experience consistent and easy to maintain.

**The goal:** Make exploring a developer's portfolio feel like flipping through a real notebook.

---

## 👩‍💻 About

Hi, I'm **Pragati Agrawal**, a Computer Science graduate from **Vellore Institute of Technology, Bhopal**.

I'm interested in building practical software solutions, particularly with Python, backend development, AI-powered applications, and data-driven systems.

I enjoy experimenting with technologies, building projects, solving problems, and continuously learning through hands-on development.

**Explore my work:**

- GitHub: https://github.com/Pragati-03
- LinkedIn: https://linkedin.com/in/pragati-agrawal-77624a24a
- Portfolio: https://pragati-s-portfolio-plum.vercel.app

---

*Built with curiosity, creativity, and lots of coffee ☕*