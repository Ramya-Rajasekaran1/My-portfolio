export type Exploration = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  slug: string;
  tags: string[];
  stack: string[];
  externalUrl?: string;
};

export const drawingToRealityExploration: Exploration = {
  id: 1,
  title: 'Drawing to Reality',
  subtitle: 'A goddess steps out of the canvas',
  description:
    'An interactive scroll experience where a divine portrait emerges from depth, with live fire burning on the third eye — built from original artwork and video.',
  coverImage: '/images/explorations/drawing-to-reality-cover.png',
  slug: 'drawing-to-reality',
  tags: ['Three.js', 'Creative Tech', 'Scroll Interaction'],
  stack: ['Vite', 'Three.js', 'WebGL', 'Video Texture'],
};

export const robotTurntableExploration: Exploration = {
  id: 2,
  title: 'AI Cal Lab',
  subtitle: '',
  description:
    'An interactive, scroll-driven 3D turntable experience displaying the CAL-3 Tripod calibrator robot, featuring GPU-accelerated real-time sharpening filters and responsive HUD gauges.',
  coverImage: '/images/explorations/robot-turntable-cover.jpg',
  slug: 'robot-turntable',
  tags: ['Vite', 'Creative Tech', 'Scroll Interaction'],
  stack: ['Vite', 'Vanilla CSS', 'Scroll Scrubbing', 'SVG Convolve'],
};

export const resilienceInteractiveExploration: Exploration = {
  id: 3,
  title: 'Resilience Interactive',
  subtitle: 'Cinematic Interactive Portfolio',
  description:
    'An immersive cinematic portfolio presenting interactive human-AI interfaces, digital systems, and rich visual motion experiences.',
  coverImage: '/images/explorations/resilience-interactive-cover.png',
  slug: 'resilience-interactive',
  tags: ['Next.js', 'Creative Tech', 'Cinematic UI'],
  stack: ['Next.js', 'Framer Motion', 'Vanilla CSS', 'WebGL'],
  externalUrl: 'https://resilienceinteractive.netlify.app',
};

export const calAiRobotExploration: Exploration = {
  id: 4,
  title: 'Cal AI Robot',
  subtitle: 'Interactive Cybernetic Interface',
  description:
    'An interactive web interface featuring a high-fidelity cybernetic robot design, real-time responsive HUD controls, and scroll-driven parameter exploration.',
  coverImage: '/images/explorations/cal-ai-robot-cover.png',
  slug: 'cal-ai-robot',
  tags: ['Three.js', 'Creative Tech', 'HUD Interface'],
  stack: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS'],
  externalUrl: 'https://calairobot.netlify.app',
};

export const explorations = [
  drawingToRealityExploration,
  robotTurntableExploration,
  resilienceInteractiveExploration,
  calAiRobotExploration,
];


