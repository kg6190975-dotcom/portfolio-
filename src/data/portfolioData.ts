import { PortfolioProfile, Project, JourneyItem, SkillCategory, Achievement, EducationItem, CertificationItem } from '../types/portfolio';

export const primaryProfile: PortfolioProfile = {
  name: 'Khushi Gupta',
  monogram: 'KG',
  headline: {
    en: 'BBA Scholar & Strategist in Operations, AI-Enabled Workplaces & Data Analysis',
    hi: 'बीबीए शोधार्थी एवं रणनीतिकार: संचालन, एआई-सक्षम कार्यस्थल और डेटा विश्लेषण',
  },
  subheadline: {
    en: 'Bridging business foundations in finance, marketing & supply-chain with emerging AI workflows and analytical rigor.',
    hi: 'वित्त, विपणन और आपूर्ति-शृंखला की व्यावसायिक नींव को आधुनिक एआई और विश्लेषणात्मक दक्षता से जोड़ना।',
  },
  introParagraphs: {
    en: [
      'Currently pursuing a Bachelor of Business Administration at Allenhouse Business School, focusing on modern organizational dynamics, operational efficiency, and technological integration.',
      'Core academic contributions include co-designing the NEXORA Future Workplace framework (envisioning workplaces toward 2050 centered on People, Progress, and Planet) and industrial observation of large-scale supply-chain systems at Amul Banas Dairy.',
    ],
    hi: [
      'वर्तमान में एलेनहाउस बिजनेस स्कूल से बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (बीबीए) की पढ़ाई कर रही हैं, जिसमें आधुनिक संगठनात्मक गतिशीलता, परिचालन दक्षता और तकनीकी एकीकरण पर ध्यान केंद्रित है।',
      'प्रमुख शैक्षणिक योगदानों में नेक्सोरा फ्यूचर वर्कप्लेस फ्रेमवर्क (2050 की ओर लोग, प्रगति और पृथ्वी पर आधारित कार्यस्थल) और अमूल बनास डेयरी में बड़े पैमाने पर आपूर्ति शृंखला का औद्योगिक अध्ययन शामिल है।',
    ],
  },
  isOpenToOpportunities: true,
  opportunityBadgeText: {
    en: 'Open to Internship & Trainee Opportunities',
    hi: 'इंटर्नशिप एवं नए अवसरों के लिए उपलब्ध',
  },
  location: 'Rail Bazar, Cantt, Kanpur, India',
  email: 'kg6190975@gmail.com',
  phone: '+91 870731135',
  linkedin: 'https://linkedin.com/in/khushi-gupta-07204397',
  github: '', // Configurable placeholder
  whatsapp: '+91870731135',
  resumePdfPath: '/assets/aistudio/Khushi_Gupta_Resume_db3fa92b.pdf',
  portraitUrl: '', // Leave empty to display the luxury architectural vector monogram avatar
};

