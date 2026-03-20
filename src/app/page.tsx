import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GenAIFeatured } from "@/components/sections/gen-ai-featured";
import { Certifications } from "@/components/sections/certifications";
import { Testimonials } from "@/components/sections/testimonials";
import { DesignLeadership } from "@/components/sections/design-leadership";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <GenAIFeatured />
      <DesignLeadership />
      <Certifications />
      <Testimonials />
    </main>
  );
}
