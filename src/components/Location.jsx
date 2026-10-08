import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import GoldDivider from "./decorative/GoldDivider";

export default function Location({ event }) {
  return (
    <section className="relative px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl italic text-ink"
        >
          El lugar donde celebraremos
        </motion.h2>

        <GoldDivider className="mt-5 mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center gap-3"
        >
          <MapPin size={24} strokeWidth={1.3} className="text-rose-deep" />
          <p className="font-display text-xl text-ink">{event.locationName}</p>
          <p className="max-w-xs font-body text-sm leading-relaxed text-ink-soft">
            {event.address}
          </p>
        </motion.div>

        {event.mapsUrl && (
          <motion.a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-2 rounded-full border border-gold/60 bg-ivory px-7 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-ink transition-transform duration-500 hover:scale-[1.03] hover:border-gold"
          >
            <Navigation size={15} strokeWidth={1.5} className="text-rose-deep" />
            Ver ubicación
          </motion.a>
        )}
      </div>
    </section>
  );
}
