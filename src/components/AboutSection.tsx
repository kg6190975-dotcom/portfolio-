import React from 'react';
import { PortfolioProfile, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';
import { HeartHandshake, Zap, Leaf } from 'lucide-react';

interface AboutSectionProps {
  profile: PortfolioProfile;
  lang: Language;
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, lang, theme }) => {
  const t = uiTranslations[lang].about;

  const pillarStyles = [
    {
      icon: HeartHandshake,
      accentText: 'text-red-400',
      accentBg: 'bg-red-500/15',
      accentBorder: 'hover:border-red-500/60',
      badgeColor: 'border-red-500/30 text-red-400',
    },
    {
      icon: Zap,
      accentText: 'text-blue-400',
      accentBg: 'bg-blue-500/15',
      accentBorder: 'hover:border-blue-500/60',
      badgeColor: 'border-blue-500/30 text-blue-400',
    },
    {
      icon: Leaf,
      accentText: 'text-yellow-400',
      accentBg: 'bg-yellow-400/15',
      accentBorder: 'hover:border-yellow-400/60',
      badgeColor: 'border-yellow-400/30 text-yellow-400',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-red-400">
              {t.kicker}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
            {t.title}
          </h2>
        </div>

        {/* Editorial Two-Column Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Main Prose */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-slate-300 dark:text-slate-300 text-slate-700 font-sans">
            {profile.introParagraphs[lang].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <blockquote className="my-3 p-5 rounded-2xl border border-blue-500/30 bg-blue-500/5 font-serif italic text-base sm:text-lg text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-blue-600 text-white font-medium">
                Core Philosophy
              </div>
              {t.quote}
            </blockquote>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono pt-2">
              <span className="text-red-400">Allenhouse Business School (BBA)</span>
              <span>·</span>
              <span className="text-yellow-400">Sweet Angel Int'l (85% Merit)</span>
            </div>
          </div>

          {/* Three Foundational Pillars (Red, Blue, Yellow) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {t.pillars.map((pillar, index) => {
              const style = pillarStyles[index] || pillarStyles[0];
              const Icon = style.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-2xl border transition-all duration-200 ${style.accentBorder} ${
                    theme === 'dark'
                      ? 'border-slate-800 bg-[#111827]/80'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-xl ${style.accentBg} ${style.accentText} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-semibold text-base text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-600 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
