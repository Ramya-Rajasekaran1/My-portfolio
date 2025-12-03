import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Publications } from "@/components/sections/publications";
import { Articles } from "@/components/sections/articles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <Publications />
      <Articles />
    </main>
  );
}
