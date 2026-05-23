import { Link } from "@tanstack/react-router";
import logo from "@/assets/desert-logo.png";
import { WhatsAppIcon } from "./Navbar";

const explore = [
  ["Home", "/"], ["Mobile Hire", "/mobile-hire"], ["Installs", "/installs"],
  ["Products", "/products"], ["Events", "/events"], ["Gallery", "/gallery"],
  ["FAQ", "/faq"], ["Contact", "/contact"],
] as const;

const services = [
  "Mobile Simulator Hire",
  "Home Golf Room Installation",
  "Commercial Simulator Install",
  "Event Activations & Fan Zones",
  "Products & Technology",
  "Corporate Entertainment",
];

export function Footer() {
  return (
    <footer className="bg-brand-black text-white border-t-[3px] border-brand-gold pt-20 pb-9">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="Desert Sims" style={{ height: 70 }} className="mb-6" />
          <p className="text-white/60 font-[var(--font-body)] text-sm mb-3">Qatar's Premium Simulator Experience</p>
          <p className="italic text-brand-gold text-[13px] mb-6">Simulators Anywhere, Anytime.</p>
          <a href="https://instagram.com/desertsims" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white text-[13px] font-[var(--font-heading)]">@desertsims</a>
        </div>

        <div>
          <h4 className="font-[var(--font-heading)] text-[11px] tracking-[3px] text-brand-gold mb-5">EXPLORE</h4>
          <ul className="space-y-2">
            {explore.map(([l, h]) => (
              <li key={h}><Link to={h} className="text-white/55 hover:text-brand-gold text-sm transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[var(--font-heading)] text-[11px] tracking-[3px] text-brand-gold mb-5">SERVICES</h4>
          <ul className="space-y-2">
            {services.map((s) => <li key={s} className="text-white/55 text-sm">{s}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-[var(--font-heading)] text-[11px] tracking-[3px] text-brand-gold mb-5">GET IN TOUCH</h4>
          <ul className="space-y-2 text-white/55 text-sm mb-6">
            <li><a href="tel:+97451805395" className="hover:text-white">+974 5180 5395</a></li>
            <li><a href="mailto:info@desertsims.com" className="hover:text-white">info@desertsims.com</a></li>
            <li>@desertsims</li>
            <li>Qatar — Open 24 Hours</li>
          </ul>
          <a
            href="https://wa.me/97451805395" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white font-[var(--font-heading)] font-bold text-[13px] transition-colors"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mt-16 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-white/35 text-[13px]">
        <p>© 2025 Desert Sims. All Rights Reserved.</p>
        <p>Golf Simulator Qatar | Doha | GCC</p>
      </div>
    </footer>
  );
}
