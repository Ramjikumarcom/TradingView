"use client";

import Image from "next/image";

export default function Architecture() {
  const cards = [
    {
      title: "apple Price",
      sub: "Available on Play Store/App Store",
      src: "https://images.pexels.com/photos/27459645/pexels-photo-27459645.jpeg",
    },
    {
      title: "Apple Web",
      sub: "Login to web.apple.co",
      src: "https://images.pexels.com/photos/5833272/pexels-photo-5833272.jpeg",
    },
    {
      title: "TradingView Charts",
      sub: "Trade from tv.apple.co",
      src: "https://images.pexels.com/photos/27288569/pexels-photo-27288569.jpeg",
    },
    {
      title: "Apple Trading APIs",
      sub: "Request Access via web.apple.co",
      src: "https://images.pexels.com/photos/30572289/pexels-photo-30572289.jpeg",
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Architecture</h2>

      {/* Larger cards: fewer columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl bg-black/20 hover:bg-black/30 transition-colors p-6 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
          >
            <div>
              <div className="text-lg md:text-xl font-semibold text-foreground">{c.title}</div>
              <div className="text-xs md:text-sm text-emerald-400/90 mt-0.5">{c.sub}</div>
            </div>
            {/* No borders; bigger visual with 16:9 */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <Image
                src={c.src}
                alt={c.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
