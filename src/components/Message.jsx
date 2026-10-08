import { motion } from "framer-motion";
import FloralSprig from "./decorative/FloralSprig";

export default function Message({ title, body }) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <FloralSprig className="pointer-events-none absolute -left-4 top-6 h-32 w-24 opacity-40" />
      <FloralSprig
        flip
        className="pointer-events-none absolute -right-4 bottom-6 h-32 w-24 opacity-40"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-sm text-center"
      >
        <h2 className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-6 font-body text-[0.95rem] leading-loose text-ink-soft">
          {body}
        </p>
      </motion.div>
    </section>
  );
}
