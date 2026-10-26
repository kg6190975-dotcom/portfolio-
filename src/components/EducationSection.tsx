import React from 'react';
import { motion } from 'motion/react';
import { EducationItem, CertificationItem, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle, Calendar, School } from 'lucide-react';

interface EducationSectionProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  lang: Language;
  theme: ThemeMode;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  certifications,
  lang,
  theme,
}) => {
  const t = uiTranslations[lang].education;

  const certStyles = [
    { text: 'text-blue-400', border: 'border-blue-500/30' },
    { text: 'text-yellow-400', border: 'border-yellow-400/30' },
    { text: 'text-red-400', border: 'border-red-500/30' },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start max-w-2xl text-left mb-12"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-blue-400">
            {t.kicker}
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
          {t.title}
        </h2>
        <p className="mt-2 text-sm text-slate-400 font-sans">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Main Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-14">
        {education.map((edu, idx) => {
          const isFirst = idx === 0;
          const accentColor = isFirst ? 'text-blue-400' : 'text-red-400';
          const iconBg = isFirst ? 'bg-blue-500/15 text-blue-400' : 'bg-red-500/15 text-red-400';
          const cardHover = isFirst ? 'hover:border-blue-500/50' : 'hover:border-red-500/50';

          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${cardHover} ${
                theme === 'dark'
                  ? 'border-slate-800 bg-[#111827]/80'
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-mono ${accentColor}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A]">
                  {edu.degree[lang]}
                </h3>

                <p className="flex items-center gap-1.5 mt-1 text-sm font-medium text-slate-400 dark:text-slate-400 text-slate-600">
                  <School className={`w-4 h-4 ${accentColor}`} />
                  {edu.institution[lang]}
                </p>

                {edu.score && (
                  <div className="mt-3 inline-block text-xs font-mono px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 font-semibold">
                    Academic Result: {edu.score}
                  </div>
                )}

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700 font-sans">
                  {edu.details[lang].map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${isFirst ? 'bg-blue-500' : 'bg-red-500'} mt-2 shrink-0`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Institution</span>
                <span className="text-blue-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Accredited
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Structured Training & Development Credentials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5 }}
        className="text-left"
      >
        <h3 className="text-lg font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-400" />
          <span>{t.trainingTitle}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certifications.map((cert, cIdx) => {
            const style = certStyles[cIdx % certStyles.length];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`p-5 rounded-2xl border transition-all ${style.border} ${
                  theme === 'dark'
                    ? 'bg-[#111827]/60 hover:bg-[#162032]'
                    : 'bg-white hover:bg-slate-50 shadow-sm'
                }`}
              >
                <span className={`text-[10px] uppercase font-mono tracking-wider font-semibold ${style.text}`}>
                  {cert.status}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-1">
                  {cert.name[lang]}
                </h4>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {cert.issuer[lang]}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-2 font-sans leading-relaxed">
                  {cert.description[lang]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
