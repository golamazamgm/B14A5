# ⚡ Azam's Dev Stack — Interactive Tech Stack Builder

[![Live Demo](https://img.shields.io/badge/Live%20Demo-b14--a5--azam.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://b14-a5-azam.netlify.app/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

An interactive, responsive web application designed to help developers explore, evaluate, and assemble their ideal modern web development stack. Compare technologies across frontend, backend, database, and tooling, enforce modular architecture choices, and manage your selections with a real-time stack inspector.

🌐 **Live Deployment**: [https://b14-a5-azam.netlify.app/](https://b14-a5-azam.netlify.app/)

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Application Architecture](#-application-architecture)
- [Author](#-author)

---

## ✨ Features

- **🎯 Interactive Stack Builder**: Browse through a curated collection of technologies, view detailed descriptions, ratings, badges, and difficulty levels.
- **🛡️ Category-Aware Selection Rule**: Enforces an architectural rule of **one technology per category**. Choosing a different tool within the same category automatically replaces the previous selection to prevent conflicting configurations.
- **📌 Sticky Real-Time Stack Sidebar**:
  - Live counter reflecting total selected tools.
  - Interactive list with technology badges, icons, and categories.
  - Single-item removal with instant UI synchronization.
  - One-click **"Remove All"** reset capability.
  - Clean empty-state UX when no technologies are picked.
- **⚡ Next-Gen React 19 Patterns**: Built leveraging React 19's `use()` hook for promise unwrapping alongside `<Suspense>` boundary loading states.
- **🎨 Modern UI & Micro-Interactions**:
  - Styled with Tailwind CSS v4 and DaisyUI v5.
  - Glassmorphic accents, gradient typography, and responsive grid layouts.
  - Full mobile responsiveness with a collapsible DaisyUI navigation drawer.
- **🔍 Blazing Fast Performance & Linting**: Built on Vite with Oxlint integration for fast feedback loops and type-checking.

---

## 🛠️ Tech Stack

### **Core Framework & Runtime**
- **[React 19](https://react.dev/)** (`^19.2.8`) — Modern UI library with concurrent features and the `use()` hook.
- **[TypeScript](https://www.typescriptlang.org/)** (`~6.0.2`) — Static type safety and developer productivity.
- **[Vite](https://vite.dev/)** (`^8.3.0`) — Next-generation frontend tooling and fast development server.

### **Styling & Components**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (`^4.3.3`) — Engine-native utility-first styling with `@tailwindcss/vite`.
- **[DaisyUI v5](https://daisyui.com/)** (`^5.7.47`) — Semantic component classes for accessible, modern UI elements.

### **Tooling & Code Quality**
- **[Oxlint](https://oxc.rs/)** (`^1.81.0`) — High-performance Rust-based JavaScript/TypeScript linter.
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** — Fast HMR and JSX transformation.

---

## 📂 Directory Structure

```plaintext
B14-A-05-solve/
├── public/                       # Static public assets
│   ├── banner-stack.png          # Hero section illustration
│   ├── favicon.svg               # Site favicon
│   ├── gemini-code-*.json        # Technology data catalog
│   ├── icons.svg                 # SVG sprite / iconography
│   └── logo-text.png             # Branding logo
├── src/
│   ├── assets/                   # Project media and static imports
│   ├── components/               # Modular React components
│   │   ├── hero/
│   │   │   └── HeroSection.tsx   # Hero banner with dynamic call-to-actions
│   │   ├── nav/
│   │   │   └── NavBar.tsx        # Responsive navigation bar with DaisyUI
│   │   └── Technologies/
│   │       ├── Technologies.tsx  # Main stack controller & grid layout
│   │       ├── Technology.tsx    # Individual technology card item
│   │       └── YourStack.tsx     # Sticky sidebar showing selected stack
│   ├── App.css                   # Application-level styling
│   ├── App.tsx                   # Root component with Suspense & data fetch
│   ├── index.css                 # Global CSS (Tailwind & DaisyUI imports)
│   ├── main.tsx                  # Application entry point
│   └── type.ts                   # TypeScript interfaces (technologyType)
├── .oxlintrc.json                # Oxlint linter configuration
├── index.html                    # Root HTML document
├── package.json                  # Dependencies, scripts, and project metadata
├── tsconfig.json                 # TypeScript project configuration
├── tsconfig.app.json             # App TypeScript compiler options
├── tsconfig.node.json            # Node/Vite TypeScript compiler options
└── vite.config.ts                # Vite plugin configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `pnpm` / `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/B14-A-05-solve.git
cd B14-A-05-solve
```

### 2. Install Dependencies

Install all required production and development dependencies:

```bash
npm install
```

### 3. Start the Development Server

Launch the Vite local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL displayed in your terminal).

---

## 📜 Available Scripts

This project is built using **Vite**. The following npm scripts are configured in `package.json`:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with instant HMR. |
| `npm run build` | Compiles TypeScript (`tsc -b`) and generates an optimized production bundle in `/dist`. |
| `npm run preview` | Spins up a local web server to preview the production build output. |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) to quickly analyze code and check for errors. |

---

## 🧩 Application Architecture

### **Data Flow & React 19 `use()` Hook**
1. **Promise Initialization**: `App.tsx` initiates the asynchronous fetch request for the technology dataset (`gemini-code-*.json`).
2. **Suspense Stream**: The raw promise is passed into `<Technologies>`, wrapped inside a `<Suspense>` boundary that shows a loading fallback while resolving.
3. **Promise Unwrapping**: `Technologies.tsx` unwrap the promise using `use(dataPromise)` directly inside the component body.

### **Category Constraint Logic**
```typescript
const handleAddToStack = (tech: technologyType) => {
  setSelectedStack((prev) => {
    // Retains only items from other categories, ensuring 1 tech per category
    const withoutCategory = prev.filter((item) => item.category !== tech.category);
    return [...withoutCategory, tech];
  });
};
```

---

## 🌐 Deployment

The project is continuously deployed on **Netlify**. Any push to the production branch triggers an automatic build using `npm run build` with output published from the `dist` directory.

- **Production URL**: [https://b14-a5-azam.netlify.app/](https://b14-a5-azam.netlify.app/)

---

## 👤 Author

Developed by **Golam Azam**  
- **Live Project**: [https://b14-a5-azam.netlify.app/](https://b14-a5-azam.netlify.app/)
