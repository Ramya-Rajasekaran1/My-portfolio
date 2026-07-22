"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "./interactive-background";

export function ConditionalBackground() {
    const pathname = usePathname();
    const isWorkPage = pathname === "/work" || pathname === "/work/";
    const isExplorationsPage = pathname === "/explorations" || pathname === "/explorations/";
    const isProjectPage = pathname?.startsWith("/work/") && pathname !== "/work" && pathname !== "/work/";
    const isExplorationDetailPage = pathname?.startsWith("/explorations/") && pathname !== "/explorations" && pathname !== "/explorations/";
    const isAboutPage = pathname === "/about" || pathname === "/about/";

    return <InteractiveBackground 
        hideSphere={isProjectPage || isExplorationDetailPage || isAboutPage || isWorkPage || isExplorationsPage} 
        hideGradients={isAboutPage || isWorkPage || isExplorationsPage || isExplorationDetailPage} 
    />;
}
