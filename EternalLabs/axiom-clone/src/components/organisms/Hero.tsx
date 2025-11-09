"use client";
import Image from "next/image";
import { useRef, useState, UIEvent } from "react";

export default function Hero() {
  const images = [
    "https://images.pexels.com/photos/27459645/pexels-photo-27459645.jpeg",
    "https://images.pexels.com/photos/26762397/pexels-photo-26762397.jpeg",
    "https://images.pexels.com/photos/7267608/pexels-photo-7267608.jpeg",
    "https://images.pexels.com/photos/27288569/pexels-photo-27288569.jpeg",
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [index, setIndex] = useState(0);

  const handleAdvance = () => {
    if (!itemRefs.current.length) return;
    const next = (index + 1) % images.length;
    itemRefs.current[next]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setIndex(next);
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!itemRefs.current.length) return;

    // Find the child whose left offset is closest to current scrollLeft
    let nearest = 0;
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < itemRefs.current.length; i++) {
      const child = itemRefs.current[i];
      if (!child) continue;
      const diff = Math.abs(child.offsetLeft - el.scrollLeft);
      if (diff < min) {
        min = diff;
        nearest = i;
      }
    }
    setIndex(nearest);
  };

  return (
      <section className="relative overflow-hidden">
        {/* Stacked gradient panels (right side) */}


        {/* Centered gallery at 85% width, images 70% viewport height. Click to advance */}
        <div className="mt-12 w-[85vw] mx-auto">
          <div
              ref={scrollerRef}
              onClick={handleAdvance}
              onScroll={handleScroll}
              className=" no-scrollbar cursor-pointer"
              aria-label="Hero gallery (click to advance)"
              role="region"
          >
            <div className="flex gap-6 px-2 md:px-4 pb-4 snap-x snap-mandatory">
              {images.map((src, i) => (
                  <div
                      key={i}
                      className="snap-start shrink-0 overflow-hidden"
                      ref={(el) => {
                        if (el) itemRefs.current[i] = el;
                      }}
                  >
                    <Image
                        src={src}
                        alt={`Trading shot ${i + 1}`}
                        width={2560}
                        height={1600}
                        sizes="85vw"
                        className="h-[70vh] w-[85vw] object-cover rounded-xl border border-[rgba(255,255,255,0.08)]"
                        priority={i === 0}
                    />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}