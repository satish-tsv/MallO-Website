import { useEffect, useState } from 'react';
import { EMAIL, PHOTOS } from '../content';
import { Icon, Logo, StoreButtons } from './ui';

export type Route = 'home' | 'partner' | 'about' | 'help';

const LINKS: { href: string; label: string; route: Route }[] = [
  { href: '#/partner', label: 'Partner with us', route: 'partner' },
  { href: '#/about', label: 'About', route: 'about' },
  { href: '#/help', label: 'Help', route: 'help' },
];

export function Nav({ route }: { route: Route }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [route]);
  const overHero = false;
  return (
    <header className={`nav ${overHero ? 'clear' : 'solid'}`}>
      <div className="wrap navin">
        <a href="#/" aria-label="MallO home" className="navlogo"><Logo light={overHero} /></a>
        <nav aria-label="Main" className={open ? 'open' : ''}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.route}><a href={l.href} aria-current={route === l.route ? 'page' : undefined}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <a className="btn pri sm" href="#/get">Get the app</a>
        <button className="menubtn" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="footgrid">
          <div>
            <Logo size={30} />
            <p className="muted">Find stores, food, offers and facilities in your mall, get there easily, and win rewards when you shop.</p>
            <StoreButtons />
          </div>
          <div>
            <h4>MallO</h4>
            <ul>
              <li><a href="#/about">About us</a></li>
              <li><a href="#/#how">How it works</a></li>
              <li><a href="#/#points">MallO points</a></li>
              <li><a href="#/get">Get the app</a></li>
            </ul>
          </div>
          <div>
            <h4>For partners</h4>
            <ul>
              <li><a href="#/partner">Partner with us</a></li>
              <li><a href="#/partner#malls">Malls</a></li>
              <li><a href="#/partner#stores">Stores and brands</a></li>
              <li><a href="#/partner#form">Get in touch</a></li>
            </ul>
          </div>
          <div>
            <h4>Learn more</h4>
            <ul>
              <li><a href="#/help">Help and FAQ</a></li>
              <li><a href="#/help#contact">Contact us</a></li>
              <li><a href="#/privacy">Privacy Policy</a></li>
              <li><a href="#/terms">Terms of Use</a></li>
              <li><a href={`mailto:${EMAIL.grievance}`}>Grievance Officer</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} MallO. Hyderabad, India.</span>
          <span>Offers belong to the stores, banks and malls that run them; their terms are final. Brand names belong to their owners. Photos: <a href="#/about#credits">Unsplash</a>.</span>
        </div>
      </div>
    </footer>
  );
}

/** A light page header: text on a soft tint, with a rounded photo beside it. */
export function PageHero({ photoKey, kicker, title, children, tint = 'gold' }: { photoKey: keyof typeof PHOTOS; kicker: string; title: string; children?: React.ReactNode; tint?: 'gold' | 'peach' | 'lilac' | 'mint' | 'sky' }) {
  const p = PHOTOS[photoKey];
  return (
    <section className={`phero tint-${tint}`}>
      <span className="blob b1" aria-hidden="true" />
      <div className="wrap phero-in">
        <div>
          <span className="kicker">{kicker}</span>
          <h1>{title}</h1>
          {children}
        </div>
        <span className="img phero-img"><img src={p.src(1600)} alt={p.alt} loading="eager" decoding="async" onLoad={(e) => e.currentTarget.classList.add('loaded')} /></span>
      </div>
    </section>
  );
}
