import { explorations } from "@/data/explorations";
import { DrawingToRealityExploration } from "@/components/explorations/drawing-to-reality";
import { RobotTurntableExploration } from "@/components/explorations/robot-turntable";
import { ResilienceInteractiveExploration } from "@/components/explorations/resilience-interactive";
import { CalAiRobotExploration } from "@/components/explorations/cal-ai-robot";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return explorations.map((exploration) => ({
    slug: exploration.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exploration = explorations.find((item) => item.slug === slug);

  return {
    title: exploration ? `${exploration.title} | Cal AI Labs` : "Exploration",
    description: exploration?.description || "",
  };
}

export default async function ExplorationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exploration = explorations.find((item) => item.slug === slug);

  if (!exploration) {
    notFound();
  }

  if (slug === "drawing-to-reality") {
    return <DrawingToRealityExploration exploration={exploration} />;
  }

  if (slug === "robot-turntable") {
    return <RobotTurntableExploration exploration={exploration} />;
  }

  if (slug === "resilience-interactive") {
    return <ResilienceInteractiveExploration exploration={exploration} />;
  }

  if (slug === "cal-ai-robot") {
    return <CalAiRobotExploration exploration={exploration} />;
  }

  notFound();
}

