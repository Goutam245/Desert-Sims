import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionLabel, GoldLine } from "@/components/site/motion-helpers";
import { WhatsAppIcon } from "@/components/site/Navbar";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Desert Sims" },
      { name: "description", content: "Everything you need to know about Desert Sims simulator hire, installations and event services in Qatar." },
      { property: "og:title", content: "Frequently Asked Questions — Desert Sims" },
      { property: "og:description", content: "Answers about space, setup, sports, branding and coverage." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How much space is needed for a simulator setup?",
    a: "Our standard setup requires approximately 5m × 5m with a 3.1m ceiling height. We also offer compact configurations from 4m × 4m × 2.75m for tighter spaces. Every venue is assessed individually — contact us and we'll advise on the best configuration for your space." },
  { q: "Can simulators be set up outdoors?",
    a: "Yes. We offer both indoor and outdoor simulator solutions. Outdoor setups are subject to weather conditions and venue suitability. Our team will assess your location and recommend the appropriate configuration and any shelter requirements needed." },
  { q: "How long does setup take?",
    a: "Most mobile event setups are installed within 2–4 hours depending on the configuration. Permanent home or commercial installations vary in duration — we provide a detailed installation timeline as part of your project proposal." },
  { q: "Do you provide operators and technical staff?",
    a: "Yes. Technical operators and support staff can be included with any hire or event package. Our team manages everything on the day so you can focus on your guests and event." },
  { q: "What sports are available on the simulators?",
    a: "We offer golf, football, rugby, baseball, cricket, hockey, dodgeball, basketball and a range of carnival-style games. Our multi-sport systems are suitable for all ages and abilities." },
  { q: "Can you add our company branding to the simulator?",
    a: "Absolutely. We offer full corporate branding including simulator screen graphics, leaderboard branding, printed backdrops, digital displays and branded game modes. Sponsor integration is also available for larger events." },
  { q: "Do you cover all areas of Qatar?",
    a: "Yes. Desert Sims operates across Qatar including Doha, Al Wakrah, Al Khor, Lusail, The Pearl and surrounding areas. For GCC-wide projects, please contact us to discuss requirements." },
  { q: "What exactly is included in a mobile hire package?",
    a: "All packages include full simulator equipment, delivery and installation, launch monitor, hitting mats, projector or TV display, safety netting, software setup and on-site technical support. Everything is handled by our team." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="bg-white pt-36 pb-12">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <SectionLabel>Help Centre</SectionLabel>
          <h1 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-4xl md:text-6xl">Frequently Asked Questions</h1>
          <p className="text-brand-text-body mt-4">Everything you need to know about Desert Sims.</p>
          <div className="flex justify-center my-6"><GoldLine width={50} /></div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="max-w-[820px] mx-auto px-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i}>
                <div className="bg-white border rounded-md mb-2 transition-all"
                  style={{ borderColor: isOpen ? "rgba(201,168,76,0.45)" : "#E5E5E5", borderLeft: isOpen ? "3px solid #C9A84C" : "1px solid #E5E5E5" }}>
                  <button onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex justify-between items-center text-left px-7 py-6 gap-6">
                    <span className="font-[var(--font-heading)] font-semibold text-[17px] text-brand-text-dark">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-brand-gold">
                      <Plus className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-7 pb-6 pt-1 border-t border-brand-border">
                          <p className="text-brand-text-body leading-[1.8] pt-4">{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: "#FBF5E6", borderTop: "1px solid rgba(201,168,76,0.3)", borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
        <p className="font-[var(--font-heading)] font-bold text-brand-text-dark text-2xl mb-6">Still have questions? We're available 24/7.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black transition-colors">
            Contact Us
          </Link>
          <a href="https://wa.me/97451805395" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-[var(--font-heading)] font-bold text-[13px] tracking-[1.5px] uppercase text-white" style={{ background: "#25D366" }}>
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
