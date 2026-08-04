import { Hero } from "@/components/sections/hero";
import { PhilosophyQuote } from "@/components/sections/philosophy-quote";
import { ProcessFlow } from "@/components/sections/process-flow";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { DesignLeadership } from "@/components/sections/design-leadership";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PhilosophyQuote />
      <ProcessFlow />
      <FeaturedProjects />
      <DesignLeadership />
      <Testimonials />
    </main>
  );
}
