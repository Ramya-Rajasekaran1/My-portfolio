import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { PublicationsAndArticles } from "@/components/sections/publications-and-articles";
import { Certifications } from "@/components/sections/certifications";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <PublicationsAndArticles />
      <Certifications />
      <Testimonials />
    </main>
  );
}
