import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

export default function Rsvp({ contact, babyName }) {
  if (!contact?.whatsappEnabled || !contact?.whatsappNumber) return null;

  const text = (contact.whatsappTemplate || "").replace("{babyName}", babyName);
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 rounded-full bg-rose-deep px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-ivory shadow-[0_15px_35px_-15px_rgba(168,114,106,0.6)] transition-transform duration-500 hover:scale-[1.03]"
        >
          <MessageCircleHeart size={16} strokeWidth={1.6} />
          Confirmar asistencia
        </motion.a>
      </div>
    </section>
  );
}
