import React from 'react';
import { JourneyItem, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';
import { GraduationCap, Briefcase, Factory, BookOpen, CheckCircle } from 'lucide-react';

interface JourneyTimelineProps {
  items: JourneyItem[];
  lang: Language;
  theme: ThemeMode;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ items, lang, theme }) => {
  const t = uiTranslations[lang].journey;

  const typeConfig: Record<
    JourneyItem['type'],
    { icon: React.ElementType; color: string; border: string; bg: string; dot: string }
  > = {
    education: {
      icon: GraduationCap,
      color: 'text-red-400',
      border: 'border-red-500/50',
      bg: 'bg-red-500/10',
      dot: 'bg-red-500',
    },
    project: {
      icon: Briefcase,
      color: 'text-blue-400',
      border: 'border-blue-500/50',
      bg: 'bg-blue-500/10',
      dot: 'bg-blue-500',
    },
    industrial: {
      icon: Factory,
      color: 'text-yellow-400',
      border: 'border-yellow-400/50',
      bg: 'bg-yellow-400/10',
      dot: 'bg-yellow-400',
    },
    training: {
      icon: BookOpen,
      color: 'text-blue-400',
      border: 'border-blue-500/50',
      bg: 'bg-blue-500/10',
      dot: 'bg-blue-500',
    },
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <div className="flex flex-col items-start max-w-2xl text-left mb-14">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-blue-400">
            {t.kicker}
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
          {t.title}
        </h2>
        <p className="mt-3 text-sm text-slate-400 font-sans">
          {t.subtitle}
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l border-slate-800 text-left space-y-12">
        {items.map((item) => {
          const cfg = typeConfig[item.type] || typeConfig.project;
          const Icon = cfg.icon;
          return (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border ${cfg.border} ${cfg.bg} ${cfg.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-md`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Card content */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-slate-800 bg-[#111827]/80 hover:border-slate-700'
                    : 'border-slate-200 bg-white hover:border-blue-400/60 shadow-sm'
                }`}
              >
                {/* Clean metadata header */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-2">
                  <span className={`font-semibold ${cfg.color}`}>{item.period}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400">{item.location}</span>
                  {item.verified && (
                    <>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="inline-flex items-center gap-1 text-blue-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A]">
                  {item.role[lang]}
                </h3>

                {/* Organization */}
                <p className="text-sm font-medium text-slate-400 dark:text-slate-400 text-slate-600 mt-0.5">
                  {item.organization[lang]}
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700 font-sans">
                  {item.highlights[lang].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} mt-1.5 shrink-0`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
