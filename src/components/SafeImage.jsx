import { useState } from "react";
import FloralSprig from "./decorative/FloralSprig";

/**
 * Muestra una fotografía si `src` existe y carga correctamente.
 * Si `src` está vacío o la imagen falla, muestra un marcador de
 * posición elegante en vez de romper el layout.
 */
export default function SafeImage({ src, alt, className = "", fallbackClassName = "" }) {
  const [errored, setErrored] = useState(false);
  const hasSrc = Boolean(src) && !errored;

  if (!hasSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-blush/50 via-ivory to-cream ${className} ${fallbackClassName}`}
      >
        <FloralSprig className="h-16 w-12 opacity-70" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
