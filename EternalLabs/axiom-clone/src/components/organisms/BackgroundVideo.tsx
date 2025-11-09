"use client";

import { ReactNode } from "react";

export default function BackgroundVideo({ children }: { children?: ReactNode }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none overflow-hidden"
        src="https://www.pexels.com/download/video/7579953/"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      {/* Dark overlay to ensure text contrast over the video */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.6))]" />

      {/* Overlay content (e.g., Hero) centered within first viewport */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
