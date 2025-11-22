export const SLIDE_IDS = {
  TITLE: 'title',
  // Avi Ecosystem
  AVI_CORE: 'avi-core',
  AVI_NLU: 'avi-nlu',
  AVI_ENCLOSURE: 'avi-enclosure',
  AVI_STUDIO: 'avi-studio',
  AVI_DOCS: 'avi-docs',
  AECP_V2: 'AECP-v2',
  // Alex (Archived)
  ALEX: 'alex',
  ALEX_INTENT_EDITOR: 'alex-intent-editor',
  ALEX_DASHBOARD: 'alex-dashboard',
  // Protocols
  AECP: 'AECP',
  // Web Applications
  EBF_CLIENT: 'ebf-client',
  FINALIST_HUB: 'finalist-hub',
  SOCIAL_WAVE: 'social-wave',
  // Productivity
  DEEP_THOUGHTS: 'deep-thoughts',
  // Libraries
  PROMISE: 'promise',
  CONTEXT_MANAGER: 'context-manager',
  // AI/Logic
  LOGATE: 'logate',
  OVERVIEW: 'overview',
} as const;

export type SlideId = (typeof SLIDE_IDS)[keyof typeof SLIDE_IDS];

export const SLIDE_POSITIONS = {
  TITLE: { x: 0, y: 0, z: 0 },
  OVERVIEW: { x: 0, y: 0, z: 0, scale: 4.5 },
} as const;
