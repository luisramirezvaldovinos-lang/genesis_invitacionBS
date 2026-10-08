import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import Petals from "./decorative/Petals";
import UnicornMagic from "./decorative/UnicornMagic";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.55, delayChildren: 0.3 },
  },
};

const line = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

/**
 * Pantalla de bienvenida. Al presionar "Abrir invitación" se reproduce
 * una animación breve de sobre abriéndose y luego se revela la
 * experiencia principal mediante onOpen().
 */
export default function OpeningExperience({ babyName, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const reduce = useReducedMotion();

  const handleOpen = () => {
    setIsOpening(true);
    const delay = reduce ? 200 : 1400;
    window.setTimeout(onOpen, delay);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-cream px-6 text-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <UnicornMagic className="absolute z-0 opacity-70" />
      <Petals className="opacity-20" />

      {/* Textura de fondo muy sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(198,165,103,0.10), transparent 55%)",
        }}
      />

      <AnimatePresence mode="wait">
        {!isOpening ? (
          <motion.div
            key="intro"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="relative flex flex-col items-center gap-8"
          >
            <motion.p
              variants={line}
              className="max-w-xs font-display text-xl italic leading-relaxed text-ink-soft sm:text-2xl"
            >
              🦄 Una gran historia de amor está por comenzar&hellip;
            </motion.p>

            <motion.p
              variants={line}
              className="max-w-xs font-body text-sm uppercase tracking-[0.25em] text-rose-deep"
            >
              Una invitación mágica para celebrar la llegada de nuestra princesa Génesis
            </motion.p>

            <motion.button
              variants={line}
              onClick={handleOpen}
              className="group mt-4 flex items-center gap-3 rounded-full border border-lavender bg-white/90 px-8 py-4 font-body text-sm tracking-[0.15em] text-ink shadow-[0_12px_35px_-15px_rgba(113,82,138,0.35)] transition-transform duration-500 hover:scale-[1.03] hover:border-gold"
            >
              <Mail size={17} strokeWidth={1.4} className="text-rose-deep" />
              <span>Abrir invitación</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex flex-col items-center gap-6"
          >
            <EnvelopeSeal reduce={reduce} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-display text-lg italic text-ink-soft"
            >
              Abriendo con cariño&hellip;
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function EnvelopeSeal({ reduce }) {
  return (
    <div className="relative h-24 w-32">
      <motion.div
        className="absolute inset-0 rounded-md border border-gold/50 bg-ivory shadow-lg"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: reduce ? 0 : -140 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
        style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
      />
      <div className="absolute inset-0 rounded-md border border-gold/40 bg-ivory" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-deep"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: reduce ? 0 : [1, 1.15, 0], opacity: reduce ? 0 : [1, 1, 0] }}
        transition={{ duration: 0.9, delay: 0.3 }}
      />
    </div>
  );
}
