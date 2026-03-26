"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Play, Tag as TagIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  location: string;
  date: string;
  category: "Leadership" | "Community" | "DesignTeam";
  note?: string;
  tags: string[];
  col?: 1 | 2 | 3; // Optional manual column assignment
}

const galleryItems: GalleryItem[] = [
  // Leadership talks (1st Category) - Ordered: Talk on Accessibility then IEEE
  { id: "keynote-video", type: "video", src: "/images/leadership/97D84054-555D-4EC6-A756-4AB511568DC3.MP4", title: "Leadership Connect on UX at Boeing", location: "DesignConf", date: "Apr 2024", category: "Leadership", note: "Leadership Connect on UX at Boeing", tags: ["Design Systems", "Talk"] },
  { id: "community-talk", type: "image", src: "/images/leadership/0c9cfc13-4e6a-4b76-ac91-542d4a50c761.jpg", title: "Talk on Accessibility", location: "Virtual Stage", date: "Mar 2024", category: "Leadership", note: "Talk on Accessibility", tags: ["Virtual", "Communication"] },
  { id: "bits-stage", type: "image", src: "/images/leadership/FC5AA75A-F4E6-42EE-BE82-93A40CAD0B72.JPG", title: "IEEE Published Paper", location: "BITS Pilani", date: "May 2022", category: "Leadership", note: "IEEE Published Paper", tags: ["Keynote", "Supply Chain"] },
  { id: "vip-presentation", type: "image", src: "/images/leadership/025021CB-F3EE-4AA2-9A91-394FE35C2804.JPG", title: "Talk on Accessibility", location: "Innovation Hub", date: "Aug 2023", category: "Leadership", note: "Talk on Accessibility", tags: ["Strategy", "Stakeholders"] },
  { id: "christ-award", type: "image", src: "/images/leadership/6A61DCE3-C96F-4E66-963D-26FD6AB98AC4.JPG", title: "IEEE Published Paper", location: "Christ University", date: "Mar 2023", category: "Leadership", note: "IEEE Published Paper", tags: ["Award", "Education"] },
  
  // Community (2nd Category)
  // Col 1: Core Committee + IndiaHCI 2022
  { id: "madrasters-stairs", type: "image", src: "/images/leadership/80A40B55-8E70-4BE0-8DA5-D745B97F08B4.JPG", title: "Core Committee Member", location: "Global Venue", date: "Jan 2024", category: "Community", note: "Core Committee Member", tags: ["Madrasters", "Culture"], col: 1 },
  { id: "indiahci-2022-frame", type: "image", src: "/images/leadership/6C165B99-D425-4DE1-BB5E-2FC08B680B9D.JPG", title: "IndiaHCI 2022", location: "BITS Hyderabad", date: "Nov 2022", category: "Community", note: "India HCI Presentation", tags: ["Academic", "HCI"], col: 1 },
  // Col 2: Giving Back + Design Community
  { id: "mentorship-circle", type: "image", src: "/images/leadership/bc6bbef4-1e89-44a7-987e-84d04c1129f5.jpg", title: "Mentorship", location: "ADPList", date: "Jan 2024", category: "Community", note: "Giving Back", tags: ["ADPList", "Mentorship"], col: 2 },
  { id: "strategy-talk", type: "image", src: "/images/leadership/6623beb2348122000855e532_1713618610056.JPG", title: "Design Community", location: "Product Summit", date: "Jun 2023", category: "Community", note: "Design Community", tags: ["Product Strategy", "Leadership"], col: 2 },
  // Col 3: Events and Talks + India HCI Banner
  { id: "designmyx-collage", type: "image", src: "/images/leadership/InShot_20231203_144932996.jpg", title: "Events and Talks", location: "Zeta HQ", date: "Dec 2023", category: "Community", note: "Events and Talks", tags: ["Event", "Mentorship"], col: 3 },
  { id: "indiahci-banner", type: "image", src: "/images/leadership/BA5F20C7-B944-44AA-A7EF-4543EDF3B36F.JPG", title: "India HCI Presentation", location: "IndiaHCI '22", date: "Nov 2022", category: "Community", note: "India HCI Presentation", tags: ["Research", "Academic"], col: 3 },

  // Design Team (3rd Category)
  // Col 1: Design Fam
  { id: "madrasters-group", type: "image", src: "/images/leadership/IMG-20220518-WA0051.jpg", title: "Design Fam", location: "Madrasters HQ", date: "May 2022", category: "DesignTeam", note: "Design Fam", tags: ["Meetup", "Regional"], col: 1 },
  // Col 2: Team Boeing + Whiteboarding Days
  { id: "boeing-group-photo", type: "image", src: "/images/leadership/C3EDEE2F-D8F6-4AA6-8A96-A3730B03BC62.JPG", title: "Boeing Design Team", location: "Boeing India", date: "Oct 2023", category: "DesignTeam", note: "Team Boeing!", tags: ["Aviation", "Team"], col: 2 },
  { id: "strategy-board", type: "image", src: "/images/leadership/CC423C12-E0DD-4880-8184-0E3C6DF52624.JPG", title: "Systems Mapping", location: "Zeta HQ", date: "Sep 2023", category: "DesignTeam", note: "Whiteboarding Days", tags: ["Systems Design", "Workshop"], col: 2 },
  // Col 3: Leading at HQ
  { id: "hq-campus", type: "image", src: "/images/leadership/78B30DBB-A0E1-4DE2-948F-6F133CB1DC15.JPG", title: "Leading at HQ", location: "Global HQ", date: "Jan 2024", category: "DesignTeam", note: "Leading at HQ", tags: ["Enterprise", "Internal"], col: 3 },
];

