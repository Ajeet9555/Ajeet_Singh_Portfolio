import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { Expertise } from './components/Expertise';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <Expertise />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
