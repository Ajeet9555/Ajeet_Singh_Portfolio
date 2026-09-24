import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { personalData } from '../data/personal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const currentScroll = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0d14]/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:scale-105 transition-transform">
              {personalData.logoText}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                {personalData.name}
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                {personalData.primaryTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#131929]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/15">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/90 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d121f]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-glow-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
