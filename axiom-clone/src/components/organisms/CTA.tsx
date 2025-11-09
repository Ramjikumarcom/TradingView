// src/components/organisms/CTA.tsx
"use client";

export default function CTA() {
  return (
      <section className="relative">
        {/* Full-bleed band with stronger side accents and darker center */}
        <div className="full-bleed py-24 bg-[linear-gradient(90deg,rgba(37,99,235,0.36)_0%,rgba(8,12,20,0.98)_10%,rgba(8,12,20,0.98)_90%,rgba(37,99,235,0.36)_100%)]">
          <div className="mx-auto max-w-[104rem] px-10">
            {/* Inset panel only (no frame ring) */}
            <div className="relative rounded-lg px-16 md:px-28 py-24 md:py-32 bg-[linear-gradient(180deg,rgba(6,10,18,0.99),rgba(6,10,18,0.86))] shadow-[0_46px_140px_rgba(0,0,0,0.55)] overflow-hidden">
              {/* Inner vignette to darken edges */}
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(0,0,0,0.28)_100%)]" />
              {/* Bottom spotlight/gloss (stronger) */}
              <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 h-48 w-[60%] rounded-[999px] blur-3xl opacity-65 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.65),transparent_65%)]" />

              <div className="relative text-center space-y-10">
                <h3 className="text-[32px] md:text-[44px] leading-tight font-semibold tracking-tight text-foreground">
                  Optimize Your Trades with the
                  <br className="hidden md:block" /> Right Tools
                </h3>
                <button className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-9 md:px-10 py-3.5 md:py-4 text-sm md:text-base font-medium transition shadow-[0_14px_34px_rgba(37,99,235,0.42)]">
                  Launch Axiom
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}