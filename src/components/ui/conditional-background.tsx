"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "./interactive-background";

export function ConditionalBackground() {
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith("/work/") && pathname !== "/work";
    const isAboutPage = pathname === "/about";

    // On project pages, hide only the sphere. On about page, hide everything.
    return <InteractiveBackground 
        hideSphere={isProjectPage || isAboutPage} 
        hideGradients={isAboutPage} 
    />;
}
