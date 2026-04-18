# Pragati's Tech Notebook 📓

A digital notebook-style portfolio site — built to feel like flipping through a CS student's handwritten journal, complete with sticky notes, taped photos, doodles, and graph-paper pages.

**Live preview:** opens to a notebook cover → click to flip it open → tab through About, Skills, Projects, Achievements, and Contact.

---

## ✨ Features

- 📖 **Notebook cover → page flip** intro animation
- 🗂️ **Tabbed pages** for About, Skills, Projects, Achievements, Contact
- 🟨 **Sticky notes** for grouped skills (Programming, Web Dev, ML, Tools)
- 🖼️ **Taped photos** with rotation and washi-tape strips
- ✏️ **Hand-drawn SVG doodles** scattered across pages
- 📇 **Project cards** on graph-paper backgrounds with hover tilt
- 🏆 **Achievements wall** with hackathons, certifications, and research
- 🎨 Fully themed via semantic design tokens (HSL) — works clean in light mode

---

## 🧰 Tech Stack

**Core**
- ⚛️ **React 18** + **TypeScript**
- ⚡ **Vite** (build tool & dev server)
- 🎨 **Tailwind CSS** (semantic design tokens via `index.css`)

**UI & Motion**
- 🧩 **shadcn/ui** + **Radix UI** primitives
- 🎬 **Framer Motion** (page flips, hover tilts, page transitions)
- 🪶 **Lucide React** (icons)

**Fonts**
- ✍️ **Caveat** / **Patrick Hand** / **Indie Flower** — handwritten feel

**Tooling**
- 🧪 **Vitest** (unit tests)
- 🎭 **Playwright** (e2e fixture)
- 🛡️ **ESLint** + TypeScript strict configs

---

## 📁 Project Structure

```
src/
├─ components/
│  ├─ notebook/        # NotebookCover, NotebookPage, NotebookTabs,
│  │                   # StickyNote, TapedPhoto, TapeStrip, DoodleSvg,
│  │                   # ProjectCard
│  ├─ pages/           # AboutPage, SkillsPage, ProjectsPage,
│  │                   # AchievementsPage, ContactPage
│  └─ ui/              # shadcn/ui primitives
├─ pages/
│  ├─ Index.tsx        # main notebook shell
│  └─ NotFound.tsx
├─ hooks/
├─ lib/
└─ index.css           # design tokens (HSL)
```

---

## 🚀 Getting Started

```sh
# install
npm i

# dev server
npm run dev

# production build
npm run build
```

---

## 🎨 Design Notes

The whole site is themed through semantic tokens defined in `src/index.css` and `tailwind.config.ts` — no hardcoded colors in components. Textures (`paper-texture`, `graph-paper`, `desk-texture`) and ink colors (`ink-pen`, `ink-code`, `highlighter`) are reusable utilities so every page stays consistent.

The vibe is intentionally **cozy, creative, handwritten, student-style** — not corporate.

---

## 👋 About

Built by **Pragati** — final-year CS student into Machine Learning + Web Dev.
