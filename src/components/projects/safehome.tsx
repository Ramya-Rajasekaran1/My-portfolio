"use client";

import React from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function SafeHomeProject({ project }: { project: Project }) {
  return (
    <main className="bg-[var(--background)] min-h-screen text-black font-sans selection:bg-zinc-200">
      {/* Editorial Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference pb-4 pt-8 px-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <Link
            href="/work"
            className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Return to Archive
          </Link>
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 hidden md:block">
            Case Study • 01
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8 flex flex-col justify-end">
              <motion.div variants={fadeUp} className="mb-8">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400">Civic Tech & Public Safety</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tight mb-12">
                SafeHome.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-light">
                Redesigning earthquake and tsunami preparedness for the communities of San Francisco. Transforming fragmented data into accessible civic action.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col justify-end gap-8 pb-4">
              {[
                { label: "Role", value: "Design Director / UX Lead" },
                { label: "Team", value: "Engineering, Data, Product" },
                { label: "Duration", value: "3 Work Weeks" },
                { label: "Scope", value: "End-to-end Strategy & UI" },
              ].map((meta) => (
                <div key={meta.label} className="border-t border-black/10 pt-4">
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-1">{meta.label}</span>
                  <span className="block text-sm text-zinc-800">{meta.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image / Statement */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="w-full aspect-[21/9] bg-zinc-100 relative overflow-hidden flex items-center justify-center p-12 text-center"
          >
            <div className="absolute inset-0 bg-[url('/images/safehome/map.png')] bg-cover bg-center opacity-10 mix-blend-multiply grayscale"></div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-zinc-800 leading-tight max-w-4xl relative z-10 italic">
              "Knowing your risk is the first step to surviving it."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section: The Problem */}
      <section className="py-24 px-6 md:px-12 bg-zinc-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4 lg:col-start-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Chapter I • The Dilemma</span>
              <h3 className="font-serif text-4xl md:text-5xl leading-tight">
                A mission without direction.
              </h3>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 prose prose-zinc prose-lg flex items-center">
              <p className="text-zinc-600 font-light leading-relaxed m-0 text-lg md:text-xl">
                SafeHome was a data-rich portal that failed the trust test. Fragmented, inconsistent, and inaccessible—it left residents more worried than prepared. The product lacked a unified visual language or mobile experience, making it unusable during emergencies. Working with a volunteer team, the challenge was to create clarity where none existed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives Gallery */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Strategic Imperatives</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Three pillars for civic readiness.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {[
              { num: "01", title: "Actionable Data", text: "Decoding fragmented government earthquake data into a mobile-first experience for residents." },
              { num: "02", title: "Visual Cues", text: "Translating dense geoscience terminology into tiered actionable segments for high-stress use." },
              { num: "03", title: "Inclusive Access", text: "Closing the action gap by guiding renters and homeowners toward immediate readiness steps." },
            ].map((obj, i) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}
                className="group"
              >
                <div className="border-t border-black/10 pt-6">
                  <span className="text-xs text-zinc-400 mb-6 block">{obj.num}</span>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-zinc-500 transition-colors">{obj.title}</h3>
                  <p className="text-zinc-600 font-light leading-relaxed">{obj.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Analysis & Solution */}
      <section className="py-24 px-6 md:px-12 bg-white flex flex-col gap-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <img src="/images/safehome/visual-analysis.jpg" alt="Visual Analysis" className="w-full h-auto" />
              <div className="mt-4 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-zinc-400 border-b border-black/5 pb-2">
                <span>Fig 1.</span>
                <span>Ref: Hazard Overlays</span>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Chapter II • Strategy</span>
              <h3 className="font-serif text-4xl leading-tight mb-8">Decoding Complexity.</h3>
              <p className="text-zinc-600 font-light leading-relaxed text-lg mb-8">
                I conducted a comprehensive visual audit of government risk patterns. We transformed complex hazard data into a simplified mobile language that residents can easily navigate during crises. Official jargon like 'Liquefaction zones' was retained for compliance but softened with contextual tooltips and clear visual hierarchy.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="lg:pr-12">
              <h3 className="font-serif text-4xl leading-tight mb-8">The Color System.</h3>
              <p className="text-zinc-600 font-light leading-relaxed text-lg mb-12">
                Replacing uniform map markers with high-contrast accessibility tiers tied to immediate civic urgency. Users can instantly identify critical zones without deciphering technical legends.
              </p>

              <div className="flex gap-4 mb-8">
                {[
                  { label: "Critical", class: "bg-red-500", text: "text-white" },
                  { label: "Warning", class: "bg-orange-400", text: "text-white" },
                  { label: "Safe", class: "bg-emerald-500", text: "text-white" }
                ].map(tier => (
                  <div key={tier.label} className={`${tier.class} ${tier.text} px-4 py-2 text-[10px] tracking-[0.2em] uppercase`}>
                    {tier.label}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src="/images/safehome/color-initiative.jpg" alt="Color System UI" className="w-full h-auto" />
              <div className="mt-4 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-zinc-400 border-b border-black/5 pb-2">
                <span>Fig 2.</span>
                <span>Tiered Risk Interface</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Architecture Map - Redesigned cleanly */}
      <section className="py-32 px-6 md:px-12 bg-zinc-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Chapter III • Product Architecture</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Information architecture rooted in natural human behaviour.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-12 relative pb-12">
            {/* Thread line simulating connection */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-black/10 z-0"></div>

            {[
              {
                phase: "Pre-Event",
                subtitle: "Preparedness & Awareness",
                features: ["Go Bag Checklist", "State Resources", "Map Risk Scores", "Building Comparison", "Insurance Info"]
              },
              {
                phase: "During Event",
                subtitle: "Real-Time Safety",
                features: ["Offline Maps", "Live Updates", "Community Volunteers", "Push Alerts"]
              },
              {
                phase: "Recovery",
                subtitle: "Aftermath Support",
                features: ["Shelter Locations", "Hospitals", "Insurance Estimator", "Disability & Elderly Aid"]
              }
            ].map((node, i) => (
              <motion.div
                key={node.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="relative z-10 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-sm relative">
                  <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl mb-2">{node.phase}</h3>
                  <p className="text-sm text-zinc-500 mb-8 border-b border-black/5 pb-6">{node.subtitle}</p>

                  <ul className="space-y-4">
                    {node.features.map(feat => (
                      <li key={feat} className="text-zinc-600 font-light text-[15px] flex items-start gap-3 justify-center md:justify-start">
                        <ArrowRight className="w-4 h-4 text-zinc-300 flex-shrink-0 mt-[2px]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Image Gallery */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Chapter IV • Transformation</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Before & After.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group"
            >
              <div className="aspect-[4/3] bg-zinc-50 border border-black/5 flex items-center justify-center overflow-hidden mb-6 relative group-hover:bg-zinc-100 transition-colors">
                <img src="/images/safehome/web-side-2.jpg" alt="After Map" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Map & Risk Visualisation</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-4">From uniform map markers to a mobile-optimised tiered risk system.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[4/3] bg-zinc-50 border border-black/5 flex items-center justify-center overflow-hidden mb-6 relative group-hover:bg-zinc-100 transition-colors">
                <img src="/images/safehome/web-side-1.jpg" alt="After Resources" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Resource Navigation</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-4">From overwhelming lists of technical PDFs to a single-page dashboard with prioritized actions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes & Constraints */}
      <section className="py-32 px-6 md:px-12 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-6">Chapter V • Impact</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Outcomes delivered in just 3 weeks.</h2>
              <p className="text-zinc-400 font-light leading-relaxed text-lg mb-12">
                As UX Lead, I built the infrastructure from scratch, aligning a fractured volunteer team to deliver a premium civic product in record time.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { stat: "60%", label: "User Retention" },
                  { stat: "75%", label: "Mobile Traffic" },
                  { stat: "2x", label: "Project Velocity" },
                  { stat: "100%", label: "UX Adoption" },
                ].map(metric => (
                  <div key={metric.label}>
                    <div className="font-serif text-5xl mb-2">{metric.stat}</div>
                    <div className="text-[10px] uppercase tracking-[0.1em] text-zinc-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:pl-12 lg:border-l border-white/10">
              <h3 className="font-serif text-3xl leading-tight mb-12">Working through constraints</h3>
              <ul className="space-y-12">
                {[
                  { title: "Limited Collaboration Time", desc: "The volunteer team was rarely available at the same time. Async was the only option, so I designed async-first workshop formats and documentation." },
                  { title: "Government Data Compliance", desc: "Every visualization and content decision carried institutional accountability. We embedded data integrity into design reviews from day one." },
                  { title: "Designing for Diverse Populations", desc: "Elderly residents, non-English speakers, and low-tech-literacy users were underserved by default. Inclusive design became a core constraint, not an afterthought." }
                ].map(item => (
                  <li key={item.title}>
                    <h4 className="font-serif text-xl mb-3 text-zinc-200">{item.title}</h4>
                    <p className="text-zinc-400 font-light leading-relaxed text-[15px]">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Footer */}
      <section className="py-40 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-8">Reflection</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl leading-tight text-zinc-800 italic mb-12">
            "The measure of this work isn't a single metric—it's that a volunteer team built something that helps residents understand a danger to their lives with evidence and care."
          </h2>
          <div className="mx-auto w-12 h-[1px] bg-zinc-300 mb-12"></div>
          <p className="text-sm tracking-[0.2em] uppercase text-zinc-400 font-sans">
            SafeHome · Civic Tech · 2025
          </p>
        </div>
      </section>
    </main>
  );
}
