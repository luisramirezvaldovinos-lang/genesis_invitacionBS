import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const PETAL_COUNT = 6;

function Petal({ index }) {
  const left = 6 + ((index * 17) % 90);
  const duration = 14 + (index % 4) * 4;
  const delay = index * 3.2;
  const size = 9 + (index % 3) * 4;
  const driftX = index % 2 === 0 ? "60px" : "-60px";

  return (
    <span
      className="absolute top-[-5%] block rounded-[60%_40%_55%_45%/45%_55%_40%_60%] bg-blush/70"
      style={{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size * 0.8}px`,
        animation: `drift ${duration}s linear ${delay}s infinite`,
        "--drift-x": driftX,
      }}
    />
  );
}

/**
 * Capa decorativa de pétalos flotando muy sutilmente.
 * No interactiva, no bloquea el contenido, se desactiva si el
 * usuario prefiere menos movimiento.
 */
export default function Petals({ className = "" }) {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {Array.from({ length: PETAL_COUNT }).map((_, i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
}
