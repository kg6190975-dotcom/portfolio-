import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { PortfolioProfile, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';

interface ContactSectionProps {
  profile: PortfolioProfile;
  lang: Language;
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, lang, theme }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const t = uiTranslations[lang].contact;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
        {/* Left Column: Heading and Context */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-red-400">
              {t.kicker}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans leading-relaxed">
            {t.subtitle}
          </p>

          <div className="mt-8 p-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold">
                Current Availability
              </span>
            </div>
            <p className="font-serif text-lg text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-1 font-medium">
              {profile.opportunityBadgeText[lang]}
            </p>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              Open to academic internships, project collaborations, and corporate trainee roles.
            </p>
          </div>
        </div>

        {/* Right Column: Direct Contact Cards (Red, Blue, Yellow) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email in Crimson Red */}
          <div
            className={`p-6 rounded-2xl border transition-all hover:border-red-500/60 ${
              theme === 'dark'
                ? 'border-slate-800 bg-[#111827]/80'
                : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={() => copyToClipboard(profile.email, 'email')}
                className="text-xs font-mono text-slate-400 hover:text-red-400 flex items-center gap-1 transition-colors"
                title={t.copyTooltip}
              >
                {copiedField === 'email' ? (
                  <span className="text-red-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Copied
                  </span>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t.emailLabel}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="block font-serif text-base font-semibold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] hover:text-red-400 transition-colors mt-1 truncate"
            >
              {profile.email}
            </a>
          </div>

          {/* LinkedIn in Electric Blue */}
          <div
            className={`p-6 rounded-2xl border transition-all hover:border-blue-500/60 ${
              theme === 'dark'
                ? 'border-slate-800 bg-[#111827]/80'
                : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
              >
                <span>Visit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t.linkedInLabel}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-serif text-base font-semibold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] hover:text-blue-400 transition-colors mt-1 truncate"
            >
              linkedin.com/in/khushi-gupta
            </a>
          </div>

          {/* Phone in Canary/Amber Yellow */}
          <div
            className={`p-6 rounded-2xl border transition-all hover:border-yellow-400/60 ${
              theme === 'dark'
                ? 'border-slate-800 bg-[#111827]/80'
                : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={() => copyToClipboard(profile.phone, 'phone')}
                className="text-xs font-mono text-slate-400 hover:text-yellow-400 flex items-center gap-1 transition-colors"
                title={t.copyTooltip}
              >
                {copiedField === 'phone' ? (
                  <span className="text-yellow-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Copied
                  </span>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t.phoneLabel}
            </span>
            <a
              href={`tel:${profile.phone}`}
              className="block font-serif text-base font-semibold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] hover:text-yellow-400 transition-colors mt-1"
            >
              {profile.phone}
            </a>
          </div>

          {/* Location */}
          <div
            className={`p-6 rounded-2xl border transition-all hover:border-blue-500/40 ${
              theme === 'dark'
                ? 'border-slate-800 bg-[#111827]/80'
                : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">Residence</span>
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t.locationLabel}
            </span>
            <p className="font-serif text-base font-semibold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-1">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
