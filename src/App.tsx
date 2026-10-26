import React, { useState, useEffect } from 'react';
import { Language, ThemeMode, Project } from './types/portfolio';
import {
  primaryProfile,
  verifiedProjects,
  journeyItems,
  skillCategories,
  achievementsList,
  educationList,
  certificationsList,
} from './data/portfolioData';
import { IntroAnimation } from './components/IntroAnimation';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConfigGuideModal } from './components/ConfigGuideModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme') as ThemeMode;
      if (savedTheme) return savedTheme;
    }
    return 'dark';
  });

  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio_lang') as Language;
      if (savedLang) return savedLang;
    }
    return 'en';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [configGuideOpen, setConfigGuideOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  // Sync theme with document class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#0B0F19';
      document.body.style.color = '#F8FAFC';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#F8FAFC';
      document.body.style.color = '#0B0F19';
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Sync language with storage
  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 font-sans selection:bg-red-500/30 selection:text-yellow-300 ${
        theme === 'dark'
          ? 'bg-[#0B0F19] text-[#F8FAFC]'
          : 'bg-[#F8FAFC] text-[#0B0F19]'
      }`}
    >
      {/* Top Tri-Color Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Skippable Monogram Intro Animation */}
      {!introFinished && (
        <IntroAnimation
          monogram={primaryProfile.monogram}
          name={primaryProfile.name}
          onComplete={() => setIntroFinished(true)}
        />
      )}

      {/* Floating Capsule Navbar */}
      <Navbar
        monogram={primaryProfile.monogram}
        name={primaryProfile.name}
        lang={lang}
        onToggleLang={toggleLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-hidden">
        {/* 1. Hero Section */}
        <HeroSection
          profile={primaryProfile}
          lang={lang}
          theme={theme}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* 2. Editorial About Section */}
        <AboutSection
          profile={primaryProfile}
          lang={lang}
          theme={theme}
        />

        {/* 3. Career Journey Timeline */}
        <JourneyTimeline
          items={journeyItems}
          lang={lang}
          theme={theme}
        />

        {/* 4. Skills & Competencies Grid */}
        <SkillsSection
          categories={skillCategories}
          lang={lang}
          theme={theme}
        />

        {/* 5. Filterable Projects Gallery */}
        <ProjectsSection
          projects={verifiedProjects}
          lang={lang}
          theme={theme}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Achievements & Honors */}
        <AchievementsSection
          achievements={achievementsList}
          lang={lang}
          theme={theme}
        />

        {/* 7. Education & Credentials */}
        <EducationSection
          education={educationList}
          certifications={certificationsList}
          lang={lang}
          theme={theme}
        />

        {/* 8. Direct Contact Experience (No Form) */}
        <ContactSection
          profile={primaryProfile}
          lang={lang}
          theme={theme}
        />
      </main>

      {/* 9. Hybrid Footer */}
      <Footer
        profile={primaryProfile}
        lang={lang}
        theme={theme}
        onOpenConfigGuide={() => setConfigGuideOpen(true)}
      />

      {/* Modals */}
      {/* Project Case Study Lightbox */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume In-App PDF Viewer & Download */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        pdfPath={primaryProfile.resumePdfPath}
        lang={lang}
        theme={theme}
      />

      {/* Config & Customization Guide */}
      <ConfigGuideModal
        isOpen={configGuideOpen}
        onClose={() => setConfigGuideOpen(false)}
        theme={theme}
      />

      {/* GitHub Pages 404 Resolution & Deployment Guide */}
      <DeploymentGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
        theme={theme}
      />
    </div>
  );
}
