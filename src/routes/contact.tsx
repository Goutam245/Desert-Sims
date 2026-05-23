import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Clock, Check, ArrowRight } from "lucide-react";

function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { Reveal, SectionLabel } from "@/components/site/motion-helpers";
import { WhatsAppIcon } from "@/components/site/Navbar";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Desert Sims Qatar" },
      { name: "description", content: "Get in touch with Desert Sims for simulator hire, installations and event activations across Qatar." },
      { property: "og:title", content: "Contact Desert Sims" },
      { property: "og:description", content: "+974 5180 5395 — info@desertsims.com — Open 24 hours." },
    ],
  }),
  component: ContactPage,
});

const infoCards = [
  { icon: Phone, label: "+974 5180 5395", link: "Click to call", href: "tel:+97451805395" },
  { icon: Mail, label: "info@desertsims.com", link: "Send us an email", href: "mailto:info@desertsims.com" },
  { icon: Instagram, label: "@desertsims", link: "Follow on Instagram", href: "https://instagram.com/desertsims" },
  { icon: Clock, label: "Open 24 Hours", link: "Qatar-Based Support", href: "#" },
];

const enquiryTypes = [
  "Mobile Simulator Hire", "Home Installation", "Commercial Installation",
  "Products & Brands", "Events & Activations", "General Enquiry",
];

function ContactPage() {
  const [type, setType] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const showDate = type === "Mobile Simulator Hire" || type === "Events & Activations";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("success"), 1200);
  };

  return (
    <>
      <section className="bg-white pt-36 pb-12">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="font-[var(--font-heading)] font-bold text-brand-text-dark text-4xl md:text-6xl">Contact Desert Sims</h1>
          <p className="text-brand-text-body mt-4 max-w-2xl mx-auto">Interested in hiring a simulator, building a golf room or discussing a custom activation? Get in touch today.</p>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
          {/* LEFT — info */}
          <Reveal>
            <div className="space-y-4">
              {infoCards.map(({ icon: Icon, label, link, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-center gap-5 bg-white border border-brand-border rounded-md px-7 py-6 hover:shadow-md transition-shadow"
                  style={{ borderLeft: "3px solid #C9A84C" }}>
                  <Icon className="w-6 h-6 text-brand-gold shrink-0" />
                  <div>
                    <p className="font-[var(--font-heading)] font-bold text-brand-text-dark text-lg">{label}</p>
                    <p className="text-brand-gold text-sm">{link}</p>
                  </div>
                </a>
              ))}
              <a href="https://wa.me/97451805395" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-md p-4 text-white font-[var(--font-heading)] font-bold text-base transition-colors hover:opacity-90"
                style={{ background: "#25D366" }}>
                <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp Now
              </a>
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-md p-8 md:p-10" style={{ background: "#F8F6F1", border: "1px solid #E5E5E5" }}>
              {state === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto rounded-full grid place-items-center mb-4" style={{ background: "#C9A84C" }}>
                    <Check className="w-8 h-8 text-brand-black" />
                  </div>
                  <p className="font-[var(--font-heading)] font-bold text-brand-text-dark text-xl">Message sent!</p>
                  <p className="text-brand-text-body mt-2">We'll be in touch soon.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" name="name" required />
                  <Field label="Company Name" name="company" />
                  <Field label="Phone Number *" name="phone" type="tel" required />
                  <Field label="Email Address *" name="email" type="email" required />
                  <div className="sm:col-span-2">
                    <Label>Type of Enquiry *</Label>
                    <select required value={type} onChange={(e) => setType(e.target.value)}
                      className="w-full bg-white border border-brand-border rounded-md px-4 py-3.5 text-brand-text-dark focus:border-brand-gold focus:outline-none focus:ring-[3px] focus:ring-brand-gold/20">
                      <option value="">— Select enquiry type —</option>
                      {enquiryTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  {showDate && <Field label="Event Date" name="date" type="date" />}
                  <Field label="Location / Venue" name="location" className={showDate ? "" : "sm:col-span-2"} />
                  <div className="sm:col-span-2">
                    <Label>Message *</Label>
                    <textarea required rows={5} name="message"
                      className="w-full bg-white border border-brand-border rounded-md px-4 py-3.5 text-brand-text-dark focus:border-brand-gold focus:outline-none focus:ring-[3px] focus:ring-brand-gold/20 resize-y" />
                  </div>
                  <button type="submit" disabled={state === "loading"}
                    className="sm:col-span-2 flex items-center justify-center gap-2 rounded-md py-4 font-[var(--font-heading)] font-bold text-sm tracking-[1.5px] uppercase transition-colors hover:bg-brand-gold-light disabled:opacity-60"
                    style={{ background: "#C9A84C", color: "#0A0A0A" }}>
                    {state === "loading" ? "Sending…" : <>Send Your Enquiry <ArrowRight className="w-4 h-4" /></>}
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block font-[var(--font-heading)] font-semibold text-[12px] uppercase tracking-[1px] text-brand-text-dark mb-1.5">{children}</label>;
}
function Field({ label, className = "", ...props }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input {...props} className="w-full bg-white border border-brand-border rounded-md px-4 py-3.5 text-brand-text-dark focus:border-brand-gold focus:outline-none focus:ring-[3px] focus:ring-brand-gold/20" />
    </div>
  );
}
