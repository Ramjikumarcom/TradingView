"use client";

export default function HeroText() {
    return (
        <div className="w-full text-center flex flex-col items-center">
            {/* Triangle glyph (optional) */}
            <div className="hero-logo" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-1">
                The Gateway to DeFi
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
                Axiom is the only trading platform you&apos;ll ever need.
            </p>

            <button className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors mt-8">
                Start Trading
            </button>

            <div className="mt-8 text-sm text-muted-foreground">Backed by</div>
            <div className="yc-badge mt-2">Y Combinator</div>
        </div>
    );
}