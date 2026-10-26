import React from 'react';
import { ArrowUp, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { PortfolioProfile, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';

interface FooterProps {
  profile: PortfolioProfile;
  lang: Language;
  theme: ThemeMode;
  onOpenConfigGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  lang,
  theme,
  onOpenConfigGuide,
}) => {
  const t = uiTranslations[lang].footer;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/60 text-left">
        {/* Brand & Tri-Color Monogram */}
        <div className="flex items-center gap-3">
          <div className="relative p-[1.5px] rounded-xl bg-gradient-to-tr from-red-500 via-blue-500 to-yellow-400">
            <div className="w-10 h-10 rounded-[10px] bg-[#0B0F19] flex items-center justify-center">
              <span className="font-serif font-bold text-sm tracking-wider bg-gradient-to-r from-red-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent">
                {profile.monogram}
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A]">
              {profile.name}
            </h4>
            <p className="text-xs text-slate-400 font-sans max-w-md mt-0.5">
              {t.brandStatement}
            </p>
          </div>
        </div>

        {/* Actions & Links with Red, Blue, Yellow Accents */}
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-full border border-slate-800 text-slate-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span>© {currentYear} {profile.name}. {t.rights}</span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1 text-blue-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t.verifiedBadge}
          </span>
        </div>

        {/* Config Guide trigger */}
        <button
          onClick={onOpenConfigGuide}
          className="text-slate-400 hover:text-yellow-400 transition-colors underline underline-offset-4"
        >
          Portfolio Configuration Guide
        </button>
      </div>
    </footer>
  );
};
