import { ExternalLink } from "lucide-react";
import React from "react";

// Simple article data extracted from the Wix site
const articles = [
  {
    title: "Ride Sharing",
    description: "Case study of a ride‑sharing app that facilitates seniors to feel confident about moving from one place to another.",
    url: "https://crramya06.medium.com/ux-case-study-ride-sharing-app-642080cbc89d",
  },
  {
    title: "Behavioral Economics",
    description: "An intriguing study and understanding of UX through the lens of behavioural economics.",
    url: "https://crramya06.medium.com/behavioural-economics-e60a10d44ddc",
  },
  {
    title: "Published in Bootcamp | Medium",
    description: "Articles published during a design bootcamp, showcased on Medium.",
    url: "#", // placeholder – replace with actual link if available
  },
];

export const Articles: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white uppercase tracking-widest">Writing Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div key={idx} className="group relative">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-2xl bg-purple-900/10 border border-purple-500/10 backdrop-blur-md hover:bg-purple-900/20 transition-all group-hover:-translate-y-2 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors pr-8">{article.title}</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity absolute right-8 top-8" />
                </div>
                <p className="text-neutral-400 leading-relaxed">{article.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
