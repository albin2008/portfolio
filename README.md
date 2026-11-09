# ALBIN — Modern Editorial Portfolio

A minimal, editorial, serif-driven personal portfolio website for **Albin** (B.Tech CSE - Artificial Intelligence, Thejus Engineering College). Inspired by high-end architectural and typography-focused design templates (such as the *ARNOLD* design language).

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis** for smooth inertial scrolling.

---

## ✨ Features & Design Highlights

- **Editorial Serif Typography**: Distinctive heading hierarchy utilizing *Playfair Display* and *Cinzel*, paired with *DM Sans* for body readability and *JetBrains Mono* for technical accents.
- **Hero Architecture**: Full-bleed edge-to-edge minimalist architectural visual with a massive white serif **"ALBIN"** reveal overlapping the lower frame, slow parallax drift, and animated scroll indicator.
- **Smooth Inertial Scrolling**: Powered by **Lenis** (`smoothWheel: true`), calibrated for a magazine-like scrolling experience (automatically disabled if `prefers-reduced-motion` is detected).
- **Interactive Project Showcase**: Grid of projects with image zoom, hover lift, animated arrow, and an **"Inspect Code"** modal displaying actual C and Python code snippets.
- **Learning Evolution Timeline**: Visual milestone path charting the progression from **C Programming at G-Tech** → **Thejus Engineering College (B.Tech CSE-AI)** → **Python Core** → **AI & Machine Learning Foundations**.
- **Categorized Skills**: Interactive tabs with animated progress lines for Languages, AI & Data Science, and Developer Tooling.
- **Editorial Contact Section**: Direct contact channels, 1-click email copy button with visual feedback, and a validated message transmission form with celebratory feedback.
- **Custom Desktop Cursor**: Magnetic trailing ring with element expansion and contextual labels (`VIEW`, `GIT`, `THEME`, etc.). Gracefully disabled on touch devices.
- **Page-Load Curtain Reveal**: Fluid intro animation greeting visitors on first page load.
- **Top Scroll Progress Indicator**: Thin bronze progress bar along the viewport header.
- **Dark & Light Mode**: Smooth theme transitions with persistence stored in `localStorage`.
- **Single Source of Truth (`src/data.js`)**: All personal info, projects, links, skills, and bio are cleanly separated into a single file for instant customization.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ✏️ How to Customize Your Content (`src/data.js`)

All information on the website is controlled inside `src/data.js`. You do **not** need to touch any component code to update your profile!

Open `src/data.js` and edit:

```javascript
export const personalData = {
  firstName: "Albin",
  lastName: "Antony", // Your surname
  fullName: "Albin Antony",
  displayHeroName: "ALBIN",

  role: "CSE (AI) Student · Python · C · Aspiring AI Engineer",
  location: "Thejus Engineering College, Kerala, India",
  status: "Open for Summer 2025 Internships & Collaborations",

  // Update your email, GitHub, and LinkedIn handles
  contact: {
    email: "your-email@gmail.com",
    college: "Thejus Engineering College",
    address: "Vellarakkad, Thrissur, Kerala — 680584",
    socials: [
      { name: "GitHub", url: "https://github.com/your-username" },
      { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
      { name: "Email", url: "mailto:your-email@gmail.com" }
    ]
  },

  // Add or update projects
  projects: [
    {
      id: "student-management-system",
      title: "Student Record Management System",
      category: "Python Core",
      year: "2024",
      description: "...",
      highlights: ["..."],
      techStack: ["Python", "File I/O"],
      github: "https://github.com/your-username/repo-name",
      image: "your-image-url-or-local-path"
    }
  ]
};
```

---

## 🌐 Deployment

### Option A: Deploy to Vercel (Recommended)
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial editorial portfolio"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Vercel will build and assign you a free `https://albin-portfolio.vercel.app` URL.

### Option B: Deploy to Netlify
1. Run `npm run build` to generate the `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag-and-drop the `dist` folder.
3. Or connect your GitHub repository for automated CI/CD builds on each push.

---

## 📂 Project Structure

```
├── index.html               # Main HTML entry with Google Serif Fonts
├── package.json             # Project dependencies & scripts
├── tailwind.config.js       # Editorial theme colors, typography & spacing
├── vite.config.js           # Vite configuration
├── src/
│   ├── main.jsx             # React entry root
│   ├── App.jsx              # Main application shell & Lenis smooth scroll setup
│   ├── index.css            # Custom CSS variables, Lenis rules & scrollbar styling
│   ├── data.js              # 🌟 Single source of truth for all content
│   └── components/
│       ├── IntroCurtain.jsx    # Page-load curtain animation
│       ├── ScrollProgress.jsx  # Viewport reading progress indicator
│       ├── CustomCursor.jsx    # Fluid magnetic desktop cursor
│       ├── Navbar.jsx          # Sticky blurred header with dark mode toggle
│       ├── Hero.jsx            # Architectural visual + massive serif name reveal
│       ├── About.jsx           # Bio, stats, education & animated skill pills
│       ├── Projects.jsx        # Project cards with "Inspect Code" modal
│       ├── Journey.jsx         # Chronological milestones (G-Tech -> College -> AI)
│       ├── Skills.jsx          # Interactive category switcher with progress bars
│       ├── Contact.jsx         # Validated message form & 1-click email copy
│       └── Footer.jsx          # Back to top button & minimal copyright
└── public/
    └── favicon.svg          # Custom serif 'A' monogram
```

---

## 🛠️ Tech Stack & Libraries

- **Framework**: React 18
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Smooth Inertial Scroll**: Lenis
- **Icons**: Lucide React
- **Typography**: Playfair Display, Cinzel, DM Sans, JetBrains Mono

