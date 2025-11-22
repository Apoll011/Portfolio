import homepagePreview from '../assets/homepage.gif';
import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  // === AVI ECOSYSTEM ===
  {
    id: SLIDE_IDS.AVI_CORE,
    name: 'Avi Core',
    title: 'Avi Core',
    preview: "",
    position: { x: 1500, y: -500, z: 0, rotateY: 0 },
    description:
        'The central AI voice assistant - a modern, intelligent personal assistant capable of understanding natural language and executing complex tasks',
    tech: ['AI', 'Voice Assistant', 'NLP', 'Python'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/aviCore', text: 'Github', githubRepo: 'apoll011/aviCore' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AVI_NLU,
    name: 'Avi NLU',
    title: 'Avi NLU',
    preview: homepagePreview,
    position: { x: 1800, y: 450, z: 600, rotateY: 25 },
    description:
        'Avi Natural Language Understanding Engine - a cloud service that powers Avi\'s ability to comprehend and process natural language',
    tech: ['NLU', 'Cloud', 'Machine Learning', 'API'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/avi-nlu', text: 'Github', githubRepo: 'apoll011/avi-nlu' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.AVI_ENCLOSURE,
    name: 'Avi Enclosure',
    title: 'Avi Enclosure',
    preview: homepagePreview,
    position: { x: -1400, y: 1200, z: 300, rotateY: 310 },
    description:
        'A lightweight operating system that enables various devices to communicate with Avi through AECP v2 protocol',
    tech: ['Embedded', 'OS', 'IoT', 'AECP'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/avi-enclosure', text: 'Github', githubRepo: 'apoll011/avi-enclosure' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AVI_STUDIO,
    name: 'Avi Studio',
    title: 'Avi Studio',
    preview: homepagePreview,
    position: { x: 700, y: -1600, z: 900, rotateY: 55 },
    description:
        'An integrated development environment (IDE) for creating and managing skills for the Avi assistant',
    tech: ['IDE', 'Developer Tools', 'Skills', 'Desktop'],
    links: [
      { type: 'demo', url: 'https://github.com/apoll011/avi-studio/releases', text: 'Download' },
      { type: 'code', url: 'https://github.com/apoll011/avi-studio', text: 'Github', githubRepo: 'apoll011/avi-studio' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.AVI_DOCS,
    name: 'Avi Documentation',
    title: 'Avi Documentation',
    preview: homepagePreview,
    position: { x: -2100, y: -400, z: 1200, rotateY: 195 },
    description:
        'Comprehensive documentation site for the Avi ecosystem - guides, API references, and tutorials for developers',
    tech: ['Documentation', 'Web', 'Developer Resources'],
    links: [
      { type: 'demo', url: 'https://alex-documentation-server-kvy6-ebz7xjhh8-apoll011s-projects.vercel.app', text: 'View Docs' },
      { type: 'code', url: 'https://github.com/apoll011/avi-docs', text: 'Github', githubRepo: 'apoll011/avi-docs' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AECP_V2,
    name: 'AECP v2',
    title: 'AECP v2',
    preview: homepagePreview,
    position: { x: 2400, y: -900, z: 400, rotateY: 75 },
    description:
        'Avi Assistant Communication Protocol version 2 - a simplified protocol for device-to-Avi communication',
    tech: ['Protocol', 'Communication', 'IoT'],
    links: [],
    layout: 'reverse',
  },

  // === ALEX (ARCHIVED) ===
  {
    id: SLIDE_IDS.ALEX,
    name: 'Alex',
    title: 'Alex',
    preview: homepagePreview,
    position: { x: -500, y: 1900, z: 1500, rotateY: 280 },
    description:
        'The original AI voice assistant (predecessor to Avi) - built in Python, Julia, and Java. Now archived.',
    tech: ['AI', 'Voice Assistant', 'Python', 'Julia', 'Java', 'Archived'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/alex', text: 'Github', githubRepo: 'apoll011/alex' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.ALEX_INTENT_EDITOR,
    name: 'Alex Intent Editor',
    title: 'Alex Intent Editor',
    preview: homepagePreview,
    position: { x: 1200, y: 1400, z: 2100, rotateY: 40 },
    description:
        'A DSL-based editor for creating intents for Alex - define text patterns, skills, and actions in a visual interface',
    tech: ['DSL', 'Editor', 'NLP', 'Archived'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/AlexIntentEditor', text: 'Github', githubRepo: 'apoll011/AlexIntentEditor' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.ALEX_DASHBOARD,
    name: 'Alex Dashboard',
    title: 'Alex Dashboard',
    preview: homepagePreview,
    position: { x: -1800, y: -1500, z: 700, rotateY: 225 },
    description:
        'A web dashboard for controlling and configuring Alex assistant properties. Now archived.',
    tech: ['Dashboard', 'Web', 'Admin', 'Archived'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/AlexAdminWebsite', text: 'Github', githubRepo: 'apoll011/AlexAdminWebsite' },
    ],
    layout: 'standard',
  },

  // === PROTOCOLS ===
  {
    id: SLIDE_IDS.AECP,
    name: 'AECP',
    title: 'AECP',
    preview: homepagePreview,
    position: { x: 300, y: 2200, z: 500, rotateY: 15 },
    description:
        'AVE-Core Communication Protocol - the first version of the protocol designed for communication between AVI and its CORE',
    tech: ['Protocol', 'Communication', 'Networking'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/aecp-python', text: 'Github', githubRepo: 'apoll011/aecp-python' },
    ],
    layout: 'reverse',
  },

  // === WEB APPLICATIONS ===
  {
    id: SLIDE_IDS.EBF_CLIENT,
    name: 'EBF Client',
    title: 'EBF Client',
    preview: homepagePreview,
    position: { x: -2500, y: 700, z: 1800, rotateY: 165 },
    description:
        'A comprehensive church camp management dashboard - track children attendance, manage game markets, and handle all camp-related activities',
    tech: ['Fullstack', 'Dashboard', 'Web', 'Church'],
    links: [
      { type: 'demo', url: 'https://ebf-client-1n2sctm47-apoll011s-projects.vercel.app', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/apoll011/ebf-client', text: 'Github', githubRepo: 'apoll011/ebf-client' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.FINALIST_HUB,
    name: 'Finalist Hub',
    title: 'Finalist Hub',
    preview: homepagePreview,
    position: { x: 2000, y: 1800, z: 1100, rotateY: 95 },
    description:
        'Event management platform for 12th grade graduation committee - create events, manage ticket sales, and track finances',
    tech: ['Fullstack', 'Events', 'E-commerce', 'Web'],
    links: [
      { type: 'demo', url: 'finalist-hub.vercel.app', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/apoll011/FinalistHub-Client', text: 'Github', githubRepo: 'apoll011/FinalistHub-Client' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.SOCIAL_WAVE,
    name: 'Social Wave',
    title: 'Social Wave',
    preview: homepagePreview,
    position: { x: -900, y: -2100, z: 1400, rotateY: 250 },
    description:
        'An educational platform teaching children and teenagers how to safely and responsibly use social media',
    tech: ['Education', 'Web', 'Social Media', 'Youth'],
    links: [
      { type: 'demo', url: 'socialwave-ra1u8wt7m-apoll011s-projects.vercel.app', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/apoll011/SocialWaveSite', text: 'Github', githubRepo: 'apoll011/SocialWaveSite' },
    ],
    layout: 'standard',
  },

  // === PRODUCTIVITY ===
  {
    id: SLIDE_IDS.DEEP_THOUGHTS,
    name: 'DeepThoughts',
    title: 'DeepThoughts',
    preview: homepagePreview,
    position: { x: 1500, y: -300, z: 2400, rotateY: 10 },
    description:
        'A modular block-based note-taking app for journaling thoughts and emotions - express yourself through structured writing',
    tech: ['Notes', 'Productivity', 'Block Editor', 'Mental Health'],
    links: [
      { type: 'demo', url: 'https://deepthoughts-omega.vercel.app/', text: 'Try It' },
      { type: 'code', url: 'https://github.com/apoll011/deepthoughts', text: 'Github', githubRepo: 'apoll011/deepthoughts' },
    ],
    layout: 'reverse',
  },

  // === LIBRARIES ===
  {
    id: SLIDE_IDS.PROMISE,
    name: 'Promise',
    title: 'Promise',
    preview: "",
    position: { x: -1100, y: 500, z: 2600, rotateY: 330 },
    description:
        'A Python library with thread-safe Promise implementation inspired by JavaScript - handle asynchronous operations elegantly',
    tech: ['Python', 'Library', 'Async', 'Threading'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/Promise', text: 'Github', githubRepo: 'apoll011/Promise' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.CONTEXT_MANAGER,
    name: 'Context Manager',
    title: 'Context Manager',
    preview: "",
    position: { x: 2700, y: 200, z: 1700, rotateY: 60 },
    description:
        'A Python library for saving and loading objects to/from memory or files - simplified state persistence',
    tech: ['Python', 'Library', 'Serialization', 'State Management'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/ContextManager', text: 'Github', githubRepo: 'apoll011/ContextManager' },
    ],
    layout: 'reverse',
  },

  // === AI/LOGIC ===
  {
    id: SLIDE_IDS.LOGATE,
    name: 'Logate',
    title: 'Logate',
    preview: "",
    position: { x: -300, y: -1100, z: 2900, rotateY: 145 },
    description:
        'A logic inference engine that derives new premises from existing ones - input premises and discover logical conclusions',
    tech: ['Logic', 'Inference Engine', 'AI', 'Reasoning'],
    links: [
      { type: 'code', url: 'https://github.com/apoll011/LoGate', text: 'Github', githubRepo: 'apoll011/LoGate' },
    ],
    layout: 'standard',
  },
];

export const mapData = [
  {
    id: SLIDE_IDS.TITLE,
    name: 'Introduction',
    icon: 'fas fa-home',
  },
  // === AVI ECOSYSTEM ===
  {
    id: SLIDE_IDS.AVI_CORE,
    name: 'Avi Core',
    icon: 'fas fa-robot',
  },
  {
    id: SLIDE_IDS.AVI_NLU,
    name: 'Avi NLU',
    icon: 'fas fa-brain',
  },
  {
    id: SLIDE_IDS.AVI_ENCLOSURE,
    name: 'Avi Enclosure',
    icon: 'fas fa-microchip',
  },
  {
    id: SLIDE_IDS.AVI_STUDIO,
    name: 'Avi Studio',
    icon: 'fas fa-code',
  },
  {
    id: SLIDE_IDS.AVI_DOCS,
    name: 'Avi Documentation',
    icon: 'fas fa-book',
  },
  {
    id: SLIDE_IDS.AECP_V2,
    name: 'AECP v2',
    icon: 'fas fa-network-wired',
  },
  // === ALEX (ARCHIVED) ===
  {
    id: SLIDE_IDS.ALEX,
    name: 'Alex',
    icon: 'fas fa-microphone',
  },
  {
    id: SLIDE_IDS.ALEX_INTENT_EDITOR,
    name: 'Alex Intent Editor',
    icon: 'fas fa-edit',
  },
  {
    id: SLIDE_IDS.ALEX_DASHBOARD,
    name: 'Alex Dashboard',
    icon: 'fas fa-tachometer-alt',
  },
  // === PROTOCOLS ===
  {
    id: SLIDE_IDS.AECP,
    name: 'AECP',
    icon: 'fas fa-exchange-alt',
  },
  // === WEB APPLICATIONS ===
  {
    id: SLIDE_IDS.EBF_CLIENT,
    name: 'EBF Client',
    icon: 'fas fa-church',
  },
  {
    id: SLIDE_IDS.FINALIST_HUB,
    name: 'Finalist Hub',
    icon: 'fas fa-graduation-cap',
  },
  {
    id: SLIDE_IDS.SOCIAL_WAVE,
    name: 'Social Wave',
    icon: 'fas fa-users',
  },
  // === PRODUCTIVITY ===
  {
    id: SLIDE_IDS.DEEP_THOUGHTS,
    name: 'DeepThoughts',
    icon: 'fas fa-lightbulb',
  },
  // === LIBRARIES ===
  {
    id: SLIDE_IDS.PROMISE,
    name: 'Promise',
    icon: 'fab fa-python',
  },
  {
    id: SLIDE_IDS.CONTEXT_MANAGER,
    name: 'Context Manager',
    icon: 'fas fa-database',
  },
  // === AI/LOGIC ===
  {
    id: SLIDE_IDS.LOGATE,
    name: 'Logate',
    icon: 'fas fa-project-diagram',
  },
  {
    id: SLIDE_IDS.OVERVIEW,
    name: 'Overview',
    icon: 'fas fa-th-large',
  },
];