import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Flag, ShoppingBag, Briefcase, Beer, Rocket, Globe, GraduationCap, Clipboard, Palette, CheckCircle, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, GoldLine, fadeLeft, fadeRight } from "@/components/site/motion-helpers";
import { CTABanner, PageHero } from "@/components/site/CTA";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event Activations & Fan Experiences — Desert Sims" },
      { name: "description", content: "Memorable entertainment for corporate events, fan zones, hospitality venues and public activations across Qatar." },
      { property: "og:title", content: "Event Activations — Desert Sims" },
      { property: "og:description", content: "From World Cup fan zones to corporate hospitality and product launches." },
    ],
  }),
  component: EventsPage,
});

const activations = [
  { icon: Flag, title: "FIFA Fan Zones", desc: "High-energy public simulator activations for major sporting events" },
  { icon: Trophy, title: "Golf Tournaments", desc: "Driving range and skills competitions for golf events" },
  { icon: ShoppingBag, title: "Mall Activations", desc: "Family-friendly simulator experiences in shopping centres" },
  { icon: Briefcase, title: "Corporate Hospitality", desc: "Premium entertainment for client and team events" },
  { icon: Beer, title: "Sports Bars", desc: "Permanent or temporary simulator setups for sports venues" },
  { icon: Rocket, title: "Product Launches", desc: "Simulator experiences as part of brand activation campaigns" },
  { icon: Globe, title: "Public Events", desc: "Large-scale entertainment for festivals and public spaces" },
  { icon: GraduationCap, title: "School Events", desc: "Educational and fun sports technology for school activities" },
];

const brandingItems = [
  "Simulator screen graphics & wraps",
  "Event branding & signage",
  "Competition leaderboards with logos",
  "Sponsor integration & digital displays",
  "Branded games & custom scoring",
  "Printed structures & backdrops",
];

const steps = [
  { icon: Clipboard, title: "Brief & Plan", desc: "Share your event details — date, venue, audience, goals" },
  { icon: Palette, title: "Design & Brand", desc: "We design the setup, branding and experience to match your brief" },
  { icon: CheckCircle, title: "Deliver & Support", desc: "We install, operate and support the full event from start to finish" },
];

function EventsPage() {
  return (
    <>
      <PageHero label="Events" title="Event Activations & Fan Experiences" subtitle="Desert Sims creates memorable entertainment experiences for corporate events, fan zones, hospitality venues and public activations." bgImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87" />

      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <SectionLabel>Activation Types</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl">Experiences We Deliver</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activations.map(({ icon: Icon, title, desc }) => (
              <Reveal key={title}>
                <div className="bg-white border border-brand-border rounded-md p-8 h-full hover:-translate-y-1 transition-transform" style={{ borderTop: "3px solid #C9A84C" }}>
                  <Icon className="w-8 h-8 text-brand-gold mb-4" />
                  <h3 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-[18px] mb-2">{title}</h3>
                  <p className="text-brand-text-muted text-[14px] leading-[1.7]">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM BRANDING */}
      <section className="py-24" style={{ background: "#F8F6F1" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal variants={fadeLeft}>
            <SectionLabel>Branding</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl leading-tight">Full Custom Branding Available</h2>
            <GoldLine width={50} className="my-6" />
            <p className="text-brand-text-body leading-[1.8] mb-6">
              Make every activation uniquely yours with full corporate branding applied to simulator screens, structures, leaderboards and printed materials.
            </p>
            <ul className="space-y-2">
              {brandingItems.map((b) => (
                <li key={b} className="flex gap-3 text-brand-text-body"><span className="text-brand-gold">—</span>{b}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal variants={fadeRight}>
            <div className="rounded-md aspect-[4/3] p-10 grid place-items-center relative overflow-hidden" style={{ background: "#0A0A0A" }}>
              <div className="absolute inset-4 border border-brand-gold/40 rounded-sm" />
              <div className="text-center relative">
                <p className="font-[var(--font-heading)] text-[10px] tracking-[3px] uppercase text-brand-gold mb-4">Your Brand Here</p>
                <div className="bg-white/5 border border-white/10 rounded-md p-8 mb-3">
                  <div className="h-2 w-32 rounded-full bg-brand-gold mb-2 mx-auto" />
                  <div className="h-2 w-20 rounded-full bg-white/20 mx-auto" />
                </div>
                <p className="text-white/60 text-sm font-[var(--font-heading)]">Branded Simulator Screen</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-3xl md:text-5xl">How It Works</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <Reveal key={s.title}>
                <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full grid place-items-center mb-5" style={{ background: "#FBF5E6", color: "#C9A84C" }}>
                    <s.icon className="w-7 h-7" />
                  </div>
                  <p className="text-brand-gold font-[var(--font-heading)] font-bold text-[11px] tracking-[3px] mb-2">STEP {i + 1}</p>
                  <h3 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-xl mb-2">{s.title}</h3>
                  <p className="text-brand-text-body leading-[1.7] max-w-xs mx-auto">{s.desc}</p>
                  {i < 2 && <ArrowRight className="hidden md:block absolute top-7 -right-5 w-6 h-6 text-brand-gold" />}
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
