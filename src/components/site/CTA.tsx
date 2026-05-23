import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel, GoldLine } from "./motion-helpers";
import { WhatsAppIcon } from "./Navbar";

export function CTABanner() {
  return (
    <section className="py-24 md:py-28 border-y" style={{ background: "#FBF5E6", borderColor: "rgba(201,168,76,0.3)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <SectionLabel>Start Your Project</SectionLabel>
          <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl leading-tight mb-2">
            Ready to Build Your<br />
            <span className="text-brand-gold">Simulator Experience?</span>
          </h2>
          <div className="flex justify-center my-6"><GoldLine width={60} /></div>
          <p className="text-brand-text-body max-w-[600px] mx-auto text-lg leading-[1.8] mb-10">
            Whether you're planning an event, building a home golf room or exploring commercial entertainment concepts, Desert Sims can help design the perfect solution for your space and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-9 py-4 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black transition-colors">
              Request a Quote
            </Link>
            <a href="https://wa.me/97451805395" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-9 py-4 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase text-white transition-colors" style={{ background: "#25D366" }}>
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ label, title, subtitle, bgImage, height = "65vh" }: { label: string; title: string; subtitle?: string; bgImage?: string; height?: string }) {
  return (
    <section
      className="relative w-full flex items-end pb-16 pt-32 text-white overflow-hidden"
      style={{ minHeight: height, background: "#0A0A0A" }}
    >
      {bgImage && (
        <div className="absolute inset-0" style={{ backgroundImage: `url(${bgImage}?w=1600&q=85)`, backgroundSize: "cover", backgroundPosition: "center" }} />
      )}
      <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.78)" }} />
      <div className="hero-grid-bg absolute inset-0 opacity-60" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="font-[var(--font-display)] font-bold text-4xl md:text-6xl leading-[1.05] mb-5 max-w-4xl">{title}</h1>
        <GoldLine width={60} className="mb-5" />
        {subtitle && <p className="text-white/70 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
