"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/sections/hero";
import { PhilosophyQuote } from "@/components/sections/philosophy-quote";
import { ProcessFlow } from "@/components/sections/process-flow";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { DesignLeadership } from "@/components/sections/design-leadership";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "philosophy", label: "Philosophy" },
  { id: "process", label: "Process" },
  { id: "work", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "testimonials", label: "Testimonials" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to establish correct initial active item
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Global Vertical Left Dotted Navigation (Visible on Desktop only) */}
      <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-5 py-6 px-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-neutral-200/30 dark:border-white/5 shadow-md">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="group relative flex items-center justify-center w-4 h-4 cursor-pointer focus:outline-none"
              aria-label={`Scroll to ${section.label}`}
            >
              {/* Outer Pulsing Indicator Ring */}
              <span 
                className={cn(
                  "absolute inset-0 rounded-full border transition-all duration-300 scale-50 opacity-0",
                  isActive 
                    ? "border-blush scale-100 opacity-100 shadow-[0_0_8px_rgba(249,115,22,0.4)]" 
                    : "border-neutral-300 dark:border-neutral-700 group-hover:scale-75 group-hover:opacity-40"
                )}
              />
              {/* Inner Solid Dot */}
              <span 
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300 z-10",
                  isActive 
                    ? "bg-blush" 
                    : "bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500"
                )}
              />
              
              {/* Elegant Text Tooltip on Right Side */}
              <span 
                className="absolute left-7 opacity-0 pointer-events-none translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[10px] font-bold font-outfit uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-455 bg-white/95 dark:bg-black/95 px-3 py-1.5 rounded-full border border-neutral-200/50 dark:border-white/10 shadow-sm whitespace-nowrap"
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Page Sections wrapped in anchors */}
      <div id="hero">
        <Hero />
      </div>
      <div id="philosophy">
        <PhilosophyQuote />
      </div>
      <div id="process">
        <ProcessFlow />
      </div>
      <div id="work">
        <FeaturedProjects />
      </div>
      <div id="leadership">
        <DesignLeadership />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
    </main>
  );
}
