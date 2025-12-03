"use client";

export function Hero() {
    const skills = [
        "UX Research",
        "User Testing",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Accessibility",
        "Figma",
        "GenAI"
    ];

    return (
        <section className="min-h-screen flex items-center justify-center pt-32 px-4 pb-0 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent dark:from-purple-900/20"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20"></div>

            <div className="max-w-6xl w-full p-8 md:p-12 rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Left Side - Name and Logo Placeholder */}
                    <div className="flex flex-col items-center md:items-start gap-6 md:w-1/3">
                        {/* Logo Placeholder */}
                        <div className="w-32 h-32 rounded-2xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 border-2 border-white/30 dark:border-white/50 shadow-lg">
                            <span className="text-xs" aria-hidden="true">Logo</span>
                        </div>

                        {/* Name */}
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                Ramya Rajasekaran
                            </h1>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                UX Designer
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                UX Designer with 4+ yrs of experience leading end-end UX Design across varied industries such as aviation, e-commerce, Supply chain, service based platforms reaching 1M+ users and as complex as 3.2M daily shipments, $2B revenue.
                            </p>

                            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                I designed award-winning UX solutions and presented a paper on GenAI Accessibility & usability research at IEEE, IndiaHCI, and delivered talk at design communities of 10K+.
                            </p>
                        </div>

                        {/* Skill Chips */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
