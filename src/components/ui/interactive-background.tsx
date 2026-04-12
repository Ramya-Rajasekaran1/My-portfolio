"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

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
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const particlesRef = React.useRef<SphereParticle[]>([]);
    const animationRef = React.useRef<number | undefined>(undefined);
    const timeRef = React.useRef(0);
    const sphereCenterRef = React.useRef({ x: 80, y: 50 });
    const lastFrameTime = React.useRef(0);

    // Refs for gradient elements to update without re-renders
    const purpleRef = React.useRef<HTMLDivElement>(null);
    const amberRef = React.useRef<HTMLDivElement>(null);
    const blueRef = React.useRef<HTMLDivElement>(null);

    // Initialize particles once
    React.useEffect(() => {
        const particles: SphereParticle[] = [];
        const goldenRatio = (1 + Math.sqrt(5)) / 2;

        for (let i = 0; i < SPHERE_CONFIG.particleCount; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / SPHERE_CONFIG.particleCount);
            const theta = 2 * Math.PI * i / goldenRatio;

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

    // Mouse tracking
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current = { 
                x: (e.clientX / window.innerWidth) * 100, 
                y: (e.clientY / window.innerHeight) * 100 
            };
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Draw and Animate
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', updateCanvasSize);
        updateCanvasSize();

        const animate = (currentTime: number) => {
            if (currentTime - lastFrameTime.current < (1000 / SPHERE_CONFIG.targetFPS)) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime.current = currentTime;
            timeRef.current += 0.01;
            const time = timeRef.current;
            const mouse = mousePositionRef.current;
            
            // Update gradient positions directly via DOM refs to avoid React re-renders
            if (!hideGradients) {
                if (purpleRef.current) {
                    purpleRef.current.style.left = `${mouse.x + Math.sin(time * 0.3) * 10}%`;
                    purpleRef.current.style.top = `${mouse.y + Math.cos(time * 0.4) * 10}%`;
                }
                if (amberRef.current) {
                    amberRef.current.style.left = `${mouse.x + Math.sin(time * 0.2) * 25}%`;
                    amberRef.current.style.top = `${mouse.y + Math.cos(time * 0.25) * 25}%`;
                }
                if (blueRef.current) {
                    blueRef.current.style.left = `${(100 - mouse.x) * 0.8 + 10 + Math.cos(time * 0.25) * 15}%`;
                    blueRef.current.style.top = `${(100 - mouse.y) * 0.8 + 10 + Math.sin(time * 0.3) * 15}%`;
                }
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (!hideSphere) {
                const minDim = Math.min(canvas.width, canvas.height);
                const baseRadius = (minDim * 0.75) / 2;
                const oscillation = Math.sin(time * SPHERE_CONFIG.oscillation.speed) * SPHERE_CONFIG.oscillation.amplitude;
                const radius = baseRadius * (1 + oscillation);
                
                ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#d8b4fe' : '#a855f7';

                particlesRef.current.forEach(p => {
                    const rotatedTheta = p.theta + time * SPHERE_CONFIG.rotationSpeed;
                    const x3d = radius * Math.sin(p.phi) * Math.cos(rotatedTheta);
                    const y3d = radius * Math.cos(p.phi);
                    const z3d = radius * Math.sin(p.phi) * Math.sin(rotatedTheta);

                    const x = (canvas.width * sphereCenterRef.current.x / 100) + x3d;
                    const y = (canvas.height * sphereCenterRef.current.y / 100) + y3d;
                    const depth = (z3d + radius) / (radius * 2);
                    
                    ctx.globalAlpha = p.opacity * (0.4 + depth * 0.6);
                    ctx.beginPath();
                    ctx.arc(x, y, p.size * (0.7 + depth * 0.3), 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [hideSphere, hideGradients]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {!hideGradients && (
                <>
                <div
                    ref={purpleRef}
                    className="absolute rounded-full bg-gradient-to-r from-purple-500/35 to-pink-500/35 blur-[120px] transition-transform duration-1000 ease-out will-change-transform"
                    style={{
                        width: `${SPHERE_CONFIG.gradients.purple.size}px`,
                        height: `${SPHERE_CONFIG.gradients.purple.size}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
                <div
                    ref={amberRef}
                    className="absolute rounded-full bg-gradient-to-r from-amber-500/15 to-yellow-500/10 blur-[140px] transition-transform duration-[2000ms] ease-out will-change-transform"
                    style={{
                        width: `${SPHERE_CONFIG.gradients.amber.size}px`,
                        height: `${SPHERE_CONFIG.gradients.amber.size}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
                <div
                    ref={blueRef}
                    className="absolute rounded-full bg-gradient-to-r from-cyan-400/25 to-blue-500/25 blur-[120px] transition-transform duration-1000 ease-out will-change-transform"
                    style={{
                        width: `${SPHERE_CONFIG.gradients.blue.size}px`,
                        height: `${SPHERE_CONFIG.gradients.blue.size}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
                </>
            )}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
});
