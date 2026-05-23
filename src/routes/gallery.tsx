import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Reveal, SectionLabel, GoldLine } from "@/components/site/motion-helpers";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Desert Sims" },
      { name: "description", content: "A selection of our events, installations and activations across Qatar." },
      { property: "og:title", content: "Gallery — Desert Sims" },
      { property: "og:description", content: "Mobile events, corporate activations, home installations and fan zones." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Mobile Events" | "Corporate" | "Home Installations" | "Fan Zones" | "Night Events";
const cats: Cat[] = ["All", "Mobile Events", "Corporate", "Home Installations", "Fan Zones", "Night Events"];

const items: { id: string; cat: Exclude<Cat, "All">; url: string; ratio: string }[] = [
  { id: "1", cat: "Mobile Events", url: "photo-1535131749006-b7f58c99034b", ratio: "aspect-[4/5]" },
  { id: "2", cat: "Fan Zones", url: "photo-1461896836934-ffe607ba8211", ratio: "aspect-[3/2]" },
  { id: "3", cat: "Home Installations", url: "photo-1600607687939-ce8a6c25118c", ratio: "aspect-square" },
  { id: "4", cat: "Corporate", url: "photo-1540575467063-178a50c2df87", ratio: "aspect-[4/5]" },
  { id: "5", cat: "Mobile Events", url: "photo-1587174486073-ae5e5cff23aa", ratio: "aspect-[3/2]" },
  { id: "6", cat: "Night Events", url: "photo-1593508512255-86ab42a8e620", ratio: "aspect-square" },
  { id: "7", cat: "Fan Zones", url: "photo-1504307651254-35680f356dfd", ratio: "aspect-[4/5]" },
  { id: "8", cat: "Corporate", url: "photo-1574629810360-7efbbe195018", ratio: "aspect-[3/2]" },
  { id: "9", cat: "Home Installations", url: "photo-1606107557195-0e29a4b5b4aa", ratio: "aspect-square" },
  { id: "10", cat: "Night Events", url: "photo-1535131749006-b7f58c99034b", ratio: "aspect-[3/2]" },
  { id: "11", cat: "Mobile Events", url: "photo-1461896836934-ffe607ba8211", ratio: "aspect-[4/5]" },
  { id: "12", cat: "Corporate", url: "photo-1600607687939-ce8a6c25118c", ratio: "aspect-[3/2]" },
];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  const lightIdx = lightbox ? items.findIndex((i) => i.id === lightbox) : -1;

  return (
    <>
      <section className="bg-white pt-36 pb-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <SectionLabel>Showcase</SectionLabel>
          <h1 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-4xl md:text-6xl">Gallery</h1>
          <p className="text-brand-text-body mt-4 max-w-2xl mx-auto">A selection of our events, installations and activations across Qatar.</p>
          <div className="flex justify-center my-6"><GoldLine width={50} /></div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 border-b border-brand-border">
            {cats.map((c) => {
              const a = active === c;
              return (
                <button key={c} onClick={() => setActive(c)}
                  className="pb-3 font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase relative transition-colors"
                  style={{ color: a ? "#111111" : "#888888" }}>
                  {c}
                  {a && <motion.span layoutId="gal-underline" className="absolute bottom-0 inset-x-0 h-[2px] bg-brand-gold" />}
                </button>
              );
            })}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((it) => (
                <motion.button
                  key={it.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(it.id)}
                  className={`block w-full break-inside-avoid rounded-md overflow-hidden relative group ${it.ratio}`}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${it.url}?w=900&q=80)`,
                    backgroundSize: "cover", backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/70 transition-colors grid place-items-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <p className="font-[var(--font-heading)] text-[12px] tracking-[2px] uppercase text-brand-gold mb-2">{it.cat}</p>
                      <ZoomIn className="w-7 h-7 text-white mx-auto" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 grid place-items-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white" aria-label="Close">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); const prev = items[(lightIdx - 1 + items.length) % items.length]; setLightbox(prev.id); }}
              className="absolute left-6 text-brand-gold text-3xl">‹</button>
            <button onClick={(e) => { e.stopPropagation(); const next = items[(lightIdx + 1) % items.length]; setLightbox(next.id); }}
              className="absolute right-6 text-brand-gold text-3xl">›</button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={`https://images.unsplash.com/${items[lightIdx]?.url}?w=1600&q=90`}
              alt="" className="max-h-[85vh] max-w-[90vw] rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Reveal className="bg-white pb-24 text-center">
        <p className="text-brand-text-muted text-sm">More projects added regularly.</p>
      </Reveal>
    </>
  );
}
