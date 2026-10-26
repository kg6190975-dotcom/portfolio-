export type Language = 'en' | 'hi';
export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: 'workplace' | 'operations' | 'analytics' | 'academic';
  tagline: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  details: {
    context: { en: string; hi: string };
    contributions: { en: string[]; hi: string[] };
    outcomes: { en: string[]; hi: string[] };
    methodology?: { en: string; hi: string };
  };
  tags: string[];
  date: string;
  organization: string;
  role: {
    en: string;
    hi: string;
  };
  imageGradient: string;
  verifiedUrl?: string;
  verifiedRepo?: string;
  iconName: string;
}

export interface JourneyItem {
  id: string;
  period: string;
  role: {
    en: string;
    hi: string;
  };
  organization: {
    en: string;
    hi: string;
  };
  location: string;
  type: 'project' | 'industrial' | 'training' | 'education';
  highlights: {
    en: string[];
    hi: string[];
  };
  verified: boolean;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  skills: {
    name: string;
    description: {
      en: string;
      hi: string;
    };
    icon: string;
    level?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  event: string;
  organization: string;
  date: string;
  badge: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
}

export interface EducationItem {
  id: string;
  degree: {
    en: string;
    hi: string;
  };
  institution: {
    en: string;
    hi: string;
  };
  period: string;
  score?: string;
  details: {
    en: string[];
    hi: string[];
  };
}

export interface CertificationItem {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  issuer: {
    en: string;
    hi: string;
  };
  status: string;
  description: {
    en: string;
    hi: string;
  };
}

export interface PortfolioProfile {
  name: string;
  monogram: string;
  headline: {
    en: string;
    hi: string;
  };
  subheadline: {
    en: string;
    hi: string;
  };
  introParagraphs: {
    en: string[];
    hi: string[];
  };
  isOpenToOpportunities: boolean;
  opportunityBadgeText: {
    en: string;
    hi: string;
  };
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  whatsapp?: string;
  resumePdfPath: string;
  portraitUrl?: string; // empty means elegant vector monogram placeholder
}
