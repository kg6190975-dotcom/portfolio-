import React from 'react';
import { Achievement, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';
import { Trophy, Award, Users, Star } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: Achievement[];
  lang: Language;
  theme: ThemeMode;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  lang,
  theme,
}) => {
  const t = uiTranslations[lang].achievements;

  const achievementCardThemes = [
    {
      icon: Trophy,
      iconColor: 'text-yellow-400',
      iconBg: 'bg-yellow-400/15',
      badgeBorder: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300',
      hoverBorder: 'hover:border-yellow-400/60',
      tagColor: 'text-yellow-400',
    },
    {
      icon: Award,
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/15',
      badgeBorder: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      hoverBorder: 'hover:border-blue-500/60',
      tagColor: 'text-blue-400',
    },
    {
      icon: Users,
      iconColor: 'text-red-400',
      iconBg: 'bg-red-500/15',
      badgeBorder: 'border-red-500/40 bg-red-500/10 text-red-300',
      hoverBorder: 'hover:border-red-500/60',
      tagColor: 'text-red-400',
    },
    {
      icon: Star,
      iconColor: 'text-yellow-400',
      iconBg: 'bg-yellow-400/15',
      badgeBorder: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300',
      hoverBorder: 'hover:border-yellow-400/60',
      tagColor: 'text-yellow-400',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <div className="flex flex-col items-start max-w-2xl text-left mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-yellow-400">
            {t.kicker}
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
          {t.title}
        </h2>
        <p className="mt-2 text-sm text-slate-400 font-sans">
          {t.subtitle}
        </p>
      </div>

      {/* Grid of Verified Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {achievements.map((item, index) => {
          const cfg = achievementCardThemes[index % achievementCardThemes.length];
          const Icon = cfg.icon;

          return (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${cfg.hoverBorder} ${
                theme === 'dark'
                  ? 'border-slate-800 bg-[#111827]/80'
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${cfg.iconBg} ${cfg.iconColor} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${cfg.badgeBorder} font-medium`}>
                    {item.badge[lang]}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A]">
                  {item.title[lang]}
                </h3>

                <p className="mt-1 text-xs font-mono text-slate-400">
                  {item.organization} · {item.date}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 font-sans leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Recognition</span>
                <span className={`font-semibold ${cfg.tagColor}`}>{item.event}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
