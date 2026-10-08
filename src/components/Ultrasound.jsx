import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import GoldDivider from "./decorative/GoldDivider";

export default function Ultrasound({ babyName, photo }) {
  if (!photo) return null;

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl italic text-ink-soft"
        >
          Desde antes de conocerte&hellip;
        </motion.p>

        <GoldDivider className="mt-5 mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="w-64"
        >
          <SafeImage
            src={photo}
            alt={`Ecografía de ${babyName}`}
            className="aspect-[4/5] w-full rounded-[1.5rem] border border-gold/30 object-cover shadow-[0_20px_45px_-20px_rgba(59,46,41,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
