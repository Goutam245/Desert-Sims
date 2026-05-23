import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, GoldLine, fadeLeft, fadeRight } from "@/components/site/motion-helpers";
import { CTABanner, PageHero } from "@/components/site/CTA";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Technology Partners — Desert Sims" },
      { name: "description", content: "Official reseller for GolfBays UK, SkyTrak, TruGolf, Sports Simulators, Zen Greens and The Golf Workshop in Qatar." },
      { property: "og:title", content: "Products & Brands — Desert Sims" },
      { property: "og:description", content: "World-leading simulator technology supplied and installed across Qatar." },
    ],
  }),
  component: ProductsPage,
});

const brands = [
  {
    label: "Golf Enclosures & Packages", name: "GolfBays UK", url: "https://golfbays.com",
    about: "GolfBays is one of Europe's leading golf simulator specialists, supplying premium simulator enclosures, impact screens, flooring systems, launch monitors and complete golf simulator packages.",
    items: ["Golf simulator enclosures", "Impact screens", "Hitting mats", "Golf flooring systems", "Simulator packages", "Projectors", "Launch monitor bundles", "Accessories and acoustic solutions"],
    bg: "#0A0A0A", color: "white",
  },
  {
    label: "Launch Monitor Technology", name: "SkyTrak UAE", url: "https://www.skytrak.ae",
    about: "SkyTrak is one of the world's most popular and accessible golf launch monitor systems, offering highly accurate shot tracking and immersive golf simulation experiences.",
    items: ["SkyTrak launch monitors", "Home simulator packages", "Driving range software", "Course play software", "Projector solutions", "GCC-specific simulator packages"],
    bg: "#F8F6F1", color: "#111111",
  },
  {
    label: "Premium Simulator Systems", name: "TruGolf", url: "https://trugolf.com",
    about: "TruGolf is a global leader in golf simulator technology, known for professional simulator systems, immersive software experiences and commercial entertainment solutions.",
    items: ["TruGolf simulator systems", "APOGEE launch monitors", "E6 CONNECT software", "E6 APEX software", "Commercial simulator systems", "MultiSport ARCADE systems"],
    bg: "#0A0A0A", color: "white",
  },
  {
    label: "Multi-Sport Experiences", name: "Sports Simulators", url: "https://www.sportssimulator.com",
    about: "Sports Simulators provides interactive multi-sport simulation systems for football, rugby, baseball, cricket and other entertainment-focused sports experiences.",
    items: ["Multi-sport simulators", "Football simulators", "Rugby simulators", "Baseball simulators", "Interactive target games", "Event entertainment systems", "Corporate activation solutions"],
    bg: "#F8F6F1", color: "#111111",
  },
  {
    label: "Moving Floor Technology", name: "Zen Greens", url: "https://zengreens.com",
    about: "Zen Greens develops world-leading moving floor and active terrain technology designed to replicate real golf course slopes and putting conditions.",
    items: ["Zen Green Stage", "Moving putting platforms", "Swing Stage systems", "Active terrain technology", "Coaching and academy solutions", "Commercial golf studio integrations"],
    bg: "#0A0A0A", color: "white",
  },
  {
    label: "Fitting & Coaching Solutions", name: "The Golf Workshop", url: "https://www.thegolfworkshop.me",
    about: "The Golf Workshop specialises in golf fitting, coaching and simulator solutions across the Middle East, helping golfers improve through technology-driven analysis and custom fitting experiences.",
    items: ["Golf fitting solutions", "Coaching studio concepts", "Launch monitor integration", "Golf performance technology", "Practice studio consultation", "Commercial golf solutions"],
    bg: "#F8F6F1", color: "#111111",
  },
];

function ProductsPage() {
  return (
    <>
      <PageHero label="Brands" title="Products & Technology Partners" subtitle="We partner with leading global brands to deliver premium home, commercial and event simulator solutions throughout Qatar and the GCC." bgImage="https://images.unsplash.com/photo-1593508512255-86ab42a8e620" />

      {brands.map((b, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={b.name} className="py-20 md:py-24 border-b border-brand-border bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
              <Reveal variants={flip ? fadeRight : fadeLeft} className={flip ? "lg:order-2" : ""}>
                <div className="rounded-md aspect-[4/3] grid place-items-center relative overflow-hidden p-10" style={{ background: b.bg, color: b.color, border: b.bg === "#F8F6F1" ? "1px solid #E5E5E5" : "none" }}>
                  <div className="absolute inset-3 border" style={{ borderColor: "rgba(201,168,76,0.35)" }} />
                  <div className="text-center relative">
                    <p className="font-[var(--font-heading)] text-[10px] tracking-[3px] uppercase mb-3" style={{ color: "#C9A84C" }}>Powered by</p>
                    <h3 className="font-[var(--font-display)] font-bold leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: b.color === "white" ? "#C9A84C" : "#111111" }}>{b.name}</h3>
                  </div>
                </div>
              </Reveal>

              <Reveal variants={flip ? fadeLeft : fadeRight} className={flip ? "lg:order-1" : ""}>
                <SectionLabel>{b.label}</SectionLabel>
                <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-4xl md:text-5xl">{b.name}</h2>
                <GoldLine width={40} className="my-5" />
                <p className="text-brand-text-body leading-[1.8] mb-6">{b.about}</p>
                <p className="font-[var(--font-heading)] font-bold text-brand-gold text-base mb-3">Products We Supply</p>
                <ul className="grid sm:grid-cols-2 gap-y-2 mb-7">
                  {b.items.map((it) => (
                    <li key={it} className="text-brand-text-body text-[14px]"><span className="text-brand-gold mr-2">◆</span>{it}</li>
                  ))}
                </ul>
                <a href={b.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-sm border border-brand-text-dark text-brand-text-dark font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase hover:bg-brand-text-dark hover:text-white transition-colors">
                  Visit {b.name} <ArrowRight className="w-4 h-4" />
                </a>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="py-24" style={{ background: "#FBF5E6" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Why Partners Matter</SectionLabel>
          <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-4xl mb-6">A Partner for Every Brief</h2>
          <p className="text-brand-text-body leading-[1.8] mb-3">
            By partnering with globally recognised brands, Desert Sims can provide clients with scalable simulator solutions ranging from portable event setups to luxury residential golf rooms and commercial entertainment venues.
          </p>
          <p className="text-brand-text-body leading-[1.8]">
            This allows us to recommend the right technology for every customer — whether the focus is entertainment, coaching, performance analysis or commercial return on investment.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
