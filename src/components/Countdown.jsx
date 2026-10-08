import { motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";
import GoldDivider from "./decorative/GoldDivider";

function Unit({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex w-16 flex-col items-center sm:w-20"
    >
      <span className="font-display text-4xl text-rose-deep sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 font-body text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown({ babyName, isoDate }) {
  const { days, hours, minutes, seconds, isPast } = useCountdown(isoDate);

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl italic text-ink"
        >
          Faltan&hellip;
        </motion.h2>

        <GoldDivider className="mt-5 mb-10" />

        {isPast ? (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl italic text-rose-deep"
          >
            ¡Hoy celebramos la llegada de {babyName}!
          </motion.p>
        ) : (
          <div className="flex items-start gap-4 sm:gap-6">
            <Unit value={days} label="Días" delay={0} />
            <Divider />
            <Unit value={hours} label="Horas" delay={0.1} />
            <Divider />
            <Unit value={minutes} label="Min" delay={0.2} />
            <Divider />
            <Unit value={seconds} label="Seg" delay={0.3} />
          </div>
        )}
      </div>
    </section>
  );
}

function Divider() {
  return (
    <span className="mt-1 font-display text-3xl text-gold/50 sm:text-4xl" aria-hidden="true">
      &middot;
    </span>
  );
}
