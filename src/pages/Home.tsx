import { useEffect, useState } from 'react';
import { CITIES, PHOTOS, SHOPPER_FAQ } from '../content';
import { Accordion, Icon, Img, Reveal, StoreButtons } from '../components/ui';
import { Illo, type IlloName } from '../components/Illo';
import { PhoneDemo } from '../components/PhoneDemo';
import { AskChat, MapSearch } from '../components/HowDemos';

const reduceMotion = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Scales the phone mock so each section fits one laptop screen. */
function usePhoneScale() {
  useEffect(() => {
    const set = () => document.documentElement.style.setProperty('--ps', String(Math.max(0.55, Math.min(0.9, (innerHeight - 190) / 660))));
    set();
    addEventListener('resize', set);
    return () => removeEventListener('resize', set);
  }, []);
}

/** Gentle parallax: elements with data-speed drift as the page scrolls. */
function useParallax() {
  useEffect(() => {
    if (reduceMotion()) return;
    let raf = 0;
    const run = () => {
      raf = 0;
      document.querySelectorAll<HTMLElement>('[data-speed]').forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        const mid = r.top + r.height / 2 - innerHeight / 2;
        el.style.translate = `0 ${(-mid * Number(el.dataset.speed)).toFixed(1)}px`;
      });
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
}

/** Cycles 0..n-1 every `ms`, pausing when asked or when the user prefers less motion. */
function useCycle(n: number, ms: number, paused = false) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused || reduceMotion()) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), ms);
    return () => clearInterval(t);
  }, [n, ms, paused]);
  return [i, setI] as const;
}

/* ---------- Hero ---------- */
const QUESTIONS = ['Where did I park?', 'Croma offers on iPhone?', 'Nearest washroom?', 'Biryani under ₹300?', 'Where can kids play?', 'Is Zara open now?'];
const SPOTS = ['q1', 'q2', 'q3'];

