"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24  bg-black/20">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="text-xl font-semibold tracking-wider">AXIOM <span className="text-accent">Pro</span></div>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            The gateway to DeFi. Discover, analyze, and execute with confidence.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <div className="font-medium text-foreground">Product</div>
          <nav className="mt-2 flex flex-col gap-1 text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition">Discover</Link>
            <Link href="#" className="hover:text-foreground transition">Pulse</Link>
            <Link href="#" className="hover:text-foreground transition">Trackers</Link>
            <Link href="#" className="hover:text-foreground transition">Perps</Link>
          </nav>
        </div>

        <div className="text-sm space-y-2">
          <div className="font-medium text-foreground">Company</div>
          <nav className="mt-2 flex flex-col gap-1 text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition">About</Link>
            <Link href="#" className="hover:text-foreground transition">Docs</Link>
            <Link href="#" className="hover:text-foreground transition">Terms</Link>
            <Link href="#" className="hover:text-foreground transition">Privacy</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex justify-between items-center">
          <span>© {new Date().getFullYear()} Axiom Pro. All rights reserved.</span>
          <span className="opacity-80">Built for demo purposes.</span>
        </div>
      </div>
    </footer>
  );
}
