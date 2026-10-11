# Prem Supthaksina — Personal Portfolio Website

A modern, responsive personal portfolio website showcasing engineering projects across **Robotics**, **Computer Vision (OpenCV)**, **Embedded Systems & Firmware**, and **Full-stack IoT Platforms**.

Built with React 19, TypeScript, Vite, and Bootstrap.

---

## 🚀 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Linting & Code Quality**: ESLint 9 & TypeScript-ESLint

---

## 📁 Project Architecture & Structure

```
myportfolioweb/
├── public/
│   ├── assets/              # Project images, schematics, and PDF documentation
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Responsive top navigation with active highlights
│   │   │   └── Footer.tsx   # Comprehensive portfolio footer with social links
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx   # Reusable project preview cards
│   │   │   ├── ProjectModal.tsx  # Detailed modal view with docs & repo links
│   │   │   └── ProjectIndex.tsx  # Searchable & filterable project catalog
│   │   ├── Footer.tsx       # Re-export alias
│   │   ├── Navbar.tsx       # Re-export alias
│   │   └── ProjectIndex.tsx # Re-export alias
│   ├── data/
│   │   └── projects.ts      # Structured projects data, tags, and links
│   ├── pages/
│   │   ├── Home.tsx         # Hero section, engineering pillars & highlights
│   │   ├── Projects.tsx     # Full projects gallery with category filters
│   │   ├── About.tsx        # Biography, KMUTT focus & categorized skills
│   │   ├── Contact.tsx      # Contact channels, copy-email & message form
│   │   └── NotFound.tsx     # 404 fallback page
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces (Project, SkillCategory, etc.)
│   ├── App.tsx              # Router view layout
│   ├── index.css            # Custom CSS tokens, hover effects, and utilities
│   └── main.tsx             # Application bootstrap & global style imports
├── index.html               # HTML5 entry with meta tags and Google fonts
├── package.json             # Dependencies and build scripts
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite bundler configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm`

### Installation

1. Navigate to the project directory:
   ```bash
   cd myportfolioweb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with hot-reload:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Compile and bundle for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

### Code Quality & Linting

Run ESLint:
```bash
npm run lint
```

---

## 🎯 Key Improvements & Fixes

1. **Security & Dependencies**:
   - Removed deprecated typo package `boostrap@2.0.0`.
   - Updated dependencies and resolved 26 security vulnerabilities to 0 vulnerabilities.
   - Added `bootstrap-icons` for modern UI indicators.

2. **Architecture & Bug Fixes**:
   - Fixed `Footer.tsx` bug which previously duplicated the entire `ProjectIndex` component across all pages.
   - Replaced broken `/projects/:id` links with an interactive `ProjectModal` viewer.
   - Fixed email link in `Contact.tsx` from placeholder `your.email@example.com` to `premsupthaksina@gmail.com`.
   - Added a `NotFound` (404) page route to prevent blank page crashes on invalid paths.

3. **User Experience & Design**:
   - Added instant search and category filtering (All, Robotics, IoT, Embedded).
   - Added Grid and List / Accordion view mode switcher.
   - Enhanced About page with categorized skill badges, engineering philosophy, and KMUTT academic aspiration.
   - Enhanced Contact page with a "Copy to Clipboard" email button and interactive form feedback.

---

## 👤 Author

**Prem Supthaksina**
- GitHub: [@Pr3mz](https://github.com/Pr3mz)
- Email: [premsupthaksina@gmail.com](mailto:premsupthaksina@gmail.com)
