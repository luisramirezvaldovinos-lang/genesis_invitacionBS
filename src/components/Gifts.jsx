import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import GoldDivider from "./decorative/GoldDivider";

export default function Gifts({ gifts }) {
  if (!gifts?.enabled) return null;

  return (
    <section className="relative bg-blush/25 px-6 py-20">
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <Gift size={22} strokeWidth={1.3} className="text-gold" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 font-display text-2xl italic text-ink"
        >
          {gifts.intro}
        </motion.p>

        <GoldDivider className="my-6" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-body text-sm leading-relaxed text-ink-soft"
        >
          {gifts.subtext}
        </motion.p>

        {gifts.url && (
          <motion.a
            href={gifts.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 rounded-full border border-gold/60 bg-ivory px-7 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-ink transition-transform duration-500 hover:scale-[1.03] hover:border-gold"
          >
            Ver mesa de regalos
          </motion.a>
        )}
      </div>
    </section>
  );
}
