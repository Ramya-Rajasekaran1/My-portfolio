import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
        "min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased transition-colors duration-300",
        inter.variable,
        playfair.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