const CATEGORIES = [
  { id: "Leadership", label: "Design Leadership" },
  { id: "Community", label: "Community" },
  { id: "DesignTeam", label: "Design Team" },
];

export function DesignLeadership() {
  const [filter, setFilter] = useState("Leadership");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => item.category === filter);
  }, [filter]);

  // Split items into 3 columns — uses explicit col assignment if present, otherwise round-robin
  const columnItems = useMemo(() => {
    const col1: GalleryItem[] = [];
    const col2: GalleryItem[] = [];
    const col3: GalleryItem[] = [];

    filteredItems.forEach((item, index) => {
      if (item.col === 1) col1.push(item);
      else if (item.col === 2) col2.push(item);
      else if (item.col === 3) col3.push(item);
      else {
        // Fallback: round-robin for items without an explicit column
        if (index % 3 === 0) col1.push(item);
        else if (index % 3 === 1) col2.push(item);
        else col3.push(item);
      }
    });

    return [col1, col2, col3];
  }, [filteredItems]);

  return (
    <section className="py-24 bg-neutral-50/50 dark:bg-canvas overflow-hidden border-t border-neutral-200 dark:border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ── Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-[0.05em] text-neutral-900 dark:text-ivory leading-none">
                    Design Leadership
                </h2>
                <p className="text-neutral-600 dark:text-parchment text-base md:text-lg font-light leading-relaxed">
                    A visual archive of strategic product thinking, community engagement, and thought leadership workshops.
                </p>
            </div>

            {/* Category Filter Tags */}
            <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={cn(
                            "px-3 py-1.5 rounded-full text-[12px] font-black tracking-widest transition-all duration-300 border flex-shrink-0 uppercase",
                            filter === cat.id
                                ? "bg-blush/30 border-blush/40 text-blush-text dark:bg-blush dark:border-blush dark:text-blush-text shadow-md shadow-blush/20"
                                : "bg-white dark:bg-card border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-ivory hover:border-blush/50"
                        )}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>

        {/* ── Re-engineered Stable Masonry Gallery ── */}
        <div className="flex flex-col md:flex-row gap-6 items-start pt-4 min-h-[600px]">
            {columnItems.map((column, colIdx) => (
                <div key={colIdx} className="flex-1 flex flex-col gap-6 w-full">
                    <AnimatePresence mode="popLayout">
                        {column.map((item, i) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                onClick={() => setLightboxItem(item)}
                                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-card border border-neutral-100 dark:border-white/5 hover:border-blush/40 animate-in fade-in zoom-in duration-500 hover:shadow-2xl transition-all"
                                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                            >
                                {item.type === "image" ? (
                                <img
                                    src={item.src} alt={item.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                ) : (
                                <div className="relative w-full aspect-video bg-neutral-950/20 dark:bg-canvas rounded-xl overflow-hidden">
                                    <video 
                                        src={item.src} 
                                        className="w-full h-full object-cover" 
                                        muted 
                                        loop 
                                        playsInline
                                        preload="metadata"
                                        aria-label={`${item.note || item.title} - ${item.location}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <Play className="w-6 h-6 text-white translate-x-0.5" />
                                        </div>
                                    </div>
                                </div>
                                )}

                                {/* Note / Tag */}
                                <div className="absolute top-4 left-4 z-20 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110">
                                    <div className="relative px-3 py-1.5 bg-black dark:bg-canvas shadow-md transform -rotate-2 border-l-2 border-blush">
                                        <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-6 h-3 bg-white/20 block backdrop-blur-sm pointer-events-none" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }} />
                                        <span className="font-caveat text-sm text-white tracking-tight leading-none whitespace-nowrap">
                                            {item.note || item.title}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Overlay with Tags */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end">
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[12px] font-black text-white uppercase tracking-widest">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>

      {/* Lightbox for Images */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4"
            onClick={() => setLightboxItem(null)}
          >
            <button 
                onClick={(e) => { e.stopPropagation(); setLightboxItem(null); }}
                className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[120]"
                aria-label="Close image viewer"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              {lightboxItem.type === "image" ? (
                <img src={lightboxItem.src} alt={lightboxItem.title} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
              ) : (
                <video src={lightboxItem.src} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" controls autoPlay />
              )}
              <div className="mt-8 text-center bg-black/60 backdrop-blur-xl px-10 py-8 rounded-[2rem] border border-white/10 shadow-3xl">
                <span className="font-caveat text-3xl text-purple-200 mb-2 block tracking-wide italic leading-none">
                    &ldquo;{lightboxItem.note || lightboxItem.title}&rdquo;
                </span>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {lightboxItem.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/20 text-white border border-white/30 rounded-full text-[12px] font-black uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-neutral-400 text-sm font-light flex items-center justify-center gap-6 mt-3">
                  <span className="flex items-center gap-2 font-outfit uppercase tracking-[0.2em] text-[10px]"><TagIcon className="w-4 h-4 text-white/50" /> {lightboxItem.location}</span>
                  <span className="flex items-center gap-2 font-outfit uppercase tracking-[0.2em] text-[10px]"><Calendar className="w-4 h-4 text-white/50" /> {lightboxItem.date}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
