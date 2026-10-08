import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import GoldDivider from "./decorative/GoldDivider";

export default function EventDetails({ event }) {
  return (
    <section className="relative px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <p className="mb-4 font-body text-[0.65rem] uppercase tracking-[0.28em] text-rose-deep">Nuestra cita mágica</p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <Calendar size={22} strokeWidth={1.3} className="text-gold" />
          <p className="font-display text-2xl text-ink">
            {event.dayLabel} {event.dateLabel}
          </p>
        </motion.div>

        <GoldDivider className="my-6" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <Clock size={20} strokeWidth={1.3} className="text-gold" />
          <p className="font-body text-base tracking-wide text-ink-soft">
            {event.timeLabel}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
