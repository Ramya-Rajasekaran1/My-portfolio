import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import PortfolioFooter from "@/components/layout/portfolio-footer";
import { SkipLink } from "@/components/accessibility/skip-link";
import { ScrollToTop } from "@/components/accessibility/scroll-to-top";
import { AccessibilityWidget } from "@/components/accessibility/accessibility-widget";
import { ReaderView } from "@/components/accessibility/reader-view";
import { InteractiveCursor } from "@/components/ui/interactive-cursor";
import { ConditionalBackground } from "@/components/ui/conditional-background";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Ramya Rajasekaran | UX design specialist",
  description: "Portfolio of Ramya Rajasekaran, a UX design specialist with experience leading end-to-end process across aviation, e-commerce, and supply chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap"
        />
      </head>
      <body className={cn(
        "min-h-screen bg-neutral-50 dark:bg-canvas text-neutral-900 dark:text-ivory antialiased transition-colors duration-300",
        inter.variable,
        playfair.variable,
        outfit.variable,
        caveat.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Overlays disabled to prevent click-blocking issues */}
          {/* <NoiseOverlay /> */}
          <SkipLink />
          <ConditionalBackground />


          <Navbar />
          <div id="main-content">
            {children}
          </div>
          <PortfolioFooter />
          <ScrollToTop />
          <AccessibilityWidget />
          <ReaderView />
          {/* <InteractiveCursor /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
