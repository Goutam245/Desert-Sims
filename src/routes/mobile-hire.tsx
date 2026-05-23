import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionLabel, GoldLine, stagger, fadeUp } from "@/components/site/motion-helpers";
import { CTABanner, PageHero } from "@/components/site/CTA";
import { Trophy, Target, Users, Calendar, Crosshair, Sparkles, Wifi, Settings, Wrench, Tv, ShieldCheck, Boxes } from "lucide-react";

export const Route = createFileRoute("/mobile-hire")({
  head: () => ({
    meta: [
      { title: "Mobile Golf & Multi-Sport Simulator Hire — Desert Sims Qatar" },
      { name: "description", content: "Premium mobile simulator hire across Qatar — indoor or outdoor, fully managed from setup to teardown." },
      { property: "og:title", content: "Mobile Simulator Hire — Desert Sims" },
      { property: "og:description", content: "Golf, football, rugby & multi-sport experiences for events, hospitality and private functions." },
    ],
  }),
  component: MobileHirePage,
});

const golfGames = [
  { icon: Target, title: "Closest to Pin Competitions", desc: "Test accuracy against friends and colleagues" },
  { icon: Trophy, title: "Long Drive Competitions", desc: "Who can hit it furthest? Perfect tournament format" },
  { icon: Crosshair, title: "Target Golf Games", desc: "Hit targets for points — great for all abilities" },
  { icon: Calendar, title: "Tournament Play", desc: "Full 18-hole course simulation on world-famous courses" },
  { icon: Users, title: "Coaching Sessions", desc: "Data-driven coaching with launch monitor feedback" },
  { icon: Sparkles, title: "Beginner-Friendly Games", desc: "Fun modes for non-golfers and first-timers" },
];

const sports = [
  ["⚽", "Football"], ["🏉", "Rugby"], ["⚾", "Baseball"], ["🏏", "Cricket"],
  ["🏒", "Hockey"], ["🥍", "Dodgeball"], ["🏀", "Basketball"], ["🎯", "Carnival Games"],
] as const;

const idealFor = [
  "Corporate Events", "Shopping Malls", "Fan Zones", "Bars & Restaurants",
  "Weddings", "School Events", "Exhibitions", "Product Launches",
  "Golf Days", "Team Building", "Private Parties", "Hospitality Venues",
];

const included = [
  { icon: Boxes, title: "Simulator Equipment", desc: "Full pro-grade simulator kit" },
  { icon: Wrench, title: "Full Installation & Setup", desc: "Delivered, built and tested by our team" },
  { icon: Settings, title: "Technical Support", desc: "On-site engineers throughout your event" },
  { icon: Crosshair, title: "Launch Monitor", desc: "Accurate ball & swing data" },
  { icon: ShieldCheck, title: "Hitting Mats", desc: "Premium professional grade" },
  { icon: Tv, title: "Projector or TV", desc: "Choose the right display for your venue" },
  { icon: ShieldCheck, title: "Safety Netting", desc: "Crowd-safe enclosures included" },
  { icon: Wifi, title: "Software Setup", desc: "Games, courses and branding pre-loaded" },
];

function MobileHirePage() {
  const [tab, setTab] = useState<"golf" | "multi">("golf");

  return (
    <>
      <PageHero label="Mobile Hire" title="Mobile Golf & Multi-Sport Simulator Hire" subtitle="Delivered anywhere in Qatar. Indoors or outdoors." bgImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211" />

      {/* INTRO */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-brand-text-body text-[17px] leading-[1.8] mb-4">
              Desert Sims delivers premium simulator experiences throughout Qatar for events, hospitality activations, corporate entertainment and private functions.
            </p>
            <p className="text-brand-text-body text-[17px] leading-[1.8]">
              Our mobile systems can be installed indoors or outdoors and are designed to suit a range of venue sizes and event styles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TABS */}
      <section className="bg-white pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex justify-center gap-10 border-b border-brand-border mb-12">
            {([["golf", "⛳ Golf Simulator"], ["multi", "🏆 Multi-Sport"]] as const).map(([k, label]) => {
              const active = tab === k;
              return (
                <button key={k} onClick={() => setTab(k)}
                  className="pb-4 font-[var(--font-heading)] text-base font-bold tracking-wide transition-colors relative"
                  style={{ color: active ? "#111111" : "#888888" }}>
                  {label}
                  {active && <motion.span layoutId="tab-underline" className="absolute bottom-0 inset-x-0 h-[2px] bg-brand-gold" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {tab === "golf" ? (
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                  {golfGames.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-5">
                      <div className="w-12 h-12 rounded-full grid place-items-center shrink-0" style={{ background: "#FBF5E6", color: "#C9A84C" }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-[var(--font-heading)] font-bold text-[18px] text-brand-text-dark">{title}</h3>
                        <p className="text-brand-text-body text-[14px] leading-[1.7] mt-1">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {sports.map(([emoji, name]) => (
                    <div key={name} className="bg-white border border-brand-border rounded-md p-8 text-center hover:border-brand-gold transition-colors">
                      <div className="text-4xl mb-3">{emoji}</div>
                      <p className="font-[var(--font-heading)] font-bold text-brand-text-dark">{name}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="py-24" style={{ background: "#F8F6F1" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <SectionLabel>Use Cases</SectionLabel>
          <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl">Ideal For</h2>
          <div className="flex justify-center my-6"><GoldLine width={50} /></div>
          <motion.div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {idealFor.map((it) => (
              <motion.span key={it} variants={fadeUp}
                className="bg-white border border-brand-border hover:border-brand-gold rounded-full px-5 py-2.5 text-brand-text-body font-[var(--font-heading)] text-[13px] transition-colors">
                {it}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SPACE REQUIREMENTS */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <SectionLabel>Footprint</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl">Space Requirements</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            <Reveal>
              <div className="rounded-lg p-12 text-center relative" style={{ background: "#FBF5E6", border: "2px solid #C9A84C" }}>
                <span className="absolute top-5 left-5 text-[10px] tracking-[2px] uppercase font-bold font-[var(--font-heading)] px-2.5 py-1 rounded-sm" style={{ background: "#C9A84C", color: "#0A0A0A" }}>Standard</span>
                <div className="font-[var(--font-display)] font-bold text-brand-gold" style={{ fontSize: "clamp(40px, 5vw, 60px)" }}>5m × 5m</div>
                <p className="font-[var(--font-heading)] text-brand-text-dark mt-3">3.1m ceiling height</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-lg p-12 text-center relative" style={{ background: "#F8F6F1", border: "2px solid #1B5E35" }}>
                <span className="absolute top-5 left-5 text-[10px] tracking-[2px] uppercase font-bold font-[var(--font-heading)] px-2.5 py-1 rounded-sm" style={{ background: "#1B5E35", color: "white" }}>Compact</span>
                <div className="font-[var(--font-display)] font-bold" style={{ color: "#1B5E35", fontSize: "clamp(40px, 5vw, 60px)" }}>4m × 4m</div>
                <p className="font-[var(--font-heading)] text-brand-text-dark mt-3">2.75m ceiling height</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <SectionLabel>What's Included</SectionLabel>
            <h2 className="font-[var(--font-display)] font-bold text-white text-3xl md:text-5xl">Everything Included</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {included.map(({ icon: Icon, title, desc }) => (
              <Reveal key={title}>
                <div className="rounded-md p-6 h-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <Icon className="w-7 h-7 text-brand-gold mb-3" />
                  <h3 className="font-[var(--font-heading)] font-bold text-white text-base">{title}</h3>
                  <p className="text-white/55 text-[13px] mt-1.5 leading-[1.6]">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
