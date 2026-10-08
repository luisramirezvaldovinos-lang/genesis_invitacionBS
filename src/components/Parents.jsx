import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import GoldDivider from "./decorative/GoldDivider";

export default function Parents({ parents, photo }) {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-xs uppercase tracking-[0.3em] text-rose-deep"
        >
          Con muchísimo amor
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 font-display text-3xl text-ink"
        >
          {parents.mom} &amp; {parents.dad}
        </motion.h2>

        {photo && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mt-8 w-56"
          >
            <SafeImage
              src={photo}
              alt={`${parents.mom} y ${parents.dad}`}
              className="aspect-square w-full rounded-full object-cover shadow-[0_20px_45px_-20px_rgba(59,46,41,0.4)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-gold/40"
            />
          </motion.div>
        )}

        <GoldDivider className="mt-8" />

        {parents.message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-xs font-display text-lg italic leading-relaxed text-ink-soft"
          >
            {parents.message}
          </motion.p>
        )}
      </div>
    </section>
  );
}
