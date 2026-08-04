"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "./interactive-background";

export function ConditionalBackground() {
    const pathname = usePathname();
    const isWorkPage = pathname === "/work" || pathname === "/work/";
    const isExplorationsPage = pathname === "/explorations" || pathname === "/explorations/";
    const isExplorationDetailPage = pathname?.startsWith("/explorations/") && pathname !== "/explorations" && pathname !== "/explorations/";
    const isAboutPage = pathname === "/about" || pathname === "/about/";

    return <InteractiveBackground 
        hideSphere={true} 
        hideGradients={true} 
    />;
}
