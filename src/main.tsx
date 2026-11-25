import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Footer, Nav, type Route } from './components/layout';
import { Home } from './pages/Home';
import { Partner } from './pages/Partner';
import { About, Help, Legal } from './pages/Other';

type Loc = { page: Route | 'privacy' | 'terms'; anchor: string };

// Hash routes: "#/partner#form" → page "partner", anchor "form". "#/get" is the Home page's app section.
function parse(): Loc {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, anchor = ''] = raw.split('#');
  if (path === 'partner' || path === 'about' || path === 'help' || path === 'privacy' || path === 'terms') return { page: path, anchor };
  if (path === 'get') return { page: 'home', anchor: 'get' };
  return { page: 'home', anchor };
}

const TITLES: Record<Loc['page'], string> = {
  home: 'MallO · Your mall, made simple',
  partner: 'Partner with MallO',
  about: 'About MallO',
  help: 'Help · MallO',
  privacy: 'Privacy Policy · MallO',
  terms: 'Terms of Use · MallO',
};

function App() {
  const [loc, setLoc] = useState<Loc>(parse);
  useEffect(() => {
    const on = () => setLoc(parse());
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    document.title = TITLES[loc.page];
    const target = loc.anchor ? document.getElementById(loc.anchor) : null;
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
    else window.scrollTo(0, 0);
    const h1 = document.querySelector('main h1') as HTMLElement | null;
    if (h1 && !loc.anchor && location.hash) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); }
  }, [loc.page, loc.anchor]);
  const navRoute: Route = loc.page === 'privacy' || loc.page === 'terms' ? 'help' : loc.page;
  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      <Nav route={navRoute} />
      <main id="main" tabIndex={-1} key={loc.page}>
        {loc.page === 'home' && <Home />}
        {loc.page === 'partner' && <Partner />}
        {loc.page === 'about' && <About />}
        {loc.page === 'help' && <Help />}
        {(loc.page === 'privacy' || loc.page === 'terms') && <Legal kind={loc.page} />}
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
