
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import GoldDivider from "./decorative/GoldDivider";

export default function Gallery({ babyName, photos = [] }) {
  const items = photos.filter(Boolean);

  if (items.length === 0) {
    // La galería puede mostrarse aunque todavía no haya fotos.
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

          <UltrasoundVideo babyName={babyName} />
        </div>
      </section>
    );
  }

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

      <div className="mx-auto mt-14 max-w-md text-center">
        <GoldDivider className="mb-8" />
        <UltrasoundVideo babyName={babyName} />
      </div>
    </section>
  );
}

function UltrasoundVideo({ babyName }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-md"
    >
      <p className="font-display text-2xl italic text-ink">
        Descubrimos que seras una hermosa princesa...
      </p>

      <p className="mt-2 mb-6 text-sm text-ink/75">
        Cada latido nos acerca más a ti, {babyName}.
      </p>

      <div className="overflow-hidden rounded-2xl bg-black shadow-[0_15px_35px_-20px_rgba(59,46,41,0.5)]">
        <video
          className="block h-auto w-full"
          controls
          playsInline
          preload="metadata"
          aria-label={`Video del ultrasonido de ${babyName}`}
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/ultrasonido-genesis.mp4`}
            type="video/mp4"
          />
          Tu navegador no puede reproducir este video.
        </video>
      </div>

      <p className="mt-4 text-xs italic text-ink/65">
        Un pequeño recuerdo de un amor inmenso. ♡
      </p>
    </motion.div>
  );
}