export const verifiedProjects: Project[] = [
  {
    id: 'nexora-future-workplace',
    title: {
      en: 'NEXORA: The Organisation of Tomorrow',
      hi: 'नेक्सोरा: भविष्य का संगठन',
    },
    category: 'workplace',
    tagline: {
      en: 'HR Club Academic Framework exploring workplace evolution towards 2050 & beyond',
      hi: 'एचआर क्लब शैक्षणिक ढांचा: 2050 और उसके बाद के कार्यस्थल के विकास का अध्ययन',
    },
    description: {
      en: 'Contributed to an organizational culture concept centered on People, Progress, and Planet, exploring how modern workplaces can thrive through AI as an enabler, ethical leadership, inclusion, and agile adaptability.',
      hi: 'लोग, प्रगति और पृथ्वी पर केंद्रित संगठनात्मक संस्कृति की अवधारणा तैयार की, जिसमें एआई को एक सहायक उपकरण, समावेशिता और अनुकूलनशीलता के रूप में देखा गया।',
    },
    details: {
      context: {
        en: 'Developed under the Allenhouse Business School HR Club to address the intersection of artificial intelligence, human wellbeing, and sustainable workplace governance.',
        hi: 'एलेनहाउस बिजनेस स्कूल एचआर क्लब के तहत कृत्रिम बुद्धिमत्ता, मानवीय कल्याण और संधारणीय कार्यस्थल संचालन के लिए विकसित किया गया।',
      },
      contributions: {
        en: [
          'Formulated core pillars around People (employee wellbeing & adaptability), Progress (AI tools & human synergy), and Planet (ESG consciousness).',
          'Researched future leadership models balancing algorithmic automation with human empathy and inclusive culture.',
          'Presented strategic workplace transformation roadmaps to faculty peers and industry evaluators.',
        ],
        hi: [
          'लोग (कर्मचारी कल्याण और अनुकूलन), प्रगति (एआई टूल्स और मानव तालमेल), और पृथ्वी (पर्यावरण जागरूकता) के मुख्य स्तंभ बनाए।',
          'स्वचालन और मानवीय सहानुभूति के बीच संतुलन बनाने वाले भविष्य के नेतृत्व मॉडल का शोध किया।',
          'संकाय सहयोगियों और उद्योग मूल्यांकनकर्ताओं के समक्ष कार्यस्थल परिवर्तन की रूपरेखा प्रस्तुत की।',
        ],
      },
      outcomes: {
        en: [
          'Received high commendation in college academic evaluation for cross-functional futuristic vision.',
          'Established foundational blueprints now referenced in collegiate HR Club discussion cohorts.',
        ],
        hi: [
          'भविष्योन्मुखी दृष्टिकोण के लिए कॉलेज शैक्षणिक मूल्यांकन में विशेष सराहना प्राप्त की।',
          'कॉलेज के एचआर क्लब चर्चा समूहों के लिए एक मानक संदर्भ ढांचा तैयार किया।',
        ],
      },
      methodology: {
        en: 'Qualitative research, workplace case analysis, scenario modeling for 2030-2050 organizational architectures.',
        hi: 'गुणात्मक अनुसंधान, कार्यस्थल केस अध्ययन और 2030-2050 संगठनात्मक मॉडल तैयार करना।',
      },
    },
    tags: ['AI as an Enabler', 'HR Strategy', 'Future Workplace', 'People & Planet', 'Leadership'],
    date: '2025',
    organization: 'Allenhouse Business School / HR Club',
    role: {
      en: 'Team Member & Core Contributor',
      hi: 'टीम सदस्य एवं मुख्य योगदानकर्ता',
    },
    imageGradient: 'from-[#242424] via-[#1a1a1a] to-[#B69A68]/30',
    iconName: 'Building2',
  },
  {
    id: 'amul-dairy-operations',
    title: {
      en: 'Amul - Banas Dairy Industrial Case Study',
      hi: 'अमूल - बनास डेयरी औद्योगिक केस स्टडी',
    },
    category: 'operations',
    tagline: {
      en: 'Field analysis of dairy production, automated quality control & supply-chain distribution',
      hi: 'डेयरी उत्पादन, स्वचालित गुणवत्ता नियंत्रण और आपूर्ति-शृंखला वितरण का क्षेत्रीय अध्ययन',
    },
    description: {
      en: 'On-site industrial observation and analytical breakdown of large-scale dairy processing, rigorous hygiene standards, packaging automation, and cold-chain logistics management at Amul Banas Dairy.',
      hi: 'अमूल बनास डेयरी में बड़े पैमाने पर प्रसंस्करण, कड़े गुणवत्ता मानकों, पैकेजिंग स्वचालन और कोल्ड-चेन लॉजिस्टिक्स का प्रत्यक्ष औद्योगिक विश्लेषण।',
    },
    details: {
      context: {
        en: 'Industrial study program organized by Allenhouse Business School to gain real-world exposure to Asia’s leading dairy cooperative model.',
        hi: 'एशिया के अग्रणी डेयरी सहकारी मॉडल का व्यावहारिक अनुभव प्राप्त करने के लिए कॉलेज द्वारा आयोजित औद्योगिक अध्ययन कार्यक्रम।',
      },
      contributions: {
        en: [
          'Analyzed procurement-to-retail cold-chain logistics across multi-tier cooperative collection centers.',
          'Examined real-time automated quality testing, pasteurization stages, and high-speed packaging pipelines.',
          'Synthesized operational bottleneck mitigation and inventory turnaround strategies for FMCG products.',
        ],
        hi: [
          'सहकारी संग्रह केंद्रों से खुदरा बिक्री तक कोल्ड-चेन लॉजिस्टिक्स का अध्ययन किया।',
          'वास्तविक समय में स्वचालित गुणवत्ता परीक्षण, पाश्चुरीकरण और पैकेजिंग पाइपलाइनों का अवलोकन किया।',
          'एफएमसीजी उत्पादों के लिए इन्वेंट्री प्रबंधन और संचालन रणनीतियों का संकलन किया।',
        ],
      },
      outcomes: {
        en: [
          'Documented operational insights into large-scale batch manufacturing and zero-compromise quality controls.',
          'Enhanced practical knowledge of cooperative economic structures and supply chain resilience.',
        ],
        hi: [
          'बड़े पैमाने पर विनिर्माण और गुणवत्ता नियंत्रण पर विस्तृत विश्लेषण दर्ज किया।',
          'सहकारी आर्थिक संरचनाओं और आपूर्ति शृंखला की मजबूती की व्यावहारिक समझ हासिल की।',
        ],
      },
      methodology: {
        en: 'Direct shop-floor observation, facility engineer briefings, process flow mapping, and logistics evaluation.',
        hi: 'प्रत्यक्ष संयंत्र अवलोकन, इंजीनियरों के साथ विमर्श, प्रक्रिया प्रवाह मानचित्रण और रसद मूल्यांकन।',
      },
    },
    tags: ['Supply Chain', 'Operations Management', 'Quality Control', 'Manufacturing', 'Logistics'],
    date: '2025',
    organization: 'Amul - Banas Dairy / Allenhouse',
    role: {
      en: 'Industrial Researcher & Analyst',
      hi: 'औद्योगिक शोधकर्ता एवं विश्लेषक',
    },
    imageGradient: 'from-[#1B2838] via-[#161616] to-[#B69A68]/20',
    iconName: 'Factory',
  },
  {
    id: 'case-o-mania-analysis',
    title: {
      en: 'Case-O-Mania & International Conference Strategy',
      hi: 'केस-ओ-मैनिया और अंतर्राष्ट्रीय सम्मेलन रणनीति',
    },
    category: 'analytics',
    tagline: {
      en: 'Competitive business case problem-solving and market scenario dissection',
      hi: 'प्रतिस्पर्धी व्यावसायिक केस विश्लेषण और बाजार परिदृश्य का समाधान',
    },
    description: {
      en: 'Participated in intense business case symposiums, dissecting market entry dilemmas, financial resource allocation, and organizational pivot strategies under constrained timelines.',
      hi: 'गहन व्यावसायिक केस प्रतियोगिताओं में भाग लिया, जहां बाजार प्रवेश, वित्तीय आवंटन और संगठनात्मक रणनीतियों का समाधान किया गया।',
    },
    details: {
      context: {
        en: 'Competitive case-solving competition and academic research conference engaging scholars and industry veterans.',
        hi: 'विद्वानों और उद्योग विशेषज्ञों के साथ प्रतिस्पर्धी केस-सॉल्विंग प्रतियोगिता एवं अंतर्राष्ट्रीय सम्मेलन।',
      },
      contributions: {
        en: [
          'Conducted SWOT and financial ratio assessments on live corporate crisis scenarios.',
          'Designed high-impact Microsoft PowerPoint executive briefing decks under tight competition constraints.',
          'Defended strategic recommendations during live Q&A panel presentations.',
        ],
        hi: [
          'कॉर्पोरेट संकट के परिदृश्यों पर व्यावहारिक विश्लेषण और वित्तीय मूल्यांकन किया।',
          'कम समय में प्रभावी माइक्रोसॉफ्ट पावरपॉइंट प्रेजेंटेशन तैयार कीं।',
          'निर्णायक मंडल के समक्ष रणनीतिक सिफारिशों का सफल बचाव किया।',
        ],
      },
      outcomes: {
        en: [
          'Honed rapid problem-solving, analytical synthesis, and professional executive presentation skills.',
          'Received commendation for clarity of market data analysis and teamwork dynamics.',
        ],
        hi: [
          'त्वरित समस्या-निवारण, विश्लेषणात्मक समझ और पेशेवर प्रस्तुति कौशल को निखारा।',
          'डेटा विश्लेषण की स्पष्टता और टीम तालमेल के लिए सराहना प्राप्त की।',
        ],
      },
      methodology: {
        en: 'Financial statement dissection, competitive benchmarking, executive presentation synthesis.',
        hi: 'वित्तीय विवरण विश्लेषण, प्रतिस्पर्धी बेंचमार्किंग और कार्यकारी प्रस्तुति।',
      },
    },
    tags: ['Case Analysis', 'Business Strategy', 'Financial Basics', 'Executive Presentations', 'Analytics'],
    date: '2025',
    organization: 'Inter-Collegiate Business Forum',
    role: {
      en: 'Case Competitor & Presenter',
      hi: 'केस प्रतियोगी एवं प्रस्तुतकर्ता',
    },
    imageGradient: 'from-[#2A2421] via-[#1C1A17] to-[#B69A68]/30',
    iconName: 'TrendingUp',
  },
];

