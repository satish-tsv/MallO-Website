import { useEffect, useState } from 'react';
import { CITIES, PHOTOS, SHOPPER_FAQ } from '../content';
import { Accordion, Icon, Img, Reveal, StoreButtons } from '../components/ui';
import { PhoneDemo } from '../components/PhoneDemo';

/** Scales the phone mock so each section fits one laptop screen. */
function usePhoneScale() {
  useEffect(() => {
    const set = () => {
      const s = Math.max(0.55, Math.min(0.9, (innerHeight - 190) / 660));
      document.documentElement.style.setProperty('--ps', String(s));
    };
    set();
    addEventListener('resize', set);
    return () => removeEventListener('resize', set);
  }, []);
}

function CityPicker() {
  const [city, setCity] = useState(CITIES[0].city);
  const cur = CITIES.find((c) => c.city === city)!;
  return (
    <div className="city">
      <p className="city-q" id="cityq">Choose your city</p>
      <div className="city-tabs" role="radiogroup" aria-labelledby="cityq">
        {CITIES.map((c) => (
          <button key={c.city} role="radio" aria-checked={c.city === city} onClick={() => setCity(c.city)}>{c.city}</button>
        ))}
      </div>
      <p className="city-live" aria-live="polite">
        <b className="dot green" /> MallO is live in {cur.malls.length} malls in {cur.city}:
      </p>
      <ul className="city-malls" key={city}>
        {cur.malls.map((m, k) => <li key={m.name} style={{ animationDelay: `${k * 60}ms` }}><b>{m.name}</b><span>{m.area}</span></li>)}
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <section className="frame hero">
      <span className="blob b1" aria-hidden="true" />
      <span className="blob b2" aria-hidden="true" />
      <span className="blob b3" aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero-txt">
          <Reveal><h1>Your mall visit, <span className="hl">made simple.</span></h1></Reveal>
          <Reveal delay={80}><p className="lead">Find what you need, get there easily, and win rewards every time you shop. Free on Android and iPhone.</p></Reveal>
          <Reveal delay={160}>
            <ul className="perks">
              <li><span className="mic c-sky"><Icon name="search" /></span><div><b>Find it fast</b><small>Stores, food, offers and washrooms in one search</small></div></li>
              <li><span className="mic c-mint"><Icon name="map" /></span><div><b>Get there easily</b><small>Clear steps from landmarks you can see</small></div></li>
              <li><span className="mic c-peach"><Icon name="gift" /></span><div><b>Win rewards</b><small>Points on every bill. Redeem them for gift cards</small></div></li>
            </ul>
          </Reveal>
          <Reveal delay={240}><StoreButtons /></Reveal>
        </div>
        <Reveal className="hero-art" delay={120}>
          <Img photo={PHOTOS.atrium} w={1600} className="ha-photo a" eager />
          <Img photo={PHOTOS.biryani} w={800} className="ha-photo b" eager />
          <div className="ha-phone"><PhoneDemo /></div>
          <span className="float f1"><b className="dot green" />Open until 10 pm</span>
          <span className="float f2"><Icon name="tag" size={16} />Offer ends today</span>
          <span className="float f3"><Icon name="gift" size={16} />+50 points</span>
        </Reveal>
      </div>
    </section>
  );
}

const EXPLORE = [
  { p: PHOTOS.bags, t: 'Stores and brands', s: 'Every store, its floor and its hours. Search by brand or by what you need.', c: 'c-gold' },
  { p: PHOTOS.biryani, t: 'Food and cafés', s: 'From the food court to a quiet coffee. See what’s open right now.', c: 'c-peach' },
  { p: PHOTOS.escalator, t: 'Offers you can trust', s: 'Whose offer it is, when it ends and when we last checked it.', c: 'c-lilac' },
];