/** Shopper questions that pop up around the phone, three at a time. */
function Questions() {
  const [i] = useCycle(QUESTIONS.length, 2400);
  return (
    <div className="qs" aria-hidden="true">
      {SPOTS.map((spot, k) => {
        const q = QUESTIONS[(i + k * 2) % QUESTIONS.length];
        return <span key={spot + q} className={`qbub ${spot}`}>{q}</span>;
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="frame hero">
      <div className="wrap hero-in">
        <div className="hero-txt">
          <Reveal><h1>Your mall visit, made simple.</h1></Reveal>
          <Reveal delay={80}><p className="lead">Find it. Get there. Win rewards.</p></Reveal>
          <Reveal delay={160}>
            <ul className="perks">
              {([['store', 'Every store'], ['map', 'Easy directions'], ['offer', 'Live offers'], ['gift', 'Rewards']] as [IlloName, string][]).map(([n, t]) => (
                <li key={t}><Illo name={n} size={46} /><b>{t}</b></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}><StoreButtons /></Reveal>
        </div>
        <Reveal className="hero-art" delay={120}>
          <span className="ring" aria-hidden="true" />
          <div className="ha-phone"><PhoneDemo /></div>
          <Questions />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Little things: floating tiles around a phone ---------- */
const TILES: { n: IlloName; t: string }[] = [
  { n: 'washroom', t: 'Washrooms' },
  { n: 'lift', t: 'Lifts' },
  { n: 'store', t: 'Stores' },
  { n: 'offer', t: 'Store offers' },
  { n: 'food', t: 'Food court' },
  { n: 'parking', t: 'Parking' },
  { n: 'atm', t: 'ATMs' },
  { n: 'kids', t: 'Kids play' },
];

function Little() {
  const [i] = useCycle(TILES.length, 2200);
  const cur = TILES[i];
  const tile = (x: { n: IlloName; t: string }, k: number, off: boolean) => (
    <div key={x.t} className={`tile ${off ? 'off' : ''} ${i === k ? 'on' : ''}`} style={{ animationDelay: `${k * -0.8}s` }}>
      <Illo name={x.n} size={60} /><span>{x.t}</span>
    </div>
  );
  return (
    <section className="frame tint-soft">
      <div className="wrap">
        <Reveal className="head center"><h2>The little things, sorted.</h2></Reveal>
        <div className="tiles">
          <div className="tcol">{TILES.slice(0, 4).map((x, k) => tile(x, k, k % 2 === 1))}</div>
          <div className="tphone" aria-hidden="true">
            <div className="tphone-notch" />
            <div className="tcenter" key={cur.t}><Illo name={cur.n} size={112} /><b>{cur.t}</b></div>
          </div>
          <div className="tcol">{TILES.slice(4).map((x, k) => tile(x, k + 4, k % 2 === 0))}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Find it: map search, then Ask AI, one at a time ---------- */
const FIND = [
  { h: 'From “where is it?” to “there it is.”', label: 'Search the map', sub: 'Type a store. See it on the map, with simple steps.', icon: 'map' as IlloName },
  { h: 'From “what should I get?” to “got it.”', label: 'Ask MallO', sub: 'Ask for ideas or the best deal. Open the store in a tap.', icon: 'ai' as IlloName },
];

function How() {
  const [hold, setHold] = useState(false);
  const [i, setI] = useCycle(FIND.length, 10000, hold);
  const f = FIND[i];
  return (
    <section className="frame sec-gold" id="how">
      <div className="wrap find" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
        <div className="find-txt">
          <div className="find-tabs" role="tablist" aria-label="Ways to find things">
            {FIND.map((x, k) => (
              <button key={x.label} role="tab" aria-selected={k === i} onClick={() => setI(k)}>
                <Illo name={x.icon} size={24} /> {x.label}
                {k === i && <span className={`find-bar ${hold ? 'held' : ''}`} key={i} />}
              </button>
            ))}
          </div>
          <div key={i} className="find-copy">
            <h2>{f.h}</h2>
            <p className="lead">{f.sub}</p>
          </div>
        </div>
        <div className="find-demo" key={`d${i}`}>{i === 0 ? <MapSearch /> : <AskChat />}</div>
      </div>
    </section>
  );
}

/* ---------- Points ---------- */
const STEPS: { n: IlloName; t: string }[] = [
  { n: 'store', t: 'Shop' },
  { n: 'bill', t: 'Scan your bill' },
  { n: 'points', t: 'Earn points' },
  { n: 'gift', t: 'Redeem gift cards' },
];
const GIFTS = [{ t: 'Fashion', v: '₹500' }, { t: 'Food', v: '₹250' }, { t: 'Electronics', v: '₹1,000' }];

function Points() {
  return (
    <section className="frame tint-soft" id="points">
      <div className="wrap ptsv2">
        <div>
          <Reveal><h2>Shop. Scan. Earn.<br />Redeem gift cards.</h2></Reveal>
          <Reveal delay={60}><p className="lead">50 points for every ₹1,000 you spend.</p></Reveal>
          <ol className="ptrack">
            {STEPS.map((s, k) => <Reveal as="li" key={s.t} delay={k * 90}><Illo name={s.n} size={56} /><b>{s.t}</b></Reveal>)}
          </ol>
          <Reveal delay={200} className="pchips">
            <span><b>+50</b> on sign-in</span>
            <span><b>+100</b> every 5th bill</span>
            <span><b>+600</b> per friend</span>
          </Reveal>
        </div>
        <Reveal className="wallet" delay={120}>
          <div className="pcard">
            <span className="pcard-top">MallO points <Illo name="points" size={30} /></span>
            <span className="pcard-num">1,250</span>
            <span className="pcard-sub">= ₹125 on gift cards</span>
          </div>
          <div className="gcards">
            {GIFTS.map((g) => <div key={g.t} className="gcard"><span>Gift card</span><b>{g.v}</b><small>{g.t}</small></div>)}
          </div>
          <p className="fine">Example balance. Points have no cash value. Full rules in the app.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Cities ---------- */
function Cities() {
  const [city, setCity] = useState(CITIES[0].city);
  const cur = CITIES.find((c) => c.city === city)!;
  return (
    <section className="frame tint-soft" id="cities">
      <div className="wrap split2">
        <Reveal>
          <h2>Find MallO in your city.</h2>
          <p className="lead">More malls added all the time.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="city">
            <div className="city-tabs" role="radiogroup" aria-label="City">
              {CITIES.map((c) => <button key={c.city} role="radio" aria-checked={c.city === city} onClick={() => setCity(c.city)}>{c.city}</button>)}
            </div>
            <p className="city-live" aria-live="polite"><b className="dot green" /> Live in {cur.malls.length} malls in {cur.city}</p>
            <ul className="city-malls" key={city}>
              {cur.malls.map((m, k) => <li key={m.name} style={{ animationDelay: `${k * 60}ms` }}><Illo name="store" size={34} /><span><b>{m.name}</b><small>{m.area}</small></span></li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Home() {
  usePhoneScale();
  useParallax();
  return (
    <>
      <Hero />
      <Little />
      <How />
      <Points />

      <section className="frame" id="get">
        <div className="wrap getapp">
          <Reveal className="get-txt">
            <h2>Get MallO. It’s free.</h2>
            <p className="lead">On Android and iPhone. No sign-up needed.</p>
            <StoreButtons />
            <ul className="ticks">
              <li><Icon name="check" size={18} /> No ads</li>
              <li><Icon name="check" size={18} /> Works on weak signal</li>
              <li><Icon name="check" size={18} /> Your location stays on your phone</li>
            </ul>
          </Reveal>
          <Reveal className="get-art" delay={120}>
            <div className="get-img"><div data-speed="0.1" className="px"><Img photo={PHOTOS.phone} w={1600} /></div></div>
            <span className="get-badge"><Illo name="phone" size={40} /><span><b>Android and iPhone</b><small>Free to download</small></span></span>
          </Reveal>
        </div>
      </section>

      <section className="frame">
        <div className="wrap faqwrap">
          <Reveal><h2>Good to know.</h2><p className="muted">More on the <a href="#/help">Help</a> page.</p></Reveal>
          <Accordion items={SHOPPER_FAQ.slice(0, 5)} />
        </div>
      </section>

      <Cities />

      <section className="frame">
        <div className="wrap pband">
          <div className="pband-txt">
            <Illo name="store" size={72} />
            <h2>Run a mall, a store or a brand?</h2>
            <p className="lead">Reach shoppers already in the mall. Listing is free.</p>
            <a className="btn pri" href="#/partner">Partner with MallO <Icon name="arrow" size={18} /></a>
          </div>
          <div className="pband-img"><div data-speed="0.1" className="px"><Img photo={PHOTOS.boutique} w={1600} /></div></div>
        </div>
      </section>
    </>
  );
}