export const journeyItems: JourneyItem[] = [
  {
    id: 'bba-allenhouse',
    period: '2025 – 2028 (Expected)',
    role: {
      en: 'Bachelor of Business Administration (BBA) Scholar',
      hi: 'बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (बीबीए) शोधार्थी',
    },
    organization: {
      en: 'Allenhouse Business School, Kanpur',
      hi: 'एलेनहाउस बिजनेस स्कूल, कानपुर',
    },
    location: 'Kanpur, Uttar Pradesh',
    type: 'education',
    highlights: {
      en: [
        'Building strong foundational proficiency across corporate finance, marketing management, and operations.',
        'Active participant in HR Club initiatives, case study competitions, and college research conferences.',
        'Enrolled in Allenhouse Professional Development Program (PDP) and Soft Skills training modules.',
      ],
      hi: [
        'कॉर्पोरेट वित्त, विपणन प्रबंधन और संचालन में मजबूत आधार तैयार करना।',
        'एचआर क्लब की पहलों, केस स्टडी प्रतियोगिताओं और शोध सम्मेलनों में सक्रिय भागीदारी।',
        'एलेनहाउस प्रोफेशनल डेवलपमेंट प्रोग्राम (पीडीपी) और सॉफ्ट स्किल्स मॉड्यूल में सहभागिता।',
      ],
    },
    verified: true,
  },
  {
    id: 'nexora-project-journey',
    period: '2025',
    role: {
      en: 'Core Team Member · Future Workplace Project',
      hi: 'मुख्य टीम सदस्य · फ्यूचर वर्कप्लेस प्रोजेक्ट',
    },
    organization: {
      en: 'NEXORA: The Organisation of Tomorrow / HR Club',
      hi: 'नेक्सोरा: भविष्य का संगठन / एचआर क्लब',
    },
    location: 'Allenhouse Business School',
    type: 'project',
    highlights: {
      en: [
        'Formulated culture blueprints centered on People, Progress, and Planet targeting 2050 organizational paradigms.',
        'Explored artificial intelligence as a supportive enabler for employee growth, psychological safety, and agility.',
        'Presented recommendations on future leadership, diversity, and operational adaptability.',
      ],
      hi: [
        '2050 के संगठनात्मक मॉडल को लक्षित करते हुए लोग, प्रगति और पृथ्वी पर आधारित कार्यस्थल संस्कृति बनाई।',
        'कर्मचारियों के विकास और अनुकूलन क्षमता के लिए कृत्रिम बुद्धिमत्ता (एआई) के उपयोग का अन्वेषण किया।',
        'भविष्य के नेतृत्व और परिचालन लचीलेपन पर महत्वपूर्ण रणनीतिक सिफारिशें प्रस्तुत कीं।',
      ],
    },
    verified: true,
  },
  {
    id: 'amul-dairy-journey',
    period: '2025',
    role: {
      en: 'Industrial Exposure Analyst',
      hi: 'औद्योगिक अनुभव विश्लेषक',
    },
    organization: {
      en: 'Amul - Banas Dairy',
      hi: 'अमूल - बनास डेयरी',
    },
    location: 'Industrial Plant Visit',
    type: 'industrial',
    highlights: {
      en: [
        'Observed industrial dairy production lines, automated quality testing, packaging, and distribution hubs.',
        'Evaluated supply-chain logistics, cold-chain integrity, and cooperative inventory management systems.',
        'Gained hands-on exposure to high-volume manufacturing protocols and quality assurance benchmarks.',
      ],
      hi: [
        'औद्योगिक डेयरी उत्पादन लाइनों, स्वचालित गुणवत्ता परीक्षण, पैकेजिंग और वितरण केंद्रों का प्रत्यक्ष अवलोकन किया।',
        'सप्लाई-चेन लॉजिस्टिक्स, कोल्ड-चेन व्यवस्था और इन्वेंट्री प्रबंधन का विश्लेषण किया।',
        'उच्च-मात्रा विनिर्माण और गुणवत्ता आश्वासन के व्यावहारिक मानकों को समझा।',
      ],
    },
    verified: true,
  },
  {
    id: 'pdp-training-journey',
    period: '2025',
    role: {
      en: 'Professional Development Program (PDP) Trainee',
      hi: 'व्यावसायिक विकास कार्यक्रम (पीडीपी) प्रशिक्षु',
    },
    organization: {
      en: 'Allenhouse Business School',
      hi: 'एलेनहाउस बिजनेस स्कूल',
    },
    location: 'Kanpur, India',
    type: 'training',
    highlights: {
      en: [
        'Completed structured coursework in business communications, corporate etiquette, and verbal presentation.',
        'Participated in practical managerial workshops and simulated teamwork problem-solving labs.',
      ],
      hi: [
        'व्यावसायिक संचार, कॉर्पोरेट शिष्टाचार और मौखिक प्रस्तुति का प्रशिक्षण पूर्ण किया।',
        'प्रबंधन कार्यशालाओं और टीमवर्क समस्या-निवारण अभ्यासों में सक्रिय भागीदारी निभाई।',
      ],
    },
    verified: true,
  },
  {
    id: 'intermediate-journey',
    period: 'Completed 2025',
    role: {
      en: 'Intermediate (Class XII) · 85% Academic Distinction',
      hi: 'इंटरमीडिएट (कक्षा 12वीं) · 85% शैक्षणिक विशिष्टता',
    },
    organization: {
      en: 'Sweet Angel International School',
      hi: 'स्वीट एंजेल इंटरनेशनल स्कूल',
    },
    location: 'Kanpur, Uttar Pradesh',
    type: 'education',
    highlights: {
      en: [
        'Achieved 85% aggregate score demonstrating strong discipline, quantitative aptitude, and academic consistency.',
        'Developed foundational written communication and logical problem-solving abilities.',
      ],
      hi: [
        '85% अंक प्राप्त कर मजबूत अनुशासन और शैक्षणिक निरंतरता का प्रदर्शन किया।',
        'लिखित संचार और तार्किक समस्या समाधान क्षमताओं को सुदृढ़ किया।',
      ],
    },
    verified: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'technical-tools',
    title: {
      en: 'Data & Office Software',
      hi: 'डेटा एवं ऑफिस सॉफ्टवेयर',
    },
    skills: [
      {
        name: 'Microsoft Excel',
        description: {
          en: 'Formulas, data sorting, summary tables, analytical modeling & spreadsheet management',
          hi: 'फॉर्मूला, डेटा सॉर्टिंग, सारांश टेबल, विश्लेषणात्मक मॉडलिंग व स्प्रेडशीट प्रबंधन',
        },
        icon: 'Table',
      },
      {
        name: 'Microsoft PowerPoint',
        description: {
          en: 'Executive presentations, visual storytelling, business pitches & report decks',
          hi: 'कार्यकारी प्रस्तुतियाँ, विज़ुअल स्टोरीटेलिंग, बिज़नेस पिच व रिपोर्ट डेक',
        },
        icon: 'Presentation',
      },
      {
        name: 'Basic Data Analysis',
        description: {
          en: 'Descriptive statistics, metric interpretation, data validation & pattern identification',
          hi: 'वर्णनात्मक सांख्यिकी, मीट्रिक व्याख्या, डेटा सत्यापन और पैटर्न पहचान',
        },
        icon: 'BarChart3',
      },
      {
        name: 'AI Productivity Tools',
        description: {
          en: 'Prompt crafting, research synthesis, workflow acceleration & generative assistance',
          hi: 'प्रॉम्प्ट निर्माण, शोध संकलन, कार्यप्रवाह में गति और जेनरेटिव सहायता',
        },
        icon: 'Sparkles',
      },
    ],
  },
  {
    id: 'business-operations',
    title: {
      en: 'Business & Operational Acumen',
      hi: 'व्यावसायिक एवं परिचालन क्षमताएँ',
    },
    skills: [
      {
        name: 'Supply Chain Observation',
        description: {
          en: 'Cold-chain management, industrial distribution flows & inventory turnaround principles',
          hi: 'कोल्ड-चेन प्रबंधन, औद्योगिक वितरण प्रवाह और इन्वेंट्री संचालन के सिद्धांत',
        },
        icon: 'Truck',
      },
      {
        name: 'Operations & Quality Control',
        description: {
          en: 'Production flow analysis, packaging hygiene protocols & manufacturing stages',
          hi: 'उत्पादन प्रवाह विश्लेषण, पैकेजिंग स्वच्छता मानक और विनिर्माण चरण',
        },
        icon: 'CheckCircle2',
      },
      {
        name: 'Finance & Marketing Foundations',
        description: {
          en: 'Cost principles, market segmentation, consumer trends & strategic positioning',
          hi: 'लागत सिद्धांत, बाजार विभाजन, उपभोक्ता रुझान और रणनीतिक स्थिति',
        },
        icon: 'TrendingUp',
      },
      {
        name: 'Future Workplace Strategy',
        description: {
          en: 'People-Progress-Planet framework, AI organizational integration & culture design',
          hi: 'पीपल-प्रोग्रेस-प्लैनेट मॉडल, एआई का संगठनात्मक उपयोग और कार्यस्थल संस्कृति',
        },
        icon: 'Cpu',
      },
    ],
  },
  {
    id: 'professional-leadership',
    title: {
      en: 'Professional & Interpersonal Strengths',
      hi: 'पेशेवर और पारस्परिक दक्षताएँ',
    },
    skills: [
      {
        name: 'Communication & Pitching',
        description: {
          en: 'Clear articulate verbal expression, public speaking & cross-stakeholder liaison',
          hi: 'स्पष्ट मौखिक अभिव्यक्ति, सार्वजनिक भाषण और प्रभावी संवाद',
        },
        icon: 'MessageSquare',
      },
      {
        name: 'Structured Problem Solving',
        description: {
          en: 'Deconstructing complex business situations into actionable milestones',
          hi: 'जटिल व्यावसायिक समस्याओं को व्यवस्थित चरणों में हल करना',
        },
        icon: 'HelpCircle',
      },
      {
        name: 'Collaborative Teamwork',
        description: {
          en: 'Synergy in diverse student cohorts, HR club teams & cross-functional projects',
          hi: 'विविध छात्र समूहों और एचआर क्लब में सामंजस्यपूर्ण सहयोग',
        },
        icon: 'Users',
      },
      {
        name: 'Agility & Adaptability',
        description: {
          en: 'Rapid assimilation of new tools, technologies, methodologies & dynamic environments',
          hi: 'नए उपकरणों, तकनीकों और गतिशील वातावरण को शीघ्रता से अपनाना',
        },
        icon: 'Compass',
      },
    ],
  },
];

