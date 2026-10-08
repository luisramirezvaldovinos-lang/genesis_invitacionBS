/**
 * Pequeña ilustración floral de línea, estilo delicado y editorial.
 * Se usa como acento, nunca como protagonista.
 */
export default function FloralSprig({ className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 80 120"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M40 118 C38 90 42 60 40 30"
        stroke="#C6A567"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 85 C30 78 22 80 16 70"
        stroke="#C99B92"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 65 C50 58 58 60 64 50"
        stroke="#C99B92"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 45 C32 38 28 30 30 20"
        stroke="#C99B92"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="30" cy="18" rx="7" ry="4.5" fill="#EDD9D2" opacity="0.9" />
      <ellipse cx="16" cy="68" rx="6" ry="4" fill="#EDD9D2" opacity="0.8" />
      <ellipse cx="64" cy="48" rx="6" ry="4" fill="#EDD9D2" opacity="0.8" />
      <circle cx="40" cy="28" r="3" fill="#C6A567" opacity="0.9" />
    </svg>
  );
}
