"use client";

import * as React from "react";

// ============================================
// CONFIGURATION - Easy to customize
// ============================================
const SPHERE_CONFIG = {
    // Particle settings
    particleCount: 250,              // Number of particles
    particleSize: { min: 1.5, max: 3 }, // Particle size range (px)
    particleOpacity: { min: 0.5, max: 0.95 }, // Brighter visible dots

    // Sphere size (percentage of smaller viewport dimension)
    sphereSize: {
        min: 60,  // Minimum size (60% of smaller dimension)
        max: 100, // Maximum size during oscillation (100% of smaller dimension)
    },

    // Oscillation (breathing effect)
    oscillation: {
        speed: 2.5,      // Speed of breathing (higher = faster)
        amplitude: 0.25,  // How much it breathes (0.25 = ±25% of base size)
    },

    // Rotation
    rotationSpeed: 0.8,  // Speed of sphere rotation

    // Cursor following
    cursorFollowSpeed: 0.03, // How fast sphere follows cursor (0.01 = slow, 0.1 = fast)

    // Performance
    targetFPS: 60,       // Target frame rate

    // Background gradients
    gradients: {
        purple: { opacity: 0.25, size: 500 },
        amber: { opacity: 0.22, size: 600 },
        blue: { opacity: 0.18, size: 600 },
    }
};

interface SphereParticle {
    id: number;
    theta: number;
    phi: number;
    size: number;
    opacity: number;
}

interface InteractiveBackgroundProps {
    hideSphere?: boolean;
    hideGradients?: boolean;
}

