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
        ? 'bg-white/90 backdrop-blur-md border-b border-[#E7E1D8] shadow-warm-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C76B32] to-[#E5A06A] flex items-center justify-center font-bold text-white shadow-orange-sm group-hover:scale-105 transition-transform">
              {personalData.logoText}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-[#111111] group-hover:text-[#C76B32] transition-colors">
                {personalData.name}
              </span>
              <span className="text-xs text-[#5F5A54] font-medium hidden sm:inline-block">
                {personalData.primaryTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-white border border-[#E7E1D8] px-4 py-1.5 rounded-full shadow-warm-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C76B32] text-white shadow-sm'
                      : 'text-[#111111] hover:text-[#C76B32] hover:bg-[#F8E9DD]/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Download Resume) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C76B32] hover:bg-[#A95322] shadow-orange-sm transition-all duration-200 hover:-translate-y-0.5"
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
              className="p-2 rounded-lg bg-[#F8E9DD] border border-[#E7D2C3] text-[#C76B32] hover:bg-[#C76B32] hover:text-white transition-colors"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] hover:text-[#C76B32] hover:bg-[#F8E9DD] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#E7E1D8] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-warm-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#111111] hover:bg-[#F8E9DD] hover:text-[#C76B32] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-[#C76B32] hover:bg-[#A95322] shadow-orange-sm"
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
