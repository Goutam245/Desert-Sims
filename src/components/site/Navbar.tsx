import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/desert-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/mobile-hire", label: "Mobile Hire" },
  { to: "/installs", label: "Installs" },
  { to: "/products", label: "Products" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "#0A0A0A" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[78px]">
          <Link to="/" className="flex items-center" aria-label="Desert Sims home">
            <img src={logo} alt="Desert Sims" className="h-[55px] md:h-[55px] w-auto" style={{ height: 55 }} />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-[var(--font-heading)] text-[13px] tracking-[1.5px] uppercase font-semibold transition-colors relative"
                  style={{ color: active ? "#C9A84C" : "rgba(255,255,255,0.85)" }}
                >
                  <span className="hover:text-brand-gold transition-colors">{l.label}</span>
                  {active && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-brand-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/97451805395"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full grid place-items-center transition-transform hover:scale-110"
              style={{ background: "#25D366" }}
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-[var(--font-heading)] font-bold text-[12px] tracking-[1.5px] uppercase px-6 py-2.5 rounded-sm transition-colors"
              style={{ background: "#C9A84C", color: "#0A0A0A" }}
            >
              Get a Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col"
            style={{ background: "#0A0A0A" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 h-[78px]">
              <img src={logo} alt="Desert Sims" style={{ height: 42 }} />
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white">
                <X className="w-7 h-7" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="w-full max-w-sm text-center"
                >
                  <Link
                    to={l.to}
                    className="block py-4 font-[var(--font-display)] text-3xl text-white hover:text-brand-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                  {i < links.length - 1 && <div className="h-px w-12 bg-brand-gold/40 mx-auto" />}
                </motion.div>
              ))}
              <a
                href="https://wa.me/97451805395"
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-sm font-[var(--font-heading)] font-bold tracking-[1.5px] uppercase text-sm"
                style={{ background: "#C9A84C", color: "#0A0A0A" }}
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
