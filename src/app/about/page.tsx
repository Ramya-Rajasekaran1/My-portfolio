import { Metadata } from "next";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
    title: "About | Ramya Rajsekaran",
    description: "Learn more about Ramya Rajsekaran, a UX Designer with a passion for user-centered design.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Me</h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I&apos;m Ramya, a UX Designer based in [Location]. I believe that great design is not just about how things look, but how they work and how they make people feel.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden">
                            {/* Placeholder for photo */}
                            <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                Photo Placeholder
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold font-serif">My Journey</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                With a background in [Background], I transitioned into UX design because I wanted to solve real-world problems. Over the last 5 years, I&apos;ve had the privilege of working with startups and established companies to build products that users love.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                My process is deeply rooted in user research. I strive to understand the &quot;why&quot; behind user behaviors before jumping into the &quot;how&quot; of design solutions.
                            </p>

                            <h2 className="text-2xl font-bold font-serif pt-4">What I Do</h2>
                            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>• User Research & Strategy</li>
                                <li>• Information Architecture</li>
                                <li>• Wireframing & Prototyping</li>
                                <li>• UI Design & Design Systems</li>
                                <li>• Usability Testing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <GlassCard className="p-8 md:p-12 border-white/20 dark:border-white/10">
                        <h2 className="text-3xl font-serif font-bold border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 mb-8">Experience</h2>

                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <span className="text-sm font-medium text-neutral-500 w-32 shrink-0">2022 - Present</span>
                                <div>
                                    <h3 className="text-xl font-bold">Senior UX Designer</h3>
                                    <p className="text-purple-600 dark:text-purple-400 mb-2">Company Name</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                        Leading the design of the core product. Improved user retention by 20% through a complete redesign of the onboarding flow. Mentoring junior designers and establishing design operations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <span className="text-sm font-medium text-neutral-500 w-32 shrink-0">2020 - 2022</span>
                                <div>
                                    <h3 className="text-xl font-bold">Product Designer</h3>
                                    <p className="text-purple-600 dark:text-purple-400 mb-2">Another Company</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                        Collaborated with PMs and engineers to launch 3 major features. Conducted user interviews and usability tests to validate concepts.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <span className="text-sm font-medium text-neutral-500 w-32 shrink-0">2018 - 2020</span>
                                <div>
                                    <h3 className="text-xl font-bold">UX/UI Designer</h3>
                                    <p className="text-purple-600 dark:text-purple-400 mb-2">Creative Agency</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                        Designed websites and mobile apps for clients in various industries including fintech, healthcare, and e-commerce.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </main>
    );
}