export const achievementsList: Achievement[] = [
  {
    id: 'winner-no-flame',
    title: {
      en: 'Winner · No Flame All Fame Competition',
      hi: 'विजेता · नो फ्लेम ऑल फेम प्रतियोगिता',
    },
    event: 'No Flame All Fame Inter-Batch Challenge',
    organization: 'Allenhouse Business School',
    date: '2025',
    badge: {
      en: 'First Place Winner',
      hi: 'प्रथम स्थान विजेता',
    },
    description: {
      en: 'Secured top honors for exceptional teamwork, innovative concept presentation, resource optimization, and rapid execution under competitive conditions.',
      hi: 'प्रतिस्पर्धी परिस्थितियों में असाधारण टीमवर्क, नवीन अवधारणा, संसाधन प्रबंधन और त्वरित निष्पादन के लिए प्रथम स्थान प्राप्त किया।',
    },
  },
  {
    id: 'case-o-mania-participant',
    title: {
      en: 'Participant · Case-O-Mania & International Conference',
      hi: 'प्रतिभागी · केस-ओ-मैनिया एवं अंतर्राष्ट्रीय सम्मेलन',
    },
    event: 'Case-O-Mania & Academic Symposium',
    organization: 'Allenhouse Business School',
    date: '2025',
    badge: {
      en: 'Official Delegate',
      hi: 'आधिकारिक प्रतिनिधि',
    },
    description: {
      en: 'Engaged in competitive business case analysis, presenting strategic resolutions and participating in academic international conference proceedings.',
      hi: 'व्यावसायिक केस विश्लेषण में भाग लिया, रणनीतिक समाधान प्रस्तुत किए और अंतर्राष्ट्रीय सम्मेलन की विचार-गोष्ठियों में योगदान दिया।',
    },
  },
  {
    id: 'hr-club-active',
    title: {
      en: 'Active Participant · HR Club Initiatives & Competitions',
      hi: 'सक्रिय प्रतिभागी · एचआर क्लब गतिविधियाँ एवं प्रतियोगिताएं',
    },
    event: 'Human Resource Society Activities',
    organization: 'Allenhouse Business School',
    date: '2025 – Present',
    badge: {
      en: 'Core Member',
      hi: 'सक्रिय सदस्य',
    },
    description: {
      en: 'Regularly contributing to seminars, team building challenges, organizational culture debates, and leadership development exercises.',
      hi: 'सेमिनार, टीम निर्माण चुनौतियों, संगठनात्मक संस्कृति वाद-विवाद और नेतृत्व विकास अभ्यासों में नियमित भागीदारी।',
    },
  },
  {
    id: 'class-xii-distinction',
    title: {
      en: 'Academic Distinction · 85% in Intermediate (Class XII)',
      hi: 'शैक्षणिक विशिष्टता · इंटरमीडिएट में 85% अंक',
    },
    event: 'Class XII Board Examinations',
    organization: 'Sweet Angel International School',
    date: '2025',
    badge: {
      en: '85% Merit',
      hi: '85% योग्यता',
    },
    description: {
      en: 'Awarded 85% aggregate score, reflecting diligent focus, mathematical and linguistic aptitude, and sustained academic dedication.',
      hi: '85% कुल अंक प्राप्त किए, जो निरंतर समर्पण, तार्किक और भाषाई दक्षता को दर्शाते हैं।',
    },
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'bba',
    degree: {
      en: 'Bachelor of Business Administration (BBA)',
      hi: 'बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (बीबीए)',
    },
    institution: {
      en: 'Allenhouse Business School, Kanpur',
      hi: 'एलेनहाउस बिजनेस स्कूल, कानपुर',
    },
    period: '2025 – 2028 (Expected)',
    details: {
      en: [
        'Comprehensive curriculum encompassing Financial Accounting, Principles of Marketing, Business Mathematics, and Organizational Behavior.',
        'Active member of the institutional HR Club and Student Management Forums.',
      ],
      hi: [
        'वित्तीय लेखांकन, विपणन के सिद्धांत, व्यावसायिक गणित और संगठनात्मक व्यवहार का समग्र पाठ्यक्रम।',
        'संस्थान के एचआर क्लब और छात्र प्रबंधन मंचों की सक्रिय सदस्य।',
      ],
    },
  },
  {
    id: 'class-xii',
    degree: {
      en: 'Intermediate (Class XII)',
      hi: 'इंटरमीडिएट (कक्षा 12वीं)',
    },
    institution: {
      en: 'Sweet Angel International School, Kanpur',
      hi: 'स्वीट एंजेल इंटरनेशनल स्कूल, कानपुर',
    },
    period: 'Completed 2025',
    score: '85% Aggregate',
    details: {
      en: [
        'Graduated with 85% marks with distinction in core academic subjects.',
        'Active participant in literary and extracurricular school committees.',
      ],
      hi: [
        'प्रमुख शैक्षणिक विषयों में विशिष्टता के साथ 85% अंकों से उत्तीर्ण।',
        'साहित्यिक और पाठ्येतर विद्यालय गतिविधियों में सक्रिय सहभागिता।',
      ],
    },
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'pdp-cert',
    name: {
      en: 'Professional Development Program (PDP)',
      hi: 'व्यावसायिक विकास कार्यक्रम (पीडीपी)',
    },
    issuer: {
      en: 'Allenhouse Business School',
      hi: 'एलेनहाउस बिजनेस स्कूल',
    },
    status: 'Verified Training',
    description: {
      en: 'Executive grooming, corporate interview preparation, workplace ethics, and cross-functional leadership foundations.',
      hi: 'कॉर्पोरेट साक्षात्कार तैयारी, कार्यस्थल नैतिकता और अंतर-कार्यात्मक नेतृत्व की नींव।',
    },
  },
  {
    id: 'soft-skills-cert',
    name: {
      en: 'Soft Skills & Communication Training',
      hi: 'सॉफ्ट स्किल्स एवं संचार प्रशिक्षण',
    },
    issuer: {
      en: 'Allenhouse Business School',
      hi: 'एलेनहाउस बिजनेस स्कूल',
    },
    status: 'Verified Training',
    description: {
      en: 'Spoken English fluency, business correspondence, active listening, and high-impact boardroom presentations.',
      hi: 'व्यावसायिक पत्राचार, सक्रिय श्रवण कौशल और प्रभावशाली प्रस्तुति तकनीक।',
    },
  },
  {
    id: 'workshops-cert',
    name: {
      en: 'Business & Management Workshops',
      hi: 'व्यावसायिक एवं प्रबंधन कार्यशालाएँ',
    },
    issuer: {
      en: 'College Management Activities & Forums',
      hi: 'कॉलेज प्रबंधन मंच',
    },
    status: 'Verified Participation',
    description: {
      en: 'Hands-on exposure to practical case studies, marketing campaigns, and simulated operational challenges.',
      hi: 'केस स्टडीज, मार्केटिंग अभियानों और व्यावहारिक परिचालन चुनौतियों का अनुभव।',
    },
  },
];

