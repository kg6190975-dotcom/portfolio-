import React, { useState } from 'react';
import { SkillCategory, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';
import {
  Table,
  Presentation,
  BarChart3,
  Sparkles,
  Truck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  MessageSquare,
  HelpCircle,
  Users,
  Compass,
  Search,
} from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
  lang: Language;
  theme: ThemeMode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories, lang, theme }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = uiTranslations[lang].skills;

  const iconMap: Record<string, React.ElementType> = {
    Table,
    Presentation,
    BarChart3,
    Sparkles,
    Truck,
    CheckCircle2,
    TrendingUp,
    Cpu,
    MessageSquare,
    HelpCircle,
    Users,
    Compass,
  };

  const categoryColorStyles: Record<string, { text: string; bg: string; border: string; activeTab: string }> = {
    'technical-tools': {
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'hover:border-blue-500/60',
      activeTab: 'bg-blue-600 text-white',
    },
    'business-operations': {
      text: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'hover:border-red-500/60',
      activeTab: 'bg-red-600 text-white',
    },
    'professional-leadership': {
      text: 'text-yellow-400',
      bg: 'bg-yellow-400/10',
      border: 'hover:border-yellow-400/60',
      activeTab: 'bg-yellow-500 text-black font-semibold',
    },
  };

  const filteredCategories = categories
    .filter((cat) => selectedCat === 'all' || cat.id === selectedCat)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description[lang].toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-yellow-400">
              {t.kicker}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-slate-400 font-sans max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border font-mono outline-none transition-colors ${
              theme === 'dark'
                ? 'bg-[#111827] border-slate-800 text-slate-200 placeholder-slate-500 focus:border-yellow-400'
                : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500'
            }`}
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setSelectedCat('all')}
          className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors ${
            selectedCat === 'all'
              ? 'bg-gradient-to-r from-red-600 via-blue-600 to-yellow-500 text-white font-semibold shadow-md'
              : theme === 'dark'
              ? 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
              : 'bg-slate-100 text-slate-700 hover:text-black border border-slate-200'
          }`}
        >
          {t.allTab}
        </button>

        {categories.map((cat) => {
          const catStyle = categoryColorStyles[cat.id] || { activeTab: 'bg-blue-600 text-white' };
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors ${
                selectedCat === cat.id
                  ? catStyle.activeTab
                  : theme === 'dark'
                  ? 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:text-black border border-slate-200'
              }`}
            >
              {cat.title[lang]}
            </button>
          );
        })}
      </div>

      {/* Grid by Categories */}
      <div className="space-y-10 text-left">
        {filteredCategories.map((category) => {
          const catStyle = categoryColorStyles[category.id] || {
            text: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'hover:border-blue-500/60',
          };

          return (
            <div key={category.id} className="space-y-4">
              <h3 className={`text-base font-serif font-semibold tracking-wide border-b border-slate-800 pb-2 flex items-center gap-2 ${catStyle.text}`}>
                <span>{category.title[lang]}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Sparkles;
                  return (
                    <div
                      key={skill.name}
                      className={`p-5 rounded-2xl border transition-all duration-200 group flex flex-col justify-between ${catStyle.border} ${
                        theme === 'dark'
                          ? 'border-slate-800/80 bg-[#111827]/70 hover:bg-[#162032]'
                          : 'border-slate-200 bg-white shadow-sm'
                      }`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl ${catStyle.bg} ${catStyle.text} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif font-bold text-base text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A]">
                          {skill.name}
                        </h4>
                        <p className="mt-2 text-xs text-slate-400 dark:text-slate-400 text-slate-600 leading-relaxed font-sans">
                          {skill.description[lang]}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>Applied Competency</span>
                        <span className={catStyle.text}>Verified</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
