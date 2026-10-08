import FloralSprig from "./decorative/FloralSprig";

export default function Footer({ babyName, parents }) {
  return (
    <footer className="relative flex flex-col items-center gap-4 px-6 pb-16 pt-10 text-center">
      <FloralSprig className="h-14 w-11 opacity-60" />
      <p className="font-display text-2xl italic text-rose-deep">Con amor, esperamos verte</p>
      
      <p className="font-display text-lg italic text-ink-soft">
        Con todo nuestro amor, {parents.mom} &amp; {parents.dad}
      </p>
      <p className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-ink-soft/60">
        {babyName} &middot; {new Date().getFullYear()}
      </p>
      <p>https://www.brantia.dev/</p>
    </footer>
  );
}
