"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "./interactive-background";

export function ConditionalBackground() {
    const pathname = usePathname();
    const isWorkPage = pathname === "/work";
    const isProjectPage = pathname?.startsWith("/work/") && pathname !== "/work";
    const isAboutPage = pathname === "/about";

    // On Work page and About page, hide everything. On individual project pages, hide only the sphere.
    return <InteractiveBackground 
        hideSphere={isProjectPage || isAboutPage || isWorkPage} 
        hideGradients={isAboutPage || isWorkPage} 
    />;
}
