# Ajeet Singh — AI/ML Engineer Portfolio

[![Portfolio Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](https://github.com/Ajeet9555)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-React_%7C_TypeScript_%7C_Vite_%7C_Tailwind_CSS-blue?style=flat-square)](https://github.com/Ajeet9555)
[![Author](https://img.shields.io/badge/Author-Ajeet_Singh-purple?style=flat-square)](https://www.linkedin.com/in/ajeetsinghrajput33)

> **"Building AI Solutions for Real-World Impact"**

A complete, production-ready personal portfolio website for **Ajeet Singh**, an **AI/ML Engineer** specializing in Machine Learning, Deep Learning, Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), and Autonomous AI Agents.

---

## 🚀 Key Features

- **⚡ Hero Section**: Features Ajeet's professional portrait photo, ambient AI glow lighting, secondary positioning badges, quick contact pills, social links, and direct resume download.
- **✨ Core Expertise Strip**: Marquee highlighting core technical pillars (*Python*, *Machine Learning*, *Deep Learning*, *NLP*, *Data Analysis*, *Cybersecurity*, *Generative AI*, *RAG*).
- **📊 Quick Stats**: Displays key metrics (`2+` Major Projects, `1` ML Internship, `10+` Certifications, `2+` Hackathon Awards).
- **👤 About Me**: Detailed background overview with 6 information cards (*Education*, *Experience*, *Location*, *Phone*, *Email*, *Social Links*).
- **🛠 Filterable Skills**: Interactive technology card grid categorized into *Programming*, *Machine Learning*, *AI / DL*, *Data*, *Backend*, *Tools*, and *CS Fundamentals*.
- **📂 Editorial Numbered Projects (01 - 04)**: Filterable projects (*All*, *AI/ML*, *Generative AI*, *NLP*, *Data Science*, *Backend*, *Agentic AI*) with interactive **Case Study Modals**:
  1. `01 — AI Career Intelligence`: Resume analysis, skill extraction, hybrid job matching, RAG learning plans, and adaptive mock interviews.
  2. `02 — AI Interview Bot`: Dynamic question generation, real-time interview simulation, and response analysis.
  3. `03 — ModelPulse AI`: MLOps platform for experiment tracking, model registry, and data/model drift monitoring (KS-test, PSI).
  4. `04 — Agentic Research Agent`: Fault-tolerant autonomous research agent built on LangGraph with tool validation & failure recovery.
- **💼 Professional Experience**: Dual internship timeline featuring:
  - **LogicBot Pvt Ltd** — ML Intern (*Dec 2025 - May 2026*): Optimized ML models on 50K+ records, improving accuracy from **78% → 86%**.
  - **CyberForenX & Associates** — Digital Forensic Intern (*Oct 2025 - March 2026*): Evidence acquisition, system log analysis, artifact recovery, and forensic reporting.
- **🎓 Education**: AKTU B.Tech in Computer Science (*AI & ML*), Aug 2023 - May 2027, **CGPA: 7.4 / 10**.
- **🏆 Hackathons & Achievements**: 2nd Prize RKGIT GUVI Day Hackathon award with trophy visuals and confetti animation, AKTU AI Tech Confluence 2025, and Inter-College Singing Competition.
- **📜 Verified Certificate Gallery**: Filterable gallery displaying 15 certificates (*Oracle Cloud AI Foundations*, *Cisco Python Essentials*, *IBM Prompt Engineering*, *Krish Naik 99h AIML Bootcamp*, *JPMorgan Job Simulations*, *Deloitte Cyber Simulation*, *Palo Alto Networks*, *Udemy Ethical Hacking*, etc.) with a full-screen Lightbox Modal featuring **Next (`>`)** and **Previous (`<`)** navigation.
- **📬 Interactive Contact Form**: Form validation, submit feedback banner, and direct `mailto` fallback.

---

## 🛠 Tech Stack

- **Frontend Core**: [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), Vanilla CSS, PostCSS, Autoprefixer
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── assets/
│   │   ├── profile/        # Ajeet's profile photo
│   │   ├── certificates/   # 15 verified certificate images
│   │   ├── achievements/   # Hackathon trophy & goodies photos
│   │   ├── projects/       # Custom project mockup banners
│   │   ├── resume/         # Ajeet_Singh_Resume.pdf
│   │   └── reference/      # Behance design reference
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── QuickStats.tsx
│   │   ├── Expertise.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certificates.tsx
│   │   ├── CertificateCard.tsx
│   │   ├── CertificateModal.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── personal.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── achievements.ts
│   │   └── certificates.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── .gitignore
```

---

## 💻 Getting Started (Run Locally)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ajeet9555/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `Portfolio` GitHub repository.
4. Keep framework preset as **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `dist/` folder after running `npm run build`, or connect your GitHub repository with build command `npm run build` and publish directory `dist`.

---

## 📬 Contact & Connect

- **Name**: Ajeet Singh
- **Title**: AI/ML Engineer
- **Email**: [ajeetsingh94263@gmail.com](mailto:ajeetsingh94263@gmail.com)
- **Phone**: [+91 9555934456](tel:+919555934456)
- **Location**: Noida, India
- **LinkedIn**: [linkedin.com/in/ajeetsinghrajput33](https://www.linkedin.com/in/ajeetsinghrajput33)
- **GitHub**: [github.com/Ajeet9555](https://github.com/Ajeet9555)

---

© 2026 Ajeet Singh. All rights reserved.
