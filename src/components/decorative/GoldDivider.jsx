import { motion, useReducedMotion } from "framer-motion";

/**
 * Pequeña línea dorada ornamental con un destello central,
 * se dibuja al entrar en el viewport.
 */
export default function GoldDivider({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg
        width="140"
        height="24"
        viewBox="0 0 140 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2 12 H54"
          stroke="#C6A567"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <motion.circle
          cx="70"
          cy="12"
          r="2.2"
          fill="#C6A567"
          initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.9 }}
        />
        <motion.path
          d="M86 12 H138"
          stroke="#C6A567"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <motion.path
          d="M70 5c-2-3-6-1-5 2 1 2 3 3 5 5 2-2 4-3 5-5 1-3-3-5-5-2Zm0 14c-2 3-6 1-5-2 1-2 3-3 5-5 2 2 4 3 5 5 1 3-3 5-5 2Zm-7-7c-3-2-1-6 2-5 2 1 3 3 5 5-2 2-3 4-5 5-3 1-5-3-2-5Zm14 0c3-2 1-6-2-5-2 1-3 3-5 5 2 2 3 4 5 5 3 1 5-3 2-5Z"
          fill="#E9A9C7"
          stroke="#C6A567"
          strokeWidth=".6"
          initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: reduce ? 0 : 0.75 }}
          style={{ transformOrigin: "70px 12px" }}
        />
      </svg>
    </div>
  );
}
