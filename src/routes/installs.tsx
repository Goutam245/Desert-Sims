import { createFileRoute } from "@tanstack/react-router";
import { Home, Building2, GraduationCap } from "lucide-react";
import { Reveal, SectionLabel, GoldLine, fadeUp, stagger } from "@/components/site/motion-helpers";
import { CTABanner, PageHero } from "@/components/site/CTA";
import { motion } from "framer-motion";

export const Route = createFileRoute("/installs")({
  head: () => ({
    meta: [
      { title: "Home & Commercial Simulator Installations — Desert Sims Qatar" },
      { name: "description", content: "Professional golf simulator environments for homes, hotels, golf clubs and entertainment venues across Qatar." },
      { property: "og:title", content: "Simulator Installations — Desert Sims" },
      { property: "og:description", content: "From entry-level practice solutions to luxury immersive simulator rooms." },
    ],
  }),
  component: InstallsPage,
});

const types = [
  { icon: Home, color: "#1B5E35", bg: "#EEF5F1", title: "Home Golf Rooms",
    desc: "Transform unused spaces into year-round golf and entertainment environments.",
    items: ["Villa golf rooms", "Compound integrations", "Family entertainment spaces"] },
  { icon: Building2, color: "#C9A84C", bg: "#FBF5E6", title: "Commercial Venues",
    desc: "Premium installations for hospitality and entertainment operators.",
    items: ["Hotels", "Sports bars", "Golf clubs", "Entertainment centres", "Corporate lounges"] },
  { icon: GraduationCap, color: "#1B5E35", bg: "#EEF5F1", title: "Academy & Coaching Spaces",
    desc: "Professional training environments for coaches, academies and player development.",
    items: ["Coaching studios", "Performance analysis", "Custom fitting bays"] },
];

const supply = [
  "Launch Monitors", "Hitting Bays", "Impact Screens", "Projectors", "Touchscreens",
  "Gaming PCs", "Flooring Systems", "Acoustic Solutions", "Wall Padding", "Lighting Systems",
  "Simulator Software", "Moving Floor Technology", "Custom Furniture", "Luxury Fit-Out",
];

const steps = [
  { n: "01", title: "Consultation", desc: "We discuss your goals, budget and available space to understand the best simulator solution for your needs." },
  { n: "02", title: "Site Visit", desc: "Our technical team visits your location for precise measurements and a full site assessment." },
  { n: "03", title: "Design & Proposal", desc: "We produce detailed layout concepts, equipment recommendations and transparent pricing." },
  { n: "04", title: "Installation", desc: "Professional setup, installation and full system testing by our experienced technical team." },
  { n: "05", title: "Training & Support", desc: "We provide full training and ongoing technical support to ensure you get the most from your simulator." },
];

function InstallsPage() {
  return (
    <>
      <PageHero label="Installations" title="Home & Commercial Simulator Installations" subtitle="From entry-level practice solutions to luxury immersive simulator rooms." bgImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-brand-text-body text-[17px] leading-[1.8]">
              Desert Sims designs and installs professional golf simulator environments for homes, offices, hotels, golf clubs and entertainment venues. We offer everything from entry-level practice solutions to luxury immersive simulator rooms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INSTALL TYPES */}
      <section className="bg-white pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-7">
          {types.map(({ icon: Icon, title, desc, items, color, bg }) => (
            <Reveal key={title}>
              <div className="bg-white border border-brand-border rounded-md p-10 h-full" style={{ borderTop: `4px solid ${color}` }}>
                <div className="w-14 h-14 rounded-full grid place-items-center mb-5" style={{ background: bg, color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-[22px] text-brand-text-dark mb-3">{title}</h3>
                <p className="text-brand-text-body text-[15px] leading-[1.7] mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {items.map((it) => <li key={it} className="text-brand-text-body text-[14px]"><span className="text-brand-gold mr-2">◆</span>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="py-24" style={{ background: "#F8F6F1" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <SectionLabel>Equipment</SectionLabel>
          <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl">What We Can Supply</h2>
          <div className="flex justify-center my-6"><GoldLine width={50} /></div>
          <motion.div className="flex flex-wrap justify-center gap-3 mt-8 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {supply.map((it) => (
              <motion.span key={it} variants={fadeUp}
                className="bg-white border border-brand-gold/40 hover:bg-brand-gold-light hover:text-brand-text-dark rounded-full px-5 py-2.5 text-brand-text-body font-[var(--font-heading)] text-[13px] transition-colors">
                {it}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl">Our Installation Process</h2>
          </Reveal>

          <div className="relative">
            <motion.div
              className="absolute left-6 md:left-7 top-0 bottom-0 w-px bg-brand-gold/40 origin-top"
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {steps.map((s, i) => (
              <Reveal key={s.n} className="relative pl-20 md:pl-24 pb-12">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full grid place-items-center font-[var(--font-display)] font-bold text-lg" style={{ background: "#C9A84C", color: "#0A0A0A" }}>
                  {i + 1}
                </div>
                <div className="bg-white border border-brand-border rounded-md p-6" style={{ borderLeft: "3px solid #C9A84C" }}>
                  <h3 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-xl mb-2">{s.title}</h3>
                  <p className="text-brand-text-body leading-[1.8]">{s.desc}</p>
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
