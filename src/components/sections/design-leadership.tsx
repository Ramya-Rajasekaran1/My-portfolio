"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Users, Award, X, MapPin, Calendar, Play, ArrowRight } from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  location: string;
  date: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: "bits-stage", type: "image", src: "/images/untitled folder/FC5AA75A-F4E6-42EE-BE82-93A40CAD0B72.JPG", title: "Supply Chain Talk", location: "BITS Pilani", date: "May 2022", category: "Speaking" },
  { id: "indiahci-2022-frame", type: "image", src: "/images/untitled folder/6C165B99-D425-4DE1-BB5E-2FC08B680B9D.JPG", title: "IndiaHCI 2022", location: "BITS Hyderabad", date: "Nov 2022", category: "Speaking" },
  { id: "indiahci-banner", type: "image", src: "/images/untitled folder/BA5F20C7-B944-44AA-A7EF-4543EDF3B36F.JPG", title: "Experimental HCI", location: "IndiaHCI '22", date: "Nov 2022", category: "Speaking" },
  { id: "keynote-video", type: "video", src: "/images/untitled folder/97D84054-555D-4EC6-A756-4AB511568DC3.MP4", title: "Scaling Systems", location: "DesignConf", date: "Apr 2024", category: "Speaking" },
  { id: "community-talk", type: "image", src: "/images/untitled folder/0c9cfc13-4e6a-4b76-ac91-542d4a50c761.jpg", title: "Global Community", location: "Virtual Stage", date: "Mar 2024", category: "Speaking" },
  { id: "strategy-talk", type: "image", src: "/images/untitled folder/6623beb2348122000855e532_1713618610056.JPG", title: "UX Strategy", location: "Product Summit", date: "Jun 2023", category: "Speaking" },
  { id: "strategy-board", type: "image", src: "/images/untitled folder/CC423C12-E0DD-4880-8184-0E3C6DF52624.JPG", title: "Systems Mapping", location: "Zeta HQ", date: "Sep 2023", category: "Leadership" },
  { id: "hq-campus", type: "image", src: "/images/untitled folder/78B30DBB-A0E1-4DE2-948F-6F133CB1DC15.JPG", title: "Lead Workshop", location: "Global HQ", date: "Jan 2024", category: "Leadership" },
  { id: "vip-presentation", type: "image", src: "/images/untitled folder/025021CB-F3EE-4AA2-9A91-394FE35C2804.JPG", title: "Product Strategy", location: "Innovation Hub", date: "Aug 2023", category: "Leadership" },
  { id: "boeing-group-photo", type: "image", src: "/images/untitled folder/C3EDEE2F-D8F6-4AA6-8A96-A3730B03BC62.JPG", title: "Boeing Design Team", location: "Boeing India", date: "Oct 2023", category: "Leadership" },
  { id: "boeing-group", type: "image", src: "/images/untitled folder/EA2CCFB0-065B-405A-A048-1E82057FFCFB.JPG", title: "Product Design Team", location: "Boeing India", date: "Oct 2023", category: "Leadership" },
  { id: "wide-presentation", type: "image", src: "/images/untitled folder/3c32c8dc-64b7-420f-a090-c95dc27f85a0.jpg", title: "Keynote Strategy", location: "Main Stage", date: "Mar 2024", category: "Leadership" },
  { id: "leadership-session", type: "image", src: "/images/untitled folder/fc454203-8762-4aa5-8b12-baa72051e835.jpg", title: "Leadership Workshop", location: "Corporate", date: "Dec 2023", category: "Leadership" },
  { id: "office-curiosity", type: "image", src: "/images/untitled folder/IMG-20220518-WA0070.jpg", title: "Culture of Curiosity", location: "Design Studio", date: "May 2022", category: "Leadership" },
  { id: "madrasters-stairs", type: "image", src: "/images/untitled folder/80A40B55-8E70-4BE0-8DA5-D745B97F08B4.JPG", title: "Madrasters Community", location: "Global Venue", date: "Jan 2024", category: "Community" },
  { id: "madrasters-group", type: "image", src: "/images/untitled folder/IMG-20220518-WA0051.jpg", title: "Community Meetup", location: "Madrasters HQ", date: "May 2022", category: "Community" },
  { id: "design-workshop-mad", type: "image", src: "/images/untitled folder/C989349B-3F02-4CF0-B091-49CFFE74750B.JPG", title: "Design Workshop", location: "Madrasters HQ", date: "Dec 2023", category: "Community" },
  { id: "inclusive-meeting", type: "image", src: "/images/untitled folder/DA9BBFA5-0D5C-47E9-936D-BED51BB35294.PNG", title: "One Team Research", location: "Zeta HQ", date: "Sep 2023", category: "Community" },
  { id: "bits-group", type: "image", src: "/images/untitled folder/6E628256-E245-45D6-82E8-27D4669AC450.JPG", title: "Guest Lecture", location: "BITS Pilani", date: "May 2022", category: "Mentorship" },
  { id: "mentorship-circle", type: "image", src: "/images/untitled folder/bc6bbef4-1e89-44a7-987e-84d04c1129f5.jpg", title: "Mentorship", location: "ADPList", date: "Jan 2024", category: "Mentorship" },
  { id: "workshop-impact", type: "image", src: "/images/untitled folder/f8eee740-5374-4202-a235-6fb1964ba35c.jpg", title: "Interaction Design", location: "Innovation Lab", date: "Feb 2024", category: "Mentorship" },
  { id: "designmyx-collage", type: "image", src: "/images/untitled folder/InShot_20231203_144932996.jpg", title: "designMyx '23", location: "Zeta HQ", date: "Dec 2023", category: "Mentorship" },
  { id: "christ-award", type: "image", src: "/images/untitled folder/6A61DCE3-C96F-4E66-963D-26FD6AB98AC4.JPG", title: "Robo Sangham Award", location: "Christ University", date: "Mar 2023", category: "Mentorship" },
];

