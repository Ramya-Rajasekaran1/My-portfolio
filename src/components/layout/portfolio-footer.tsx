import Link from "next/link";

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-12 mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-serif font-bold tracking-tight">
              Ramya<span className="text-purple-500 dark:text-purple-400">.</span>
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">
              © 2026 Ramya Rajasekaran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
