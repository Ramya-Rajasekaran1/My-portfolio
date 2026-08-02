import { Hero } from "@/components/sections/hero";
import { SkillsAndStats } from "@/components/sections/skills-and-stats";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Certifications } from "@/components/sections/certifications";
import { Testimonials } from "@/components/sections/testimonials";
import { DesignLeadership } from "@/components/sections/design-leadership";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SkillsAndStats />
      <FeaturedProjects />
      <DesignLeadership />
      <Certifications />
      <Testimonials />
    </main>
  );
}
