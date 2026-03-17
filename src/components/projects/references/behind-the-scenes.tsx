import React from 'react';
import { Layers } from 'lucide-react';

/* 
  REFERENCE: Behind the Scenes (Methodology) Section 
  Saved for future use as per user request on 2026-02-28.
*/

export const MethodologyData = [
    {
        title: "UX & ACCESSIBILITY AUDIT",
        content: "Evaluated leading Gen AI tools across keyboard accessibility, screen reader compatibility, and navigation clarity, focusing on prompt guidance and system feedback."
    },
    {
        title: "TASK PERFORMANCE STUDY",
        content: "Measured user behavior across settings like theme and language changes, tracking completion rates and time metrics for 'Quick finishers' vs 'Stuck' users."
    },
    {
        title: "LITERATURE & STANDARDS REVIEW",
        content: "Reviewed WCAG 2.x guidelines, conversational agent research, and previous accessibility studies focused on dynamic and generative AI systems."
    },
    {
        title: "FRAMEWORK SYNTHESIS",
        content: "Organized insights into a four-layer model: Foundational, Usability Enhancement, Disability-Specific, and Customization & Control."
    }
];

export const BehindTheScenesSection = ({ methodologyData }: { methodologyData?: any }) => (
    <section className="pb-40 pt-24 border-t border-neutral-800/50 bg-[#080808]/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7effa0]/5 blur-[150px] -z-10" />

        <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center text-center space-y-4 mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7effa0]/10 border border-[#7effa0]/20 rounded-full text-[0.65rem] font-mono font-bold text-[#7effa0] uppercase tracking-[0.2em]">
                    <Layers className="w-3.5 h-3.5" /> Research Framework
                </div>
                <h2 className="text-4xl md:text-6xl font-['DM_Serif_Display'] text-white">Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7effa0] to-teal-400 italic">Scenes</span></h2>
                <p className="text-neutral-500 font-sans text-xs uppercase tracking-[0.3em] max-w-md">The Architectural Logic of the Investigation</p>
            </div>

            <div className="relative">
                {/* Horizontal Progress Line Background */}
                <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    {methodologyData.map((step: any, idx: number) => (
                        <div key={idx} className="flex flex-col items-center md:items-start space-y-10 group relative h-full">
                            {/* Marker Circle */}
                            <div className="w-24 h-24 shrink-0 rounded-[2rem] bg-[#0A0B10] border border-neutral-800/80 flex items-center justify-center text-3xl font-['DM_Serif_Display'] text-neutral-600 group-hover:text-[#7effa0] group-hover:border-[#7effa0]/40 group-hover:shadow-[0_0_50px_rgba(126,255,160,0.1)] transition-all duration-700 relative overflow-hidden group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(126,255,160,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                0{idx + 1}
                            </div>

                            <div className="space-y-6 text-center md:text-left h-full">
                                <div className="space-y-2">
                                    <h3 className="text-[0.6rem] font-black text-[#7effa0] uppercase tracking-[0.2em] font-mono">Phase {(idx + 1).toString().padStart(2, '0')}</h3>
                                    <h4 className="text-[0.85rem] font-bold text-white uppercase tracking-[0.1em] border-b border-neutral-800/50 pb-4 min-h-[60px] flex items-end">
                                        {step.title}
                                    </h4>
                                </div>
                                <div className="text-neutral-400 text-[0.8rem] font-sans leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    {step.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
