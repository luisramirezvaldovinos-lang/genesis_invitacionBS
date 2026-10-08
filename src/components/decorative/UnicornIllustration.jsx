/** Ilustración original en SVG para que la invitación no dependa de imágenes externas. */
export default function UnicornIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unicornio blanco con crin rosa y lila">
      <defs>
        <linearGradient id="mane" x1="54" y1="80" x2="184" y2="178" gradientUnits="userSpaceOnUse"><stop stopColor="#F6B8D5"/><stop offset=".52" stopColor="#D8BDF4"/><stop offset="1" stopColor="#B8DFE9"/></linearGradient>
        <linearGradient id="horn" x1="107" y1="18" x2="133" y2="70" gradientUnits="userSpaceOnUse"><stop stopColor="#FFF2BF"/><stop offset="1" stopColor="#D3AE59"/></linearGradient>
        <filter id="shadow" x="26" y="22" width="188" height="190" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>
      <ellipse cx="120" cy="190" rx="76" ry="12" fill="#D8BDF4" opacity=".22" filter="url(#shadow)"/>
      <path d="M83 69 74 35c-2-8 7-13 13-8l29 25 15-4 29-27c6-5 15 0 13 8l-9 43c18 17 27 41 23 66-5 35-32 58-67 58s-65-25-66-61c-1-26 10-49 29-66Z" fill="url(#mane)"/>
      <path d="m99 67 20-49c2-5 9-5 11 0l17 50-25 17-23-18Z" fill="url(#horn)" stroke="#C6A567" strokeWidth="2" strokeLinejoin="round"/>
      <path d="m108 46 18 8m-24 8 33 5" stroke="#FFF9E8" strokeWidth="2" opacity=".85"/>
      <path d="m82 66-5-31 29 25m40 3 28-27-7 34" fill="#FFF9FC" stroke="#D9C7F3" strokeWidth="3" strokeLinejoin="round"/>
      <path d="m84 57-2-13 13 12m47 3 12-12-3 17" fill="#F4BDD9"/>
      <path d="M73 103c5-28 26-45 51-45 31 0 54 24 54 57 0 38-22 68-55 68-32 0-56-26-56-57 0-9 2-17 6-23Z" fill="#FFFCFE" stroke="#F3E8F0" strokeWidth="2"/>
      <path d="M91 123c5 7 13 7 18 0m23 0c5 7 13 7 18 0" stroke="#59475B" strokeWidth="3" strokeLinecap="round"/>
      <path d="M119 143c3 3 7 3 10 0" stroke="#C884A8" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="88" cy="139" rx="9" ry="5" fill="#F4B8D2" opacity=".48"/><ellipse cx="153" cy="139" rx="9" ry="5" fill="#F4B8D2" opacity=".48"/>
      <path d="M88 88c10-12 21-15 33-15m-31 23c8-8 15-11 23-12" stroke="#F0AFCF" strokeWidth="7" strokeLinecap="round"/>
      <path d="M151 93c-7-10-15-15-25-17m32 29c-6-7-12-11-19-13" stroke="#C8A9E8" strokeWidth="7" strokeLinecap="round"/>
      <path d="m106 80 5-8 5 8-5 5-5-5Zm23-5 5-8 5 8-5 5-5-5Z" fill="#FFF8FC" stroke="#D9B76A" strokeWidth="1.5"/>
      <circle cx="111" cy="79" r="2" fill="#E5A8C6"/><circle cx="134" cy="74" r="2" fill="#E5A8C6"/>
      <path d="m59 102 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Zm126 17 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#D7B76A"/>
      <path d="M169 82c4-7 13-8 16-2 4-6 13-5 15 2 2 8-10 15-15 20-5-5-18-12-16-20Z" fill="#E9A9C7" opacity=".9"/>
    </svg>
  );
}