export const InteractiveBackground = React.memo(function InteractiveBackground({ 
    hideSphere = false, 
    hideGradients = false 
}: InteractiveBackgroundProps) {
    const mousePositionRef = React.useRef({ x: 50, y: 50 });
    const [tick, setTick] = React.useState(0); // Force render every frame
    const particlesRef = React.useRef<SphereParticle[]>([]);
    const animationRef = React.useRef<number | undefined>(undefined);
    const timeRef = React.useRef(0);
    const sphereCenterRef = React.useRef({ x: 80, y: 50 }); // Pinned to the right side
    const lastFrameTime = React.useRef(0);

    // Initialize particles once with Fibonacci sphere distribution
    React.useEffect(() => {
        const particles: SphereParticle[] = [];
        const goldenRatio = (1 + Math.sqrt(5)) / 2;

        for (let i = 0; i < SPHERE_CONFIG.particleCount; i++) {
            const theta = 2 * Math.PI * i / goldenRatio;
            const phi = Math.acos(1 - 2 * (i + 0.5) / SPHERE_CONFIG.particleCount);

            particles.push({
                id: i,
                theta,
                phi,
                size: SPHERE_CONFIG.particleSize.min +
                    Math.random() * (SPHERE_CONFIG.particleSize.max - SPHERE_CONFIG.particleSize.min),
                opacity: SPHERE_CONFIG.particleOpacity.min +
                    Math.random() * (SPHERE_CONFIG.particleOpacity.max - SPHERE_CONFIG.particleOpacity.min),
            });
        }

        particlesRef.current = particles;
    }, []);

    // Track mouse position (refs only, no re-renders)
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            mousePositionRef.current = { x, y };
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Main animation loop
    React.useEffect(() => {
        const frameInterval = 1000 / SPHERE_CONFIG.targetFPS;

        const animate = (currentTime: number) => {
            // Frame rate control
            if (currentTime - lastFrameTime.current < frameInterval) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            lastFrameTime.current = currentTime;
            timeRef.current += 0.016; // ~60fps time increment

            // Sphere center is now fixed as requested
            // sphereCenterRef.current.x += (mousePositionRef.current.x - sphereCenterRef.current.x) * SPHERE_CONFIG.cursorFollowSpeed;
            // sphereCenterRef.current.y += (mousePositionRef.current.y - sphereCenterRef.current.y) * SPHERE_CONFIG.cursorFollowSpeed;

            // Force re-render to animate particles
            setTick(prev => prev + 1);

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Memoized particle position calculation
    const getParticlePosition = React.useCallback((particle: SphereParticle) => {
        const time = timeRef.current;
        const center = sphereCenterRef.current;

        // Calculate base radius (75% of smaller viewport dimension for better visibility)
        const minDimension = typeof window !== 'undefined' ? Math.min(window.innerWidth, window.innerHeight) : 1000;
        const baseRadius = (minDimension * 0.75) / 2; // Increase base size slightly

        // Oscillation (breathing effect)
        const oscillation = Math.sin(time * SPHERE_CONFIG.oscillation.speed) * SPHERE_CONFIG.oscillation.amplitude;
        const currentRadius = baseRadius * (1 + oscillation);

        // Rotation
        const rotatedTheta = particle.theta + time * SPHERE_CONFIG.rotationSpeed;

        // Spherical to Cartesian conversion
        const x3d = currentRadius * Math.sin(particle.phi) * Math.cos(rotatedTheta);
        const y3d = currentRadius * Math.cos(particle.phi);
        const z3d = currentRadius * Math.sin(particle.phi) * Math.sin(rotatedTheta);

        // Convert pixel coordinates to viewport percentages
        const x = center.x + (x3d / (typeof window !== 'undefined' ? window.innerWidth : 1000)) * 100;
        const y = center.y + (y3d / (typeof window !== 'undefined' ? window.innerHeight : 1000)) * 100;

        // Depth for size/opacity variation
        const depth = (z3d + currentRadius) / (currentRadius * 2);

        return { x, y, depth };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="container mx-auto h-full relative">
                {/* Animated gradient orbs - Purple and Blue */}
                {!hideGradients && (
                    <>
                    <div
                        className="absolute rounded-full bg-gradient-to-r from-purple-500/35 to-pink-500/35 blur-3xl transition-transform duration-1000 ease-out will-change-transform"
                        style={{
                            width: `${SPHERE_CONFIG.gradients.purple.size}px`,
                            height: `${SPHERE_CONFIG.gradients.purple.size}px`,
                            left: `${mousePositionRef.current.x + Math.sin(timeRef.current * 0.3) * 10}%`,
                            top: `${mousePositionRef.current.y + Math.cos(timeRef.current * 0.4) * 10}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                    <div
                        className="absolute rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/20 blur-3xl transition-transform duration-[2000ms] ease-out will-change-transform"
                        style={{
                            width: `${SPHERE_CONFIG.gradients.amber.size}px`,
                            height: `${SPHERE_CONFIG.gradients.amber.size}px`,
                            left: `${mousePositionRef.current.x + Math.sin(timeRef.current * 0.2) * 25}%`,
                            top: `${mousePositionRef.current.y + Math.cos(timeRef.current * 0.25) * 25}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                    <div
                        className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl transition-transform duration-1500 ease-out will-change-transform"
                        style={{
                            width: `${SPHERE_CONFIG.gradients.blue.size}px`,
                            height: `${SPHERE_CONFIG.gradients.blue.size}px`,
                            left: `${100 - mousePositionRef.current.x + Math.cos(timeRef.current * 0.25) * 8}%`,
                            top: `${100 - mousePositionRef.current.y + Math.sin(timeRef.current * 0.35) * 8}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                    </>
                )}

                {/* Optimized Particle Sphere */}
                {!hideSphere && (
                    <svg className="absolute inset-0 w-full h-full">
                        {particlesRef.current.map((particle) => {
                            const pos = getParticlePosition(particle);

                            // Depth-based rendering
                            const depthOpacity = particle.opacity * (0.4 + pos.depth * 0.6);
                            const depthSize = particle.size * (0.7 + pos.depth * 0.3);

                            return (
                                <circle
                                    key={particle.id}
                                    cx={`${pos.x}%`}
                                    cy={`${pos.y}%`}
                                    r={depthSize}
                                    fill="currentColor"
                                    className="text-purple-400/80 dark:text-purple-300/60"
                                    opacity={depthOpacity}
                                />
                            );
                        })}
                    </svg>
                )}
            </div>
        </div>
    );
});