const MORE = [
  { i: 'map' as const, t: 'Text directions', s: 'Steps from landmarks you can see, plus a simple 3D map.', c: 'c-sky' },
  { i: 'pin' as const, t: 'Facilities', s: 'Washrooms, accessible washrooms, first aid, prayer room, ATMs.', c: 'c-mint' },
  { i: 'park' as const, t: 'Parking note', s: 'Save your level and spot. It stays on your phone.', c: 'c-gold' },
  { i: 'chat' as const, t: 'Ask AI', s: '“A gift under ₹1,000?” Answers from the mall’s own listings.', c: 'c-lilac' },
  { i: 'clock' as const, t: 'Real hours', s: '“Open until 10 pm”, worked out on your phone.', c: 'c-peach' },
  { i: 'users' as const, t: 'Invite friends', s: 'You both get 100 points when a friend joins.', c: 'c-sky' },
];

const MOMENTS = [
  { p: PHOTOS.walk, t: 'The big weekend outing', s: 'Plan the stores, the food court and the movie, without walking in circles.', c: 'c-mint' },
  { p: PHOTOS.chandelier, t: 'Festive shopping', s: 'The season’s offers in one place, with their end dates.', c: 'c-gold' },
  { p: PHOTOS.cafe, t: 'A quick coffee break', s: 'What’s open, where it is, and the quickest way there.', c: 'c-peach' },
];

const STEPS = [
  { i: 'store' as const, t: 'Shop', s: 'At any store in the mall', c: 'c-sky' },
  { i: 'phone' as const, t: 'Scan your bill', s: 'Within 7 days, in the app', c: 'c-lilac' },
  { i: 'check' as const, t: 'Earn points', s: '50 points for every ₹1,000', c: 'c-mint' },
  { i: 'gift' as const, t: 'Redeem', s: 'Points for gift cards', c: 'c-peach' },
];

const GIFTS = [
  { t: 'Fashion', v: '₹500', c: 'g1' },
  { t: 'Food', v: '₹250', c: 'g2' },
  { t: 'Electronics', v: '₹1,000', c: 'g3' },
];

