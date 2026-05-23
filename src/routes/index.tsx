import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Truck, Home, Cpu, Check, ChevronDown } from "lucide-react";
import { Reveal, GoldLine, SectionLabel, CountUp, fadeLeft, fadeRight, stagger, fadeUp } from "@/components/site/motion-helpers";
import { CTABanner } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desert Sims — Qatar's Premium Golf & Multi-Sport Simulator Experience" },
      { name: "description", content: "Premium golf and multi-sport simulator experiences for events, homes, hotels, bars and commercial venues across Qatar." },
      { property: "og:title", content: "Desert Sims — Qatar's Premium Simulator Experience" },
      { property: "og:description", content: "Mobile hire, installations, and event activations." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { n: 500, suffix: "+", label: "Events Delivered" },
  { n: 8, suffix: "+", label: "Sports Available" },
  { n: 6, suffix: "", label: "Global Technology Partners" },
  { n: 24, suffix: "/7", label: "Qatar-Based Support" },
];

const services = [
  {
    icon: Truck, accent: "gold",
    title: "Mobile Simulator Hire",
    desc: "Premium simulator experiences deployed anywhere in Qatar. Fully managed from setup to teardown — indoors or outdoors.",
    items: [
      "Corporate events & brand activations",
      "Fan zones & public exhibitions",
      "Weddings & private functions",
      "Hotels, bars & team building",
      "Shopping mall activations",
      "School events & product launches",
    ],
    link: "/mobile-hire", cta: "Explore Hire Options",
  },
  {
    icon: Home, accent: "green",
    title: "Home & Commercial Installations",
    desc: "From luxury home golf rooms to full commercial simulator venues — we design, supply and install everything.",
    items: [
      "Luxury villas & private golf rooms",
      "Hotels & sports bars",
      "Offices & corporate lounges",
      "Golf clubs & training academies",
      "Entertainment centres",
      "Commercial venues",
    ],
    link: "/installs", cta: "View Installation Options",
  },
  {
    icon: Cpu, accent: "gold",
    title: "Golf & Multi-Sport Technology",
    desc: "Official reseller and solutions partner for the world's leading simulator brands. Supply, integrate and support.",
    items: [
      "TruGolf & SkyTrak systems",
      "GolfBays UK enclosures",
      "Zen Greens moving floors",
      "Multi-sport platforms",
      "Launch monitors",
      "Software & accessories",
    ],
    link: "/products", cta: "See Products & Brands",
  },
];

const whyItems = [
  "Mobile indoor & outdoor simulator solutions",
  "Golf, football, rugby, baseball & multi-sport",
  "Professional installation & technical support",
  "Corporate branding & sponsor integration",
  "Compact setups for any space",
  "High-end luxury simulator room solutions",
  "Experienced events & hospitality team",
  "Qatar-based support & delivery",
];

const partners = ["GOLFBAYS UK", "SKYTRAK UAE", "TRUGOLF", "SPORTS SIMULATORS", "ZEN GREENS", "THE GOLF WORKSHOP"];

