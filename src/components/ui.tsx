import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Photo } from '../content';

/** The MallO wordmark: "Mall" followed by the marigold ring with a dot. */
export function Logo({ light = false, size = 26 }: { light?: boolean; size?: number }) {
  return (
    <span className="logo" style={{ fontSize: size, color: light ? '#fff' : 'var(--ink)' }}>
      Mall
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="38.5" fill="none" stroke="#FFB300" strokeWidth="23" />
        <circle cx="50" cy="50" r="13.5" fill="currentColor" />
      </svg>
    </span>
  );
}

/** A photo that fades in when loaded and keeps a warm gradient if it can't load. */
export function Img({ photo, w = 1600, className = '', eager = false }: { photo: Photo; w?: number; className?: string; eager?: boolean }) {
  const [ok, setOk] = useState(false);
  return (
    <span className={`img ${className}`}>
      <img
        src={photo.src(w)}
        srcSet={`${photo.src(Math.round(w / 2))} ${Math.round(w / 2)}w, ${photo.src(w)} ${w}w`}
        sizes="(max-width: 800px) 100vw, 60vw"
        alt={photo.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setOk(true)}
        className={ok ? 'loaded' : ''}
      />
    </span>
  );
}

/** Reveals children with a short rise as they scroll into view. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: { children: ReactNode; delay?: number; as?: 'div' | 'section' | 'li'; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="acc">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}<span aria-hidden="true" /></summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Icon({ name, size = 22 }: { name: keyof typeof PATHS; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

const PATHS = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  map: <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zM9 3v15M15 6v15" />,
  tag: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s-7-4.4-7-11a7 7 0 0 1 14 0c0 6.6-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  park: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" /></>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  gift: <path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 8v6M14 11h6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  wifi: <><path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0" /><circle cx="12" cy="19" r="1" /></>,
  ban: <><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /></>,
  store: <><path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6" /></>,
  building: <><path d="M4 21V5l8-3 8 3v16M9 21v-4h6v4M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

/** App store badges. Not links yet: the app isn't in the stores until launch. */
export function StoreButtons() {
  return (
    <div className="stores" role="list" aria-label="App availability">
      <span className="store" role="listitem">
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.6 9.48 19.4 6.4a.4.4 0 0 0-.7-.4l-1.84 3.15A11.4 11.4 0 0 0 12 8.1c-1.74 0-3.38.38-4.86 1.05L5.3 6a.4.4 0 0 0-.7.4l1.8 3.08A10.2 10.2 0 0 0 1.5 17.5h21a10.2 10.2 0 0 0-4.9-8.02zM7 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
        <span><small>Coming soon on</small><b>Android</b></span>
      </span>
      <span className="store" role="listitem">
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        <span><small>Coming soon on</small><b>iPhone</b></span>
      </span>
    </div>
  );
}
