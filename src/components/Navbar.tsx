import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe, FileText } from 'lucide-react';
import { Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';

interface NavbarProps {
  monogram: string;
  name: string;
  lang: Language;
  onToggleLang: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  monogram,
  name,
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = uiTranslations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home, hoverColor: 'hover:text-red-400' },
    { href: '#about', label: t.about, hoverColor: 'hover:text-blue-400' },
    { href: '#journey', label: t.journey, hoverColor: 'hover:text-yellow-400' },
    { href: '#skills', label: t.skills, hoverColor: 'hover:text-blue-400' },
    { href: '#projects', label: t.projects, hoverColor: 'hover:text-red-400' },
    { href: '#achievements', label: t.achievements, hoverColor: 'hover:text-yellow-400' },
    { href: '#education', label: t.education, hoverColor: 'hover:text-blue-400' },
    { href: '#contact', label: t.contact, hoverColor: 'hover:text-red-400' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-300 w-full max-w-6xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 border ${
            isScrolled
              ? theme === 'dark'
                ? 'bg-[#0B0F19]/90 backdrop-blur-md border-slate-800 shadow-xl shadow-black/40'
                : 'bg-[#FFFFFF]/90 backdrop-blur-md border-slate-200 shadow-xl shadow-slate-300/40'
              : theme === 'dark'
              ? 'bg-[#111827]/75 backdrop-blur-sm border-slate-800/80'
              : 'bg-[#F8FAFC]/85 backdrop-blur-sm border-slate-200'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Wordmark & Tri-Color Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-left shrink-0"
            aria-label={`${name} Home`}
          >
            <div className="relative p-[1.5px] rounded-full bg-gradient-to-tr from-red-500 via-blue-500 to-yellow-400 group-hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 rounded-full bg-[#0B0F19] dark:bg-[#0B0F19] flex items-center justify-center">
                <span className="font-serif text-xs font-bold bg-gradient-to-r from-red-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent">
                  {monogram}
                </span>
              </div>
            </div>
            <span className="font-serif font-bold text-sm sm:text-base tracking-wide whitespace-nowrap hidden min-[480px]:inline">
              {name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors duration-150 ${link.hoverColor} ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Red/Blue/Yellow badges, Theme, Lang, Resume */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Resume Modal trigger */}
            <button
              onClick={onOpenResume}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                theme === 'dark'
                  ? 'border-blue-500/40 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400'
                  : 'border-blue-600/40 text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-500'
              }`}
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              aria-label={`Switch language to ${lang === 'en' ? 'Hindi' : 'English'}`}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-800 bg-slate-900/90 text-slate-200 hover:border-yellow-400/60'
                  : 'border-slate-300 bg-white/90 text-slate-800 hover:border-yellow-500/60'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-yellow-400" />
              <span className="uppercase tracking-wider font-mono text-[11px]">
                {lang === 'en' ? 'HI' : 'EN'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className={`p-1.5 rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-800 bg-slate-900/90 text-yellow-400 hover:border-red-400'
                  : 'border-slate-300 bg-white/90 text-slate-800 hover:border-red-500'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="lg:hidden p-1.5 rounded-full border border-slate-700 text-slate-300 hover:text-red-400"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 lg:hidden pt-20 px-6 backdrop-blur-xl flex flex-col justify-between pb-8 transition-all ${
            theme === 'dark'
              ? 'bg-[#0B0F19]/95 text-[#F8FAFC]'
              : 'bg-[#F8FAFC]/95 text-[#0B0F19]'
          }`}
        >
          <div className="flex flex-col gap-4 max-w-sm mx-auto w-full pt-4">
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
              <span className="text-xs uppercase font-mono tracking-widest text-yellow-400">
                Navigation
              </span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-serif tracking-wide py-1 border-b border-slate-800/30 hover:text-red-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-500 text-blue-400 font-medium text-sm bg-blue-500/10"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </button>
          </div>

          <div className="text-center text-xs text-slate-400 font-mono">
            {name} · Portfolio & Showcase
          </div>
        </div>
      )}
    </>
  );
};
