import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

/**
 * Botón discreto de música de fondo.
 * No hace nada si music.enabled es falso o no hay url.
 * `armed` indica que ya hubo una interacción del usuario
 * (por ejemplo, al presionar "Abrir invitación"), requisito
 * de los navegadores móviles para poder reproducir audio.
 */
export default function MusicToggle({ music, armed }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (armed && music?.enabled && music?.url && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [armed, music]);

  if (!music?.enabled || !music?.url) return null;

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music.url} loop />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={toggle}
        aria-label={playing ? "Silenciar música" : "Reproducir música"}
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-ivory/90 text-rose-deep shadow-[0_10px_25px_-12px_rgba(59,46,41,0.5)] backdrop-blur"
      >
        {playing ? (
          <Music size={16} strokeWidth={1.6} />
        ) : (
          <VolumeX size={16} strokeWidth={1.6} />
        )}
      </motion.button>
    </>
  );
}
