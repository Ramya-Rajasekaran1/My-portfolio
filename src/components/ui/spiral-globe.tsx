"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

interface Point {
    x: number;
    y: number;
    z: number;
    baseOpacity: number;
}

export function SpiralGlobe() {
    const [mounted, setMounted] = useState(false);
    const [tick, setTick] = useState(0);
    const timeRef = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const points = useMemo(() => {
        const pts: Point[] = [];
        const count = 400;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = 12 * phi;

            pts.push({
                x: Math.cos(theta) * Math.sin(phi),
                y: Math.sin(theta) * Math.sin(phi),
                z: Math.cos(phi),
                baseOpacity: 0.6 + (i / count) * 0.4
            });
        }
        return pts;
    }, []);

    useEffect(() => {
        setMounted(true);
        let frameId: number;
        const animate = () => {
            timeRef.current += 0.008;
            setTick(prev => prev + 1);
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    if (!mounted) {
        return <div className="w-48 h-48 md:w-64 md:h-64 opacity-0" />;
    }

    return (
        <div ref={containerRef} className="w-48 h-48 md:w-64 md:h-64 relative perspective-1000 select-none pointer-events-none opacity-80 md:opacity-100">
            <svg className="w-full h-full overflow-visible">
                {points.map((pt, i) => {
                    const rotationSpeed = 0.5;
                    const cosTime = Math.cos(timeRef.current * rotationSpeed);
                    const sinTime = Math.sin(timeRef.current * rotationSpeed);

                    const rx = pt.x * cosTime - pt.z * sinTime;
                    const rz = pt.x * sinTime + pt.z * cosTime;

                    const scale = (rz + 2) / 3;
                    const x = rx * 80 * scale + 100;
                    const y = pt.y * 80 * scale + 100;
                    
                    const opacity = pt.baseOpacity * (0.5 + (rz + 1) / 2 * 0.5);
                    
                    const pointColor = i % 2 === 0 ? "text-purple-400" : "text-indigo-400";
                    const isExtraBright = i % 7 === 0;

                    return (
                        <motion.circle
                            key={i}
                            cx={`${x}%`}
                            cy={`${y}%`}
                            r={isExtraBright ? 1.8 * scale : 1.2 * scale}
                            fill="currentColor"
                            className={pointColor}
                            style={{ opacity }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
