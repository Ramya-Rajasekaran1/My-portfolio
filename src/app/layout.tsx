import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/accessibility/skip-link";
import { ScrollToTop } from "@/components/accessibility/scroll-to-top";
import { AccessibilityWidget } from "@/components/accessibility/accessibility-widget";
import { ReaderView } from "@/components/accessibility/reader-view";
import { InteractiveCursor } from "@/components/ui/interactive-cursor";
import { ConditionalBackground } from "@/components/ui/conditional-background";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-playfair" }); // keeping variable name to avoid breaking existing classes temporarily
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Ramya Rajsekaran | UX Designer",
  description: "Portfolio of Ramya Rajsekaran, a UX Designer creating experiences for 1M+ users.",
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
        "min-h-screen bg-[var(--background)] text-black antialiased",
        inter.variable,
        dmSerif.variable,
        outfit.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NoiseOverlay />
          <SkipLink />
          <ConditionalBackground />


          <Navbar />
          <div id="main-content">
            {children}
          </div>
          <Footer />
          <ScrollToTop />
          <AccessibilityWidget />
          <ReaderView />
          <InteractiveCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
