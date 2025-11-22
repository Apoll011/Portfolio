import animatedGalleryPreview from '../assets/animated_gallery.gif';
import folioSpacePreview from '../assets/folio_space.gif';
import gwitterPreview from '../assets/gwitter.gif';
import homepagePreview from '../assets/homepage.gif';
import italkingPreview from '../assets/italking.png';
import scrcpyGUIPreview from '../assets/scrcpy-gui.gif';
import termFolioGif from '../assets/term_folio.gif';
import thinkingPreview from '../assets/wechat.png';
import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  // === AVI ECOSYSTEM ===
  {
    id: SLIDE_IDS.AVI_CORE,
    name: 'Avi Core',
    title: 'Avi Core',
    preview: aviCorePreview,
    position: { x: 0, y: 0, z: 0, rotateY: 0 },
    description:
        'The central AI voice assistant - a modern, intelligent personal assistant capable of understanding natural language and executing complex tasks',
    tech: ['AI', 'Voice Assistant', 'NLP', 'Python'],
    links: [
      { type: 'demo', url: 'https://avi.example.com', text: 'Learn More' },
      { type: 'code', url: 'https://github.com/username/avi-core', text: 'Github', githubRepo: 'username/avi-core' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AVI_NLU,
    name: 'Avi NLU',
    title: 'Avi NLU',
    preview: aviNluPreview,
    position: { x: 400, y: 200, z: 100, rotateY: 15 },
    description:
        'Avi Natural Language Understanding Engine - a cloud service that powers Avi\'s ability to comprehend and process natural language',
    tech: ['NLU', 'Cloud', 'Machine Learning', 'API'],
    links: [
      { type: 'code', url: 'https://github.com/username/avi-nlu', text: 'Github', githubRepo: 'username/avi-nlu' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.AVI_ENCLOSURE,
    name: 'Avi Enclosure',
    title: 'Avi Enclosure',
    preview: aviEnclosurePreview,
    position: { x: 600, y: 400, z: 200, rotateY: 30 },
    description:
        'A lightweight operating system that enables various devices to communicate with Avi through AACP v2 protocol',
    tech: ['Embedded', 'OS', 'IoT', 'AACP'],
    links: [
      { type: 'code', url: 'https://github.com/username/avi-enclosure', text: 'Github', githubRepo: 'username/avi-enclosure' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AVI_STUDIO,
    name: 'Avi Studio',
    title: 'Avi Studio',
    preview: aviStudioPreview,
    position: { x: 800, y: 600, z: 300, rotateY: 45 },
    description:
        'An integrated development environment (IDE) for creating and managing skills for the Avi assistant',
    tech: ['IDE', 'Developer Tools', 'Skills', 'Desktop'],
    links: [
      { type: 'demo', url: 'https://github.com/username/avi-studio/releases', text: 'Download' },
      { type: 'code', url: 'https://github.com/username/avi-studio', text: 'Github', githubRepo: 'username/avi-studio' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.AVI_DOCS,
    name: 'Avi Documentation',
    title: 'Avi Documentation',
    preview: aviDocsPreview,
    position: { x: 1000, y: 800, z: 400, rotateY: 60 },
    description:
        'Comprehensive documentation site for the Avi ecosystem - guides, API references, and tutorials for developers',
    tech: ['Documentation', 'Web', 'Developer Resources'],
    links: [
      { type: 'demo', url: 'https://docs.avi.example.com', text: 'View Docs' },
      { type: 'code', url: 'https://github.com/username/avi-docs', text: 'Github', githubRepo: 'username/avi-docs' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.AACP_V2,
    name: 'AACP v2',
    title: 'AACP v2',
    preview: aacpV2Preview,
    position: { x: 1200, y: 600, z: 500, rotateY: 75 },
    description:
        'Avi Assistant Communication Protocol version 2 - a simplified protocol for device-to-Avi communication',
    tech: ['Protocol', 'Communication', 'IoT'],
    links: [
      { type: 'code', url: 'https://github.com/username/aacp-v2', text: 'Github', githubRepo: 'username/aacp-v2' },
    ],
    layout: 'reverse',
  },

  // === ALEX (ARCHIVED) ===
  {
    id: SLIDE_IDS.ALEX,
    name: 'Alex',
    title: 'Alex',
    preview: alexPreview,
    position: { x: 1400, y: 400, z: 600, rotateY: 90 },
    description:
        'The original AI voice assistant (predecessor to Avi) - built in Python, Julia, and Java. Now archived.',
    tech: ['AI', 'Voice Assistant', 'Python', 'Julia', 'Java', 'Archived'],
    links: [
      { type: 'code', url: 'https://github.com/username/alex', text: 'Github', githubRepo: 'username/alex' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.ALEX_INTENT_EDITOR,
    name: 'Alex Intent Editor',
    title: 'Alex Intent Editor',
    preview: alexIntentPreview,
    position: { x: 1500, y: 200, z: 700, rotateY: 105 },
    description:
        'A DSL-based editor for creating intents for Alex - define text patterns, skills, and actions in a visual interface',
    tech: ['DSL', 'Editor', 'NLP', 'Archived'],
    links: [
      { type: 'code', url: 'https://github.com/username/alex-intent-editor', text: 'Github', githubRepo: 'username/alex-intent-editor' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.ALEX_DASHBOARD,
    name: 'Alex Dashboard',
    title: 'Alex Dashboard',
    preview: alexDashboardPreview,
    position: { x: 1500, y: 0, z: 800, rotateY: 120 },
    description:
        'A web dashboard for controlling and configuring Alex assistant properties. Now archived.',
    tech: ['Dashboard', 'Web', 'Admin', 'Archived'],
    links: [
      { type: 'code', url: 'https://github.com/username/alex-dashboard', text: 'Github', githubRepo: 'username/alex-dashboard' },
    ],
    layout: 'standard',
  },

  // === PROTOCOLS ===
  {
    id: SLIDE_IDS.AESP,
    name: 'AESP',
    title: 'AESP',
    preview: aespPreview,
    position: { x: 1400, y: -200, z: 900, rotateY: 135 },
    description:
        'AVE-Core Communication Protocol - the first version of the protocol designed for communication between AVE and its CORE',
    tech: ['Protocol', 'Communication', 'Networking'],
    links: [
      { type: 'code', url: 'https://github.com/username/aesp', text: 'Github', githubRepo: 'username/aesp' },
    ],
    layout: 'reverse',
  },

  // === WEB APPLICATIONS ===
  {
    id: SLIDE_IDS.EBF_CLIENT,
    name: 'EBF Client',
    title: 'EBF Client',
    preview: ebfClientPreview,
    position: { x: 1200, y: -400, z: 1000, rotateY: 150 },
    description:
        'A comprehensive church camp management dashboard - track children attendance, manage game markets, and handle all camp-related activities',
    tech: ['Fullstack', 'Dashboard', 'Web', 'Church'],
    links: [
      { type: 'demo', url: 'https://ebf.example.com', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/username/ebf-client', text: 'Github', githubRepo: 'username/ebf-client' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.FINALIST_HUB,
    name: 'Finalist Hub Client',
    title: 'Finalist Hub Client',
    preview: finalistHubPreview,
    position: { x: 900, y: -600, z: 1100, rotateY: 165 },
    description:
        'Event management platform for 12th grade graduation committee - create events, manage ticket sales, and track finances',
    tech: ['Fullstack', 'Events', 'E-commerce', 'Web'],
    links: [
      { type: 'demo', url: 'https://finalisthub.example.com', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/username/finalist-hub-client', text: 'Github', githubRepo: 'username/finalist-hub-client' },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.SOCIAL_WAVE,
    name: 'Social Wave',
    title: 'Social Wave',
    preview: socialWavePreview,
    position: { x: 600, y: -800, z: 1200, rotateY: 180 },
    description:
        'An educational platform teaching children and teenagers how to safely and responsibly use social media',
    tech: ['Education', 'Web', 'Social Media', 'Youth'],
    links: [
      { type: 'demo', url: 'https://socialwave.example.com', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/username/social-wave', text: 'Github', githubRepo: 'username/social-wave' },
    ],
    layout: 'standard',
  },

  // === PRODUCTIVITY APPS ===
  {
    id: SLIDE_IDS.DEEP_THOUGHTS,
    name: 'DeepThoughts',
    title: 'DeepThoughts',
    preview: deepThoughtsPreview,
    position: { x: 300, y: -1000, z: 1300, rotateY: 195 },
    description:
        'A modular block-based note-taking app for journaling thoughts and emotions - express yourself through structured writing',
    tech: ['Notes', 'Productivity', 'Block Editor', 'Mental Health'],
    links: [
      { type: 'demo', url: 'https://deepthoughts.example.com', text: 'Try It' },
      { type: 'code', url: 'https://github.com/username/deep-thoughts', text: 'Github', githubRepo: 'username/deep-thoughts' },
    ],
    layout: 'reverse',
  },

  // === LIBRARIES ===
  {
    id: SLIDE_IDS.PROMISE,
    name: 'Promise',
    title: 'Promise',
    preview: promisePreview,
    position: { x: 0, y: -1200, z: 1400, rotateY: 210 },
    description:
        'A Python library with thread-safe Promise implementation inspired by JavaScript - handle asynchronous operations elegantly',
    tech: ['Python', 'Library', 'Async', 'Threading'],
    links: [
      { type: 'demo', url: 'https://pypi.org/project/promise-lib', text: 'PyPI' },
      { type: 'code', url: 'https://github.com/username/promise', text: 'Github', githubRepo: 'username/promise' },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.CONTEXT_MANAGER,
    name: 'Context Manager',
    title: 'Context Manager',
    preview: contextManagerPreview,
    position: { x: -300, y: -1000, z: 1500, rotateY: 225 },
    description:
        'A Python library for saving and loading objects to/from memory or files - simplified state persistence',
    tech: ['Python', 'Library', 'Serialization', 'State Management'],
    links: [
      { type: 'code', url: 'https://github.com/username/context-manager', text: 'Github', githubRepo: 'username/context-manager' },
    ],
    layout: 'reverse',
  },

  // === AI/LOGIC ENGINES ===
  {
    id: SLIDE_IDS.LOGATE,
    name: 'Logate',
    title: 'Logate',
    preview: logatePreview,
    position: { x: -600, y: -800, z: 1600, rotateY: 240 },
    description:
        'A logic inference engine that derives new premises from existing ones - input premises and discover logical conclusions',
    tech: ['Logic', 'Inference Engine', 'AI', 'Reasoning'],
    links: [
      { type: 'demo', url: 'https://logate.example.com', text: 'Try It' },
      { type: 'code', url: 'https://github.com/username/logate', text: 'Github', githubRepo: 'username/logate' },
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
    id: SLIDE_IDS.AACP_V2,
    name: 'AACP v2',
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
    id: SLIDE_IDS.AESP,
    name: 'AESP',
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