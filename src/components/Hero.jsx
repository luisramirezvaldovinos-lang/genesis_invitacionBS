import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import GoldDivider from "./decorative/GoldDivider";
import UnicornIllustration from "./decorative/UnicornIllustration";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero({ babyName, babyPhrase, parents, heroPhoto }) {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center section-magic">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(198,155,146,0.16), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="relative z-10 mt-5 mb-1"
      >
        <UnicornIllustration className="unicorn-portrait h-40 w-44 sm:h-48 sm:w-52" />
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="font-body text-xs uppercase tracking-[0.35em] text-rose-deep"
      >
        ✨ Nuestro mayor deseo hecho realidad ✨
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mt-4 font-display text-2xl text-ink sm:text-3xl"
      >
        {parents.mom} &amp; {parents.dad}
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-2 font-display text-lg italic text-ink-soft"
      >
        Te invitamos a celebrar el Baby Shower de nuestra princesa
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        className="relative mt-3 font-display text-[3.7rem] italic leading-none text-rose-deep drop-shadow-[0_5px_25px_rgba(184,111,152,0.25)] sm:text-8xl"
      >
        {babyName}
      </motion.h1>

      <GoldDivider className="mt-7" />

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 max-w-xs font-display text-lg italic text-ink-soft"
      >
        {babyPhrase}
      </motion.p>

      {heroPhoto !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mt-12 w-full max-w-[19rem]"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gold/10 blur-md" aria-hidden="true" />
          <SafeImage
            src={heroPhoto}
            alt={`Fotografía de ${babyName}`}
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_25px_60px_-25px_rgba(59,46,41,0.45)]"
          />
        </motion.div>
      )}
    </section>
  );
}
