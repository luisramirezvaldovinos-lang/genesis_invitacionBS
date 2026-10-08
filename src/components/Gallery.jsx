import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import GoldDivider from "./decorative/GoldDivider";

export default function Gallery({ babyName, photos = [] }) {
  const items = photos.filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl italic text-ink"
        >
          Momentos que atesoramos
        </motion.h2>
        <GoldDivider className="mt-5 mb-10" />
      </div>

      <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:gap-4">
        {items.map((src, i) => (
          <motion.div
            key={src + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
            className={
              i % 5 === 0
                ? "col-span-2 row-span-1"
                : "col-span-1"
            }
          >
            <SafeImage
              src={src}
              alt={`${babyName} — fotografía ${i + 1}`}
              className={`w-full rounded-2xl object-cover shadow-[0_15px_35px_-20px_rgba(59,46,41,0.5)] ${
                i % 5 === 0 ? "aspect-[16/10]" : "aspect-square"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
