"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "./interactive-background";

export function ConditionalBackground() {
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith("/work/") && pathname !== "/work";

    // On project pages, show only the background gradients without the sphere
    return <InteractiveBackground hideSphere={isProjectPage} />;
}