const THEMES = [
  { id: "Speaking", label: "Speaking & Conferences", description: "Keynotes, panels, and academic talks across HCI, design, and supply chain.", stat: "20+ Talks" },
  { id: "Leadership", label: "Design Leadership", description: "Leading cross-functional teams at Boeing, Zeta, FourKites and beyond.", stat: "4+ Orgs" },
  { id: "Community", label: "Community Building", description: "Growing design culture through Madrasters, workshops, and open events.", stat: "10k+ Designers" },
  { id: "Mentorship", label: "Mentorship & Teaching", description: "Mentoring on ADPList, guest lectures, designMyx and academic workshops.", stat: "500+ Mentees" },
];

export function DesignLeadership() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const themeItems = (themeId: string) => galleryItems.filter(i => i.category === themeId);
  const activeThemeData = THEMES.find(t => t.id === activeTheme);

  return (
    <section className="py-20 bg-white/60 backdrop-blur-md dark:bg-black overflow-hidden border-t border-neutral-200 dark:border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4"
            >
              <Mic2 className="w-2.5 h-2.5" /> Impact
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-[0.9] mb-3"
            >
              Design Leadership <span className="text-neutral-500 dark:text-neutral-600 font-serif italic font-light">&amp; Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-neutral-500 text-sm leading-relaxed"
            >
              Four chapters of work — click any to explore the full story.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex items-center gap-6 border-l border-white/10 pl-6"
          >
            {[["20+", "Talks"], ["10k+", "Designers"], ["500+", "Mentees"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-black text-neutral-900 dark:text-white leading-none mb-1">{n}</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── 4 Bento Theme Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {THEMES.map((theme, index) => {
            const items = themeItems(theme.id);
            // Pick up to 4 images for the bento grid inside the card
            const [hero, a, b, c] = items;
            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                onClick={() => setActiveTheme(theme.id)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-neutral-950 border border-white/8 hover:border-white/20 transition-all duration-300"
              >
                {/* Image bento grid — fills card */}
                <div className="grid grid-cols-2 grid-rows-2 gap-0.5 h-64">
                  {/* Hero cell — spans full left column */}
                  <div className="row-span-2 relative overflow-hidden">
                    {hero && (
                      <img
                        src={hero.src}
                        alt={hero.title}
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                      />
                    )}
                  </div>
                  {/* Top-right cell */}
                  <div className="relative overflow-hidden">
                    {a && (
                      <img
                        src={a.src}
                        alt={a.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700"
                      />
                    )}
                  </div>
                  {/* Bottom-right cell */}
                  <div className="relative overflow-hidden">
                    {b && (
                      <>
                        <img
                          src={b.src}
                          alt={b.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700"
                        />
                        {/* "+N more" badge */}
                        {items.length > 3 && (
                          <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                            <span className="text-white text-sm font-black tracking-tight">+{items.length - 3} more</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                {/* Label + CTA pinned to bottom */}
                <div className="absolute bottom-0 inset-x-0 px-5 py-5 flex items-end justify-between">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-1">{theme.stat}</div>
                    <h3 className="text-base font-black text-white leading-tight group-hover:text-neutral-100">{theme.label}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-300 group-hover:text-white bg-white/8 hover:bg-white/15 border border-white/10 px-3 py-1.5 rounded-full transition-all">
                    View more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-8 border-t border-neutral-200 dark:border-white/5 pt-8"
        >
          <div className="flex items-center gap-3 text-neutral-500 text-[9px] font-bold uppercase tracking-[0.2em]">
            <Users className="w-3 h-3" /><span>500+ Mentees</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-500 text-[9px] font-bold uppercase tracking-[0.2em]">
            <Award className="w-3 h-3" /><span>IEEE &amp; IndiaHCI Speaker</span>
          </div>
        </motion.div>
      </div>

      {/* ── Theme Full-Screen Modal ── */}
      <AnimatePresence>
        {activeTheme && activeThemeData && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/98 backdrop-blur-xl overflow-y-auto"
          >
            {/* Sticky toolbar */}
            <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-white/8 px-8 py-5 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1">{activeThemeData.stat}</div>
                <h3 className="text-xl font-black text-white">{activeThemeData.label}</h3>
              </div>
              <button
                onClick={() => setActiveTheme(null)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-8 pt-6 pb-2 max-w-5xl mx-auto">
              <p className="text-neutral-500 text-sm leading-relaxed">{activeThemeData.description}</p>
            </div>

            {/* Grid */}
            <div className="px-8 py-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {themeItems(activeTheme).map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                    onClick={() => setLightboxItem(item)}
                    className="group relative cursor-pointer rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all aspect-[4/3]"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src} alt={item.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          muted loop
                          onMouseOver={e => (e.target as HTMLVideoElement).play()}
                          onMouseOut={e => (e.target as HTMLVideoElement).pause()}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                            <Play className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <h4 className="text-[11px] font-bold text-white uppercase tracking-wide opacity-80 group-hover:opacity-100">{item.title}</h4>
                      <p className="text-[9px] text-neutral-500 font-mono flex items-center gap-2 mt-0.5">
                        <MapPin className="w-2.5 h-2.5" /> {item.location}
                        <Calendar className="w-2.5 h-2.5 ml-1" /> {item.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-6"
            onClick={() => setLightboxItem(null)}
          >
            <button className="absolute top-8 right-8 text-neutral-500 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.97, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {lightboxItem.type === "image" ? (
                <img src={lightboxItem.src} alt={lightboxItem.title} className="w-full h-full object-contain" />
              ) : (
                <video src={lightboxItem.src} className="w-full h-full object-contain" controls autoPlay />
              )}
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest mb-2">{lightboxItem.category}</p>
                <h4 className="text-xl font-bold text-white mb-1">{lightboxItem.title}</h4>
                <p className="text-neutral-500 text-[11px] flex items-center gap-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {lightboxItem.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {lightboxItem.date}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
