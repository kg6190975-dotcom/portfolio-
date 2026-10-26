import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Download, Sparkles, MapPin, ShieldCheck, Rocket } from 'lucide-react';
import { PortfolioProfile, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';

interface HeroSectionProps {
  profile: PortfolioProfile;
  lang: Language;
  theme: ThemeMode;
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  lang,
  theme,
  onOpenResume,
  onOpenDeployGuide,
}) => {
  const t = uiTranslations[lang].hero;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Dynamic Red, Blue, Yellow Ambient Light Orbs with subtle float animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-10 w-96 h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 left-4 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-yellow-500/15 blur-3xl pointer-events-none"
      />

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typographic Hierarchy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Availability Status Badge & Deploy Guide Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-5 text-xs"
          >
            {profile.isOpenToOpportunities && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/50 bg-yellow-400/10 text-yellow-300 font-medium tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                {profile.opportunityBadgeText[lang]}
              </span>
            )}

            <button
              onClick={onOpenDeployGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:border-red-400 transition-colors font-mono font-medium"
              title="Fix GitHub Pages 404 & Deploy"
            >
              <Rocket className="w-3.5 h-3.5 text-red-400" />
              <span>Deploy Guide (Fix 404)</span>
            </button>

            <span className="inline-flex items-center gap-1.5 text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              {profile.location}
            </span>
          </motion.div>

          {/* Person Name & Tri-Color Monogram Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono">
              <span className="text-red-400 font-semibold">Creative</span>
              <span className="text-blue-400">·</span>
              <span className="text-blue-400 font-semibold">Analytical</span>
              <span className="text-yellow-400">·</span>
              <span className="text-yellow-400 font-semibold">Strategic</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-1 leading-[1.15]">
              {profile.name}
            </h1>
          </motion.div>

          {/* Subtitle / Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl font-serif text-blue-400 dark:text-blue-400 text-blue-700 font-normal mt-3 max-w-xl leading-relaxed"
          >
            {profile.headline[lang]}
          </motion.h2>

          {/* Summary Lead Copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-sm sm:text-base text-slate-400 dark:text-slate-400 text-slate-600 max-w-xl leading-relaxed font-sans"
          >
            {profile.subheadline[lang]}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            {/* Primary Action in Vibrant Crimson Red */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg shadow-red-600/25"
            >
              <span>{t.exploreWork}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>

            {/* Secondary Action in Electric Cobalt Blue */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenResume}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide border transition-all ${
                theme === 'dark'
                  ? 'border-blue-500/50 bg-blue-950/40 text-blue-300 hover:bg-blue-900/60 hover:border-blue-400'
                  : 'border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-600'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{t.viewResume}</span>
            </motion.button>

            {/* Tertiary Action in Amber/Yellow */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={profile.resumePdfPath}
              download="Khushi_Gupta_Resume.pdf"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide border transition-all ${
                theme === 'dark'
                  ? 'border-yellow-500/30 text-yellow-300 hover:border-yellow-400 hover:bg-yellow-500/10'
                  : 'border-yellow-600/40 text-yellow-800 hover:border-yellow-600 hover:bg-yellow-50'
              }`}
            >
              <Download className="w-4 h-4 text-yellow-400" />
              <span>{t.downloadResume}</span>
            </motion.a>
          </motion.div>

          {/* Verified Source Marker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-xs text-slate-400 font-mono"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Profile verified directly from official resume</span>
          </motion.div>
        </div>

        {/* Right Column: Tall Portrait Frame with Interactive Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -6, rotateZ: 0.5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl p-[2px] bg-gradient-to-br from-red-500 via-blue-500 to-yellow-400 shadow-2xl shadow-blue-500/15 group"
          >
            {/* Interior card container */}
            <div className="w-full h-full rounded-[22px] overflow-hidden relative flex flex-col items-center justify-center bg-[#0B0F19] dark:bg-[#0B0F19] border border-slate-800">
              {profile.portraitUrl ? (
                <img
                  src={profile.portraitUrl}
                  alt={`${profile.name} portrait`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-between p-8 text-center bg-gradient-to-b from-[#111827] via-[#0B0F19] to-[#030712]">
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Top Badge */}
                  <div className="z-10 flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase border border-slate-700 px-3 py-1 rounded-full bg-slate-900/80">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    <span className="text-slate-200">BBA Scholar & Strategist</span>
                  </div>

                  {/* Central Architectural Monogram Emblem */}
                  <div className="relative z-10 flex flex-col items-center my-auto">
                    <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-red-500 via-blue-500 to-yellow-400 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <div className="w-32 h-32 rounded-[22px] bg-[#0F172A] flex items-center justify-center">
                        <span className="font-serif text-6xl font-bold tracking-tight bg-gradient-to-br from-red-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent">
                          {profile.monogram}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h3 className="font-serif text-xl font-medium tracking-wide text-[#F8FAFC]">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        Allenhouse Business School
                      </p>
                    </div>
                  </div>

                  {/* Bottom Portrait Placeholder Note */}
                  <div className="z-10 w-full pt-4 border-t border-slate-800 text-left">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                      </span>
                      <span className="text-slate-300">Kanpur, India</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width Metrics & Focus Strip with scroll reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
      >
        <div className="relative pl-3 border-l-2 border-red-500 hover:translate-x-1 transition-transform">
          <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-medium">
            Academic Focus
          </span>
          <p className="font-serif text-lg text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-0.5">
            BBA Candidate
          </p>
          <p className="text-xs text-slate-400 font-sans">Allenhouse Business School</p>
        </div>

        <div className="relative pl-3 border-l-2 border-blue-500 hover:translate-x-1 transition-transform">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-medium">
            Academic Project
          </span>
          <p className="font-serif text-lg text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-0.5">
            NEXORA 2050
          </p>
          <p className="text-xs text-slate-400 font-sans">People, Progress & Planet</p>
        </div>

        <div className="relative pl-3 border-l-2 border-yellow-400 hover:translate-x-1 transition-transform">
          <span className="text-[11px] font-mono uppercase tracking-widest text-yellow-400 font-medium">
            Industrial Exposure
          </span>
          <p className="font-serif text-lg text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-0.5">
            Amul Banas Dairy
          </p>
          <p className="text-xs text-slate-400 font-sans">Supply Chain & Operations</p>
        </div>

        <div className="relative pl-3 border-l-2 border-red-400 hover:translate-x-1 transition-transform">
          <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-medium">
            Academic Merit
          </span>
          <p className="font-serif text-lg text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-0.5">
            85% Distinction
          </p>
          <p className="text-xs text-slate-400 font-sans">Sweet Angel Int'l School</p>
        </div>
      </motion.div>
    </section>
  );
};
