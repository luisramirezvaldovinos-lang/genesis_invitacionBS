import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
  const total = +new Date(targetDate) - +new Date();
  const clamp = (n) => Math.max(0, n);

  return {
    total,
    days: clamp(Math.floor(total / (1000 * 60 * 60 * 24))),
    hours: clamp(Math.floor((total / (1000 * 60 * 60)) % 24)),
    minutes: clamp(Math.floor((total / (1000 * 60)) % 60)),
    seconds: clamp(Math.floor((total / 1000) % 60)),
  };
}

/**
 * Devuelve el tiempo restante hasta targetDate, actualizado cada segundo.
 * Cuando el tiempo llega a cero, `isPast` se vuelve verdadero.
 */
export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return { ...timeLeft, isPast: timeLeft.total <= 0 };
}
