import { Sparkles, Star } from "lucide-react";
import FloralSprig from "./FloralSprig";

function Butterfly({ className = "" }) {
  return (
    <svg viewBox="0 0 40 34" className={className} fill="none" aria-hidden="true">
      <path d="M19 16C10 2 1 5 5 15c3 6 9 5 14 4Zm2 0C30 2 39 5 35 15c-3 6-9 5-14 4Z" fill="#E9A9C7" opacity=".75"/>
      <path d="M19 18C9 15 7 24 13 27c4 2 6-3 7-6Zm2 0c10-3 12 6 6 9-4 2-6-3-7-6Z" fill="#D9C7F3" opacity=".8"/>
      <path d="M20 14v12m0-10-4-5m4 5 4-5" stroke="#A8799B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function UnicornMagic({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="unicorn-cloud unicorn-cloud-one" />
      <div className="unicorn-cloud unicorn-cloud-two" />
      <div className="unicorn-rainbow" />
      <div className="unicorn-cloud unicorn-cloud-three" />
      <Sparkles className="magic-star magic-star-one" size={18} />
      <Sparkles className="magic-star magic-star-two" size={13} />
      <Star className="magic-star magic-star-three" size={12} fill="currentColor" />
      <Star className="magic-star magic-star-four" size={9} fill="currentColor" />
      <Sparkles className="magic-star magic-star-five" size={11} />
      <Butterfly className="magic-butterfly magic-butterfly-one" />
      <Butterfly className="magic-butterfly magic-butterfly-two" />
      <FloralSprig className="edge-flower edge-flower-left" />
      <FloralSprig className="edge-flower edge-flower-right" flip />
      <span className="magic-bow" aria-hidden="true"><i /><i /><b /></span>
      <span className="magic-heart magic-heart-one" aria-hidden="true">♥</span>
      <span className="magic-heart magic-heart-two" aria-hidden="true">♥</span>
      <span className="magic-dust magic-dust-one" />
      <span className="magic-dust magic-dust-two" />
      <span className="magic-dust magic-dust-three" />
      <span className="magic-dust magic-dust-four" />
    </div>
  );
}
