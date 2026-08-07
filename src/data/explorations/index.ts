export type Exploration = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  slug: string;
  tags: string[];
  stack: string[];
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

export const explorations = [drawingToRealityExploration, robotTurntableExploration];
