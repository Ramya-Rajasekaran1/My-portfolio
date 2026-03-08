import { Metadata } from "next";
import { Mail, Linkedin, Radio, Send, Minus, Square, X, Activity, Compass, MousePointer2, Star } from "lucide-react";
import { CopyEmail } from "@/components/ui/copy-email";

export const metadata: Metadata = {
    title: "Contact | STUDIO OS",
    description: "Launch a collaborative inquiry with Ramya Rajsekaran.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-40 pb-40 flex flex-col justify-center items-center bg-[var(--background)] overflow-hidden px-6 selection:bg-[var(--posthog-orange)]/30 antialiased">
            <div className="max-w-4xl w-full mx-auto space-y-24">

                {/* Header: Signal Info */}
                <div className="text-center space-y-8">
                    <div className="flex items-center justify-center gap-5">
                        <div className="p-3 bg-black text-white shadow-[8px_8px_0_var(--posthog-orange)]">
                            <Radio className="w-6 h-6 animate-pulse text-[var(--posthog-orange)]" />
                        </div>
                        <span className="tech-label tracking-[0.4em]">COLLABORATIVE INQUIRY</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-black">
                        Signal Relay
                    </h1>
                    <p className="text-zinc-900 font-bold text-lg uppercase tracking-tight max-w-2xl mx-auto leading-tight italic">
                        Open for high-impact collaboration, technical strategy consulting, and digital architecture deconstruction.
                    </p>
                </div>

                {/* Contact Window */}
                <div className="os-card bg-white w-full border-4 border-black shadow-[40px_40px_0px_#000] transition-all duration-700 hover:shadow-[40px_40px_0px_var(--posthog-orange)]">
                    <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                        <div className="flex items-center gap-5">
                            <Send className="w-5 h-5 text-[var(--posthog-orange)]" />
                            <span className="font-black uppercase tracking-[0.3em] text-[11px]">DIRECT LINE HUB</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Star className="w-4 h-4 text-black animate-spin-slow opacity-20" />
                            <Minus className="w-4 h-4 text-black/20" />
                            <X className="w-5 h-5 text-black/40 hover:text-[var(--posthog-orange)] cursor-pointer transition-colors" />
                        </div>
                    </div>
                    <div className="p-12 md:p-20 space-y-20 relative overflow-hidden">
                        {/* Status Overlay */}
                        <div className="absolute top-8 right-8 flex items-center gap-4 group">
                            <div className="w-3 h-3 bg-green-500 rounded-none border-2 border-black animate-pulse" />
                            <span className="tech-label text-green-600 font-black tracking-widest">NETWORK ACTIVE</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                            {/* Email Section */}
                            <div className="space-y-8 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-black text-white shadow-[4px_4px_0_var(--posthog-orange)]">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="tech-label text-zinc-400 group-hover:text-black transition-colors tracking-widest font-black">DIRECT LINE</span>
                                </div>
                                <div className="p-8 bg-white border-4 border-black group-hover:shadow-[12px_12px_0_var(--posthog-orange)] transition-all">
                                    <CopyEmail email="crramya06@gmail.com" />
                                </div>
                            </div>

                            {/* LinkedIn Section */}
                            <div className="space-y-8 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-black text-white shadow-[4px_4px_0_var(--posthog-orange)]">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <span className="tech-label text-zinc-400 group-hover:text-black transition-colors tracking-widest font-black">SOCIAL HUB</span>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/ramyar06/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-8 bg-black text-white border-4 border-black hover:bg-[var(--posthog-orange)] hover:text-black hover:shadow-[12px_12px_0_black] transition-all font-black text-xl uppercase tracking-[0.2em] text-center"
                                >
                                    /IN/RAMYAR06
                                </a>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="pt-12 border-t-4 border-black/10 border-dashed flex flex-col md:flex-row justify-between items-center gap-10">
                            <div className="flex items-center gap-6">
                                <Compass className="w-8 h-8 text-zinc-300 animate-spin-slow" />
                                <div className="flex flex-col">
                                    <span className="tech-label opacity-40 tracking-widest">RESPONSE PATH</span>
                                    <span className="text-sm font-black uppercase text-black">LATENCY: PRIORITY RESPONSE</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 py-4 px-10 bg-black text-white border-4 border-black shadow-[8px_8px_0_var(--posthog-orange)]">
                                <MousePointer2 className="w-5 h-5 text-[var(--posthog-orange)] animate-bounce" />
                                <span className="tech-label italic tracking-[0.2em] font-black">DESIGNER CONNECT</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Footnote */}
                <div className="w-full flex items-center justify-between opacity-30 group hover:opacity-100 transition-opacity">
                    <div className="h-2 bg-black flex-1 shadow-sm" />
                    <div className="px-16 flex items-center gap-8">
                        <Activity className="w-8 h-8 text-black animate-pulse" />
                    </div>
                    <div className="h-2 bg-black flex-1 shadow-sm" />
                </div>
            </div>
        </main>
    );
}
