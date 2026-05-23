import { motion } from "framer-motion";
import { useState } from "react";
import { WhatsAppIcon } from "./Navbar";

export function WhatsAppFloat() {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="fixed z-[999] bottom-5 right-5 md:bottom-8 md:right-8"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 14 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        {hover && (
          <motion.div
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            className="absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap text-white text-sm rounded px-3.5 py-2 font-[var(--font-heading)]"
            style={{ background: "#0A0A0A" }}
          >
            Chat on WhatsApp
          </motion.div>
        )}
        <motion.a
          href="https://wa.me/97451805395"
          target="_blank" rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-pulse relative grid place-items-center w-14 h-14 rounded-full shadow-lg"
          style={{ background: "#25D366" }}
          whileHover={{ scale: 1.1, rotate: 8 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
}
