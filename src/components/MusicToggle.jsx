import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

export default function MusicToggle({ music, armed }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current || !music?.enabled || !music?.url) return;

    audioRef.current.load();
  }, [music]);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
      setPlaying(false);
    }
  };

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    await playMusic();
  };

  useEffect(() => {
    if (armed) {
      playMusic();
    }
  }, [armed]);

  if (!music?.enabled || !music?.url) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={music.url}
        loop
        preload="auto"
      />

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