export function Home() {
  usePhoneScale();
  return (
    <>
      <Hero />

      <section className="frame" id="explore">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Explore what’s inside</span><h2>Everything in the mall, in one app.</h2></Reveal>
          <div className="explore">
            {EXPLORE.map((e, k) => (
              <Reveal key={e.t} delay={k * 90} className={`ecard ${e.c}`}>
                <Img photo={e.p} w={800} className="ecard-img" />
                <span className="ecard-body"><b>{e.t}</b><span>{e.s}</span></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="frame tint-mint">
        <div className="wrap split2">
          <div>
            <Reveal><span className="kicker">And everything else</span><h2>The little things, sorted.</h2></Reveal>
            <div className="more">
              {MORE.map((m, k) => (
                <Reveal key={m.t} delay={k * 50} className="mitem">
                  <span className={`mic ${m.c}`}><Icon name={m.i} /></span>
                  <div><b>{m.t}</b><span>{m.s}</span></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}><Img photo={PHOTOS.gallery} w={1600} className="frame-photo" /></Reveal>
        </div>
      </section>

      <section className="frame tint-sky" id="how">
        <div className="wrap how">
          <div>
            <Reveal><span className="kicker">How it works</span><h2>From “where is it?” to “there it is.”</h2></Reveal>
            <ol className="hsteps">
              {[
                ['Pick your mall', 'Choose it once. If you allow location, MallO suggests the nearest one. Your location never leaves your phone.'],
                ['Ask in your own words', '“Kids shoes”, “biryani”, “ATM”. One search finds stores, food, offers and facilities, and says why each one matched.'],
                ['Follow the steps', 'Clear directions from landmarks you can see: the lift, the escalator, the fountain.'],
              ].map(([t, s], k) => (
                <Reveal as="li" key={t} delay={k * 100}><span className="n">{k + 1}</span><div><b>{t}</b><p>{s}</p></div></Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="howart" delay={120}>
            <Img photo={PHOTOS.storefront} w={1600} className="howphoto" />
            <div className="howphone"><PhoneDemo /></div>
          </Reveal>
        </div>
      </section>

      <section className="frame">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Made for how you shop</span><h2>Every kind of mall visit, made easier.</h2></Reveal>
          <div className="moments">
            {MOMENTS.map((m, k) => (
              <Reveal key={m.t} delay={k * 90} className={`moment ${m.c}`}>
                <Img photo={m.p} w={800} className="moment-img" />
                <span className="moment-txt"><b>{m.t}</b><span>{m.s}</span></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="frame tint-gold" id="points">
        <div className="wrap ptsv2">
          <div>
            <Reveal><span className="kicker">MallO points</span><h2>Shop, scan, earn.<br />Redeem gift cards.</h2></Reveal>
            <Reveal delay={60}><p className="lead">Every eligible bill from a store in the mall earns points. Redeem them for gift cards.</p></Reveal>
            <ol className="ptrack">
              {STEPS.map((s, k) => (
                <Reveal as="li" key={s.t} delay={k * 90}>
                  <span className={`mic ${s.c}`}><Icon name={s.i} /></span>
                  <b>{s.t}</b><small>{s.s}</small>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200} className="pchips">
              <span><b>+50</b> when you sign in</span>
              <span><b>+100</b> every 5th bill</span>
              <span><b>+600</b> for each friend</span>
            </Reveal>
          </div>
          <Reveal className="wallet" delay={120}>
            <div className="pcard">
              <span className="pcard-top">MallO points <Icon name="gift" size={18} /></span>
              <span className="pcard-num">1,250</span>
              <span className="pcard-sub">= ₹125 on gift cards · 10 points = ₹1</span>
            </div>
            <div className="gcards">
              {GIFTS.map((g) => (
                <div key={g.t} className={`gcard ${g.c}`}>
                  <span>Gift card</span><b>{g.v}</b><small>{g.t}</small>
                </div>
              ))}
            </div>
            <p className="fine">Example balance. Points have no cash value and can’t be withdrawn. Full rules are in the app.</p>
          </Reveal>
        </div>
      </section>

      <section className="frame" id="get">
        <div className="wrap getapp">
          <Reveal className="get-txt">
            <span className="kicker">Get the app</span>
            <h2>Get MallO on Android and iPhone.</h2>
            <p className="lead">Free to download. Pick your mall and start exploring, with no sign-up needed.</p>
            <StoreButtons />
            <ul className="ticks">
              <li><Icon name="check" size={18} /> Free, with no ads</li>
              <li><Icon name="check" size={18} /> Works on weak signal</li>
              <li><Icon name="check" size={18} /> Your location and searches stay on your phone</li>
            </ul>
          </Reveal>
          <Reveal className="get-art" delay={120}>
            <Img photo={PHOTOS.phone} w={1600} className="get-img" />
            <span className="get-badge"><Icon name="phone" size={20} /><span><b>Android and iPhone</b><small>Free to download</small></span></span>
          </Reveal>
        </div>
      </section>

      <section className="frame tint-lilac">
        <div className="wrap faqwrap">
          <Reveal><span className="kicker">Questions</span><h2>Good to know.</h2><p className="muted">More answers on the <a href="#/help">Help</a> page.</p></Reveal>
          <Accordion items={SHOPPER_FAQ.slice(0, 5)} />
        </div>
      </section>

      <section className="frame tint-peach" id="cities">
        <div className="wrap split2">
          <Reveal>
            <span className="kicker">Where MallO is live</span>
            <h2>Find MallO in your city.</h2>
            <p className="lead">Pick your city to see the malls where you can use MallO today. We’re adding more malls all the time.</p>
          </Reveal>
          <Reveal delay={100}><CityPicker /></Reveal>
        </div>
      </section>

      <section className="frame">
        <div className="wrap pband">
          <div className="pband-txt">
            <span className="kicker">Partner with us</span>
            <h2>Run a mall, a store or a brand?</h2>
            <p className="lead">Be found by shoppers who are already inside the mall. Listing is free.</p>
            <a className="btn pri" href="#/partner">Partner with MallO <Icon name="arrow" size={18} /></a>
          </div>
          <Img photo={PHOTOS.boutique} w={1600} className="pband-img" />
        </div>
      </section>
    </>
  );
}