export const uiTranslations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Journey',
      skills: 'Skills',
      projects: 'Projects',
      achievements: 'Achievements',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      exploreWork: 'Explore Portfolio',
      viewResume: 'View Resume',
      downloadResume: 'Download Resume (PDF)',
      openToOpp: 'Open to Opportunities',
      location: 'Kanpur, India',
    },
    about: {
      kicker: 'Strategic Profile',
      title: 'Multidisciplinary Curiosity Grounded in Real-World Operations',
      quote: '"Fusing organizational empathy, ethical leadership, and technological agility to shape future-ready workplaces."',
      pillars: [
        {
          title: 'People Centric',
          desc: 'Advocating employee empowerment, inclusivity, and psychological safety as foundational business drivers.',
        },
        {
          title: 'Progress Driven',
          desc: 'Harnessing modern AI tools, spreadsheets, and analytical workflows to automate routine and amplify insight.',
        },
        {
          title: 'Planet Mindful',
          desc: 'Committed to responsible operational practices, sustainable supply chains, and cooperative value creation.',
        },
      ],
    },
    journey: {
      kicker: 'Experience & Milestones',
      title: 'Professional & Academic Journey',
      subtitle: 'Chronicle of verified roles, projects, industrial visits, and educational foundations.',
    },
    skills: {
      kicker: 'Capabilities & Tools',
      title: 'Skills & Applied Competencies',
      subtitle: 'Practical proficiencies across business operations, modern digital tools, and interpersonal dynamics.',
      allTab: 'All Capabilities',
      searchPlaceholder: 'Search skills (e.g., Excel, AI, Supply Chain)...',
    },
    projects: {
      kicker: 'Featured Endeavors',
      title: 'Selected Projects & Case Studies',
      subtitle: 'Concrete academic frameworks, industrial observations, and analytical competitions.',
      filterAll: 'All Projects',
      filterWorkplace: 'Workplace & HR',
      filterOperations: 'Operations & Logistics',
      filterAnalytics: 'Strategy & Analysis',
      viewCaseStudy: 'View Case Study',
      keyLearnings: 'Key Contributions',
      outcomes: 'Verified Outcomes',
      context: 'Project Context',
      closeModal: 'Close Preview',
    },
    achievements: {
      kicker: 'Recognition & Excellence',
      title: 'Honors, Competitions & Leadership',
      subtitle: 'Verified competitive awards and organizational engagement.',
    },
    education: {
      kicker: 'Academic Pedigree',
      title: 'Education & Professional Training',
      subtitle: 'Accredited degrees and structured professional development programs.',
      trainingTitle: 'Training & Development Credentials',
    },
    resumeModal: {
      title: 'Professional Resume',
      subtitle: 'Verified document of Khushi Gupta',
      download: 'Download PDF',
      openTab: 'Open in Full Tab',
      close: 'Close Viewer',
      fallbackText: 'PDF preview could not be displayed directly. Click the button below to view or download.',
    },
    contact: {
      kicker: 'Connect Directly',
      title: 'Let’s Start a Conversation',
      subtitle: 'Available for internship inquiries, project collaborations, and professional networking.',
      emailLabel: 'Direct Email',
      phoneLabel: 'Direct Phone',
      linkedInLabel: 'LinkedIn Profile',
      locationLabel: 'Location',
      copySuccess: 'Copied to clipboard!',
      copyTooltip: 'Click to copy',
    },
    footer: {
      brandStatement: 'BBA Scholar at Allenhouse Business School passionate about future-ready workplaces, operational logistics, and AI productivity tools.',
      backToTop: 'Back to Top',
      rights: 'All rights reserved.',
      verifiedBadge: 'Verified Resume Source',
    },
    configGuide: {
      button: 'Portfolio Config Guide',
      title: 'Centralized Portfolio Customization',
      desc: 'All profile information, links, resume PDF, and projects are centralized in src/data/portfolioData.ts. You can replace the resume PDF in public/assets/ or update details easily.',
      close: 'Got it',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'परिचय',
      journey: 'यात्रा',
      skills: 'कौशल',
      projects: 'परियोजनाएं',
      achievements: 'उपलब्धियां',
      education: 'शिक्षा',
      contact: 'संपर्क',
    },
    hero: {
      exploreWork: 'पोर्टफोलियो देखें',
      viewResume: 'रिज्यूमे देखें',
      downloadResume: 'रिज्यूमे डाउनलोड करें (PDF)',
      openToOpp: 'नए अवसरों के लिए उपलब्ध',
      location: 'कानपुर, भारत',
    },
    about: {
      kicker: 'रणनीतिक रूपरेखा',
      title: 'व्यावहारिक संचालन और तकनीकी जिज्ञासा का संगम',
      quote: '"भविष्य के कार्यस्थलों को संवारने के लिए मानवीय सहानुभूति, नैतिक नेतृत्व और तकनीकी तत्परता का समन्वय।"',
      pillars: [
        {
          title: 'मानव केंद्रित',
          desc: 'कर्मचारी सशक्तिकरण, समावेशिता और मानसिक सुरक्षा को व्यावसायिक सफलता की नींव मानना।',
        },
        {
          title: 'प्रगति उन्मुख',
          desc: 'रूटीन कार्यों को सुगम बनाने और अंतर्दृष्टि बढ़ाने के लिए आधुनिक एआई और स्प्रेडशीट का उपयोग।',
        },
        {
          title: 'पर्यावरण सजग',
          desc: 'जिम्मेदार परिचालन प्रथाओं, टिकाऊ आपूर्ति शृंखला और सहकारी मूल्यों के प्रति प्रतिबद्ध।',
        },
      ],
    },
    journey: {
      kicker: 'अनुभव एवं उपलब्धियां',
      title: 'व्यावसायिक एवं शैक्षणिक यात्रा',
      subtitle: 'सत्यापित भूमिकाओं, परियोजनाओं, औद्योगिक दौरों और शैक्षणिक उपलब्धियों का विवरण।',
    },
    skills: {
      kicker: 'सक्षमताएं और उपकरण',
      title: 'कौशल एवं व्यावहारिक दक्षताएँ',
      subtitle: 'व्यावसायिक संचालन, आधुनिक डिजिटल उपकरण और पारस्परिक कौशल की संतुलित निपुणता।',
      allTab: 'सभी क्षमताएं',
      searchPlaceholder: 'कौशल खोजें (उदा. एक्सेल, एआई, सप्लाई चेन)...',
    },
    projects: {
      kicker: 'विशेष परियोजनाएं',
      title: 'प्रमुख परियोजनाएं एवं केस स्टडीज',
      subtitle: 'शैक्षणिक ढांचे, औद्योगिक अवलोकन और विश्लेषणात्मक प्रतियोगिताओं का संग्रह।',
      filterAll: 'सभी परियोजनाएं',
      filterWorkplace: 'कार्यस्थल एवं एचआर',
      filterOperations: 'परिचालन एवं रसद',
      filterAnalytics: 'रणनीति एवं विश्लेषण',
      viewCaseStudy: 'केस स्टडी देखें',
      keyLearnings: 'मुख्य योगदान',
      outcomes: 'सत्यापित परिणाम',
      context: 'परियोजना का संदर्भ',
      closeModal: 'प्रिव्यू बंद करें',
    },
    achievements: {
      kicker: 'सम्मान एवं उत्कृष्टता',
      title: 'पुरस्कार, प्रतियोगिताएं एवं नेतृत्व',
      subtitle: 'सत्यापित प्रतिस्पर्धी पुरस्कार और कॉलेज स्तरीय गतिविधियां।',
    },
    education: {
      kicker: 'शैक्षणिक पृष्ठभूमि',
      title: 'शिक्षा एवं व्यावसायिक प्रशिक्षण',
      subtitle: 'मान्यता प्राप्त डिग्री और संरचित व्यावसायिक विकास कार्यक्रम।',
      trainingTitle: 'प्रशिक्षण एवं प्रमाण-पत्र',
    },
    resumeModal: {
      title: 'व्यावसायिक रिज्यूमे',
      subtitle: 'खुशी गुप्ता का सत्यापित दस्तावेज',
      download: 'पीडीएफ डाउनलोड करें',
      openTab: 'नए टैब में खोलें',
      close: 'बंद करें',
      fallbackText: 'पीडीएफ सीधे प्रदर्शित नहीं हो सका। देखने या डाउनलोड करने के लिए नीचे दिए गए बटन पर क्लिक करें।',
    },
    contact: {
      kicker: 'सीधा संवाद',
      title: 'आइए बातचीत शुरू करें',
      subtitle: 'इंटर्नशिप, परियोजना सहयोग और पेशेवर नेटवर्किंग के लिए हमेशा उपलब्ध।',
      emailLabel: 'ईमेल',
      phoneLabel: 'फ़ोन नंबर',
      linkedInLabel: 'लिंक्डइन प्रोफाइल',
      locationLabel: 'स्थान',
      copySuccess: 'क्लिपबोर्ड पर कॉपी किया गया!',
      copyTooltip: 'कॉपी करने के लिए क्लिक करें',
    },
    footer: {
      brandStatement: 'एलेनहाउस बिजनेस स्कूल में बीबीए शोधार्थी, भविष्य के कार्यस्थलों, परिचालन रसद और एआई टूल्स के प्रति समर्पित।',
      backToTop: 'ऊपर जाएं',
      rights: 'सर्वाधिकार सुरक्षित।',
      verifiedBadge: 'सत्यापित रिज्यूमे स्रोत',
    },
    configGuide: {
      button: 'पोर्टफोलियो गाइड',
      title: 'केंद्रीकृत पोर्टफोलियो विन्यास',
      desc: 'सभी प्रोफाइल विवरण, लिंक, रिज्यूमे पीडीएफ और प्रोजेक्ट्स src/data/portfolioData.ts में स्थित हैं। आप इन्हें सरलता से अपडेट कर सकते हैं।',
      close: 'समझ गया',
    },
  },
};