const tiers = [
  {
    badge: "ENTRY LEVEL", badgeStyle: { color: "#C9A84C", border: "1px solid #C9A84C", background: "#FBF5E6" },
    title: "Starter Home Setup",
    subtitle: "Perfect for home practice and family entertainment",
    items: ["Portable launch monitor", "Hitting net & practice mat", "TV connectivity setup", "Compact footprint", "Basic simulator software"],
    dark: false, accent: "#C9A84C",
  },
  {
    badge: "MOST POPULAR", badgeStyle: { background: "#C9A84C", color: "#0A0A0A" },
    title: "Premium Golf Room",
    subtitle: "Built for serious players and family entertainment hubs",
    items: ["Full impact screen & enclosure", "Short throw projector", "Professional launch monitor", "Custom flooring", "Integrated simulator software"],
    dark: true, accent: "#C9A84C",
  },
  {
    badge: "ENTERPRISE", badgeStyle: { background: "#EEF5F1", color: "#1B5E35" },
    title: "Commercial Venue",
    subtitle: "Multi-bay installations for hotels, bars and clubhouses",
    items: ["Multi-bay simulator solutions", "Touchscreen scoring systems", "Lounge & bar integration", "Full branding opportunities", "Venue management support"],
    dark: false, accent: "#1B5E35",
  },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 320]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center" style={{ background: "#0A0A0A" }}>
        <motion.div
          className="absolute inset-0"
          style={{
            y: bgY,
            backgroundImage: "url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=85)",
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.78)" }} />
        <div className="hero-grid-bg absolute inset-0" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08), transparent 60%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-5" style={{ background: "linear-gradient(to bottom, transparent, #FFFFFF)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-[var(--font-heading)] text-[11px] font-bold tracking-[4px] uppercase text-brand-gold mb-5">
            Qatar's Leading Simulator Specialist
          </motion.p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: 60, height: 2, background: "#C9A84C", transformOrigin: "left" }} className="mb-7" />

          <h1 className="font-[var(--font-display)] font-bold text-white leading-[1.05] tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
            {["Qatar's Premium", "Golf & Multi-Sport", "Simulator Experience"].map((line, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block" style={{ color: i === 1 ? "#C9A84C" : "white" }}>
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}
            className="text-white/70 text-base md:text-lg mt-7 max-w-xl leading-[1.7]">
            Mobile simulator hire, permanent installations, entertainment activations and world-class golf technology solutions across Qatar.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase transition-all hover:-translate-y-0.5" style={{ background: "#C9A84C", color: "#0A0A0A" }}>
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/mobile-hire" className="inline-flex items-center gap-3 px-10 py-4 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase border-[1.5px] border-white/40 text-white hover:border-brand-gold hover:text-brand-gold transition-colors">
              View Our Services
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center scroll-bounce">
          <p className="text-white text-[10px] tracking-[3px] mb-2 font-[var(--font-heading)]">SCROLL</p>
          <ChevronDown className="w-5 h-5 text-white mx-auto" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12 border-t-[3px] border-b" style={{ borderTopColor: "#C9A84C", borderBottomColor: "#E5E5E5" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:divide-x divide-brand-border">
          {stats.map((s, i) => (
            <Reveal key={i} className="text-center px-4">
              <div className="font-[var(--font-display)] font-bold text-brand-gold" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <p className="mt-2 font-[var(--font-heading)] text-[11px] uppercase tracking-[3px] text-brand-text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold leading-tight text-brand-text-dark" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              Simulator Experiences Built for<br /><span className="text-brand-gold">Events, Homes & Venues</span>
            </h2>
            <div className="flex justify-center my-6"><GoldLine width={50} /></div>
            <p className="text-brand-text-body text-[17px] leading-[1.8]">
              Desert Sims provides premium golf and multi-sport simulator experiences for events, homes, offices, hotels, bars, compounds and commercial venues across Qatar. From compact mobile setups to fully integrated luxury simulator rooms, we deliver complete turnkey solutions including equipment, installation, software, branding and ongoing technical support.
            </p>
          </Reveal>

          <motion.div className="grid md:grid-cols-3 gap-7 mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            {services.map((s) => {
              const Icon = s.icon;
              const isGreen = s.accent === "green";
              return (
                <motion.div key={s.title} variants={fadeUp}
                  whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(201,168,76,0.18)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-brand-border rounded-md p-10 pt-11 relative"
                  style={{ borderTop: "3px solid #C9A84C", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div className="w-14 h-14 rounded-full grid place-items-center mb-6" style={{ background: isGreen ? "#EEF5F1" : "#FBF5E6", color: isGreen ? "#1B5E35" : "#C9A84C" }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-[22px] text-brand-text-dark mb-3">{s.title}</h3>
                  <p className="text-brand-text-body text-[15px] leading-[1.7] mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2 text-brand-text-body text-[14px]">
                        <span className="text-brand-gold">—</span><span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={s.link} className="inline-flex items-center gap-2 text-brand-gold font-[var(--font-heading)] font-bold text-sm hover:underline underline-offset-4">
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY DESERT SIMS */}
      <section className="py-24 md:py-32" style={{ background: "#F8F6F1" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal variants={fadeLeft}>
            <SectionLabel>Why Desert Sims</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-[44px] leading-[1.15]">
              Qatar's only full-service simulator specialist.
            </h2>
            <GoldLine width={40} className="my-6" />
            <p className="text-brand-text-body text-base leading-[1.8] mb-5">
              Whether you need a single simulator for a private function or a permanent multi-bay commercial installation, Desert Sims delivers complete turnkey solutions with expert Qatar-based support every step of the way — from consultation to aftercare.
            </p>
            <p className="text-brand-text-body text-base leading-[1.8] mb-8">We don't just supply equipment. We design experiences.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal variants={fadeRight}>
            <ul>
              {whyItems.map((it) => (
                <li key={it} className="flex items-center gap-4 py-[18px] border-b border-brand-border">
                  <span className="w-7 h-7 grid place-items-center rounded-full shrink-0" style={{ background: "#EEF5F1" }}>
                    <Check className="w-3.5 h-3.5" style={{ color: "#1B5E35" }} />
                  </span>
                  <span className="text-brand-text-dark text-[15px]">{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 md:py-28" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <SectionLabel>Partners</SectionLabel>
          <h2 className="font-[var(--font-display)] font-bold text-white text-3xl md:text-5xl">Trusted Technology Partners</h2>
          <p className="text-white/60 mt-5 max-w-2xl mx-auto">We work with some of the world's leading golf simulator, launch monitor and sports technology brands.</p>
        </div>
        <div className="mt-14 marquee-pause space-y-5">
          {([0, 1] as const).map((row) => (
            <div key={row} className="overflow-hidden py-6" style={{ background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
              <div className={`flex gap-16 whitespace-nowrap w-max ${row === 0 ? "marquee-track-left" : "marquee-track-right"}`}>
                {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
                  <span key={i} className="font-[var(--font-heading)] font-bold text-xl tracking-[2px] text-white/45 hover:text-brand-gold transition-colors">
                    {p} <span className="text-brand-gold ml-16">◆</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[680px] mx-auto text-center px-6 mt-12 text-white/65 leading-[1.8]">
          From launch monitors and hitting bays to moving swing plates and immersive software platforms, Desert Sims can supply and integrate the latest simulator technologies for every level of customer.
        </div>
      </section>

      {/* INSTALLATION TIERS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>Installation Tiers</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark leading-tight" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              From Compact Setups to<br /><span className="text-brand-gold">Luxury Simulator Rooms</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-7 mt-14">
            {tiers.map((t) => (
              <Reveal key={t.title}>
                <div className="rounded-md p-10 h-full" style={{
                  background: t.dark ? "#0A0A0A" : "#FFFFFF",
                  border: t.dark ? "none" : "1px solid #E5E5E5",
                  borderTop: `4px solid ${t.accent}`,
                }}>
                  <span className="inline-block text-[10px] tracking-[2px] uppercase font-bold px-3 py-1.5 rounded-sm font-[var(--font-heading)]" style={t.badgeStyle}>{t.badge}</span>
                  <h3 className="mt-5 font-[var(--font-heading)] font-bold text-[22px]" style={{ color: t.dark ? "white" : "#111111" }}>{t.title}</h3>
                  <p className="text-sm mt-1.5" style={{ color: t.dark ? "rgba(255,255,255,0.6)" : "#888888" }}>{t.subtitle}</p>
                  <ul className="mt-6 space-y-3">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[14px]" style={{ color: t.dark ? "rgba(255,255,255,0.85)" : "#444444" }}>
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: t.accent }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-brand-text-body mb-4">Not sure which option is right for you?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase" style={{ background: "#C9A84C", color: "#0A0A0A" }}>
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
