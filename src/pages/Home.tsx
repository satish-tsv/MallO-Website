import { PHOTOS, POINTS, SHOPPER_FAQ } from '../content';
import { Accordion, Icon, Img, Reveal, StoreButtons } from '../components/ui';
import { PhoneDemo } from '../components/PhoneDemo';

function Hero() {
  return (
    <section className="hero">
      <span className="blob b1" aria-hidden="true" />
      <span className="blob b2" aria-hidden="true" />
      <span className="blob b3" aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero-txt">
          <Reveal><span className="pill"><i />Now in Hyderabad · Android and iPhone</span></Reveal>
          <Reveal delay={80}><h1>Your mall, <span className="hl">made simple.</span></h1></Reveal>
          <Reveal delay={160}><p className="lead">Find any store, food, offer or washroom in your mall, with clear steps to get there. In three taps or fewer, and free.</p></Reveal>
          <Reveal delay={240}><StoreButtons /></Reveal>
          <Reveal delay={300}><p className="small muted">Free. No account needed to find your way.</p></Reveal>
        </div>
        <Reveal className="hero-art" delay={120}>
          <Img photo={PHOTOS.atrium} w={1100} className="ha-photo a" eager />
          <Img photo={PHOTOS.biryani} w={700} className="ha-photo b" eager />
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
  { i: 'gift' as const, t: 'Points on bills', s: 'Scan eligible bills and redeem points for gift cards.', c: 'c-peach' },
  { i: 'users' as const, t: 'Invite friends', s: 'You both get 100 points when a friend joins.', c: 'c-sky' },
];

const MOMENTS = [
  { p: PHOTOS.walk, t: 'The big weekend outing', s: 'Plan the stores, the food court and the movie, without walking in circles.', c: 'c-mint' },
  { p: PHOTOS.chandelier, t: 'Festive shopping', s: 'The season’s offers in one place, with their end dates.', c: 'c-gold' },
  { p: PHOTOS.cafe, t: 'A quick coffee break', s: 'What’s open, where it is, and the quickest way there.', c: 'c-peach' },
];

export function Home() {
  return (
    <>
      <Hero />

      <section className="sec" id="explore">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Explore what’s inside</span><h2>Everything in the mall, in one app.</h2></Reveal>
          <div className="explore">
            {EXPLORE.map((e, k) => (
              <Reveal key={e.t} delay={k * 90} className={`ecard ${e.c}`}>
                <Img photo={e.p} w={900} className="ecard-img" />
                <span className="ecard-body"><b>{e.t}</b><span>{e.s}</span></span>
              </Reveal>
            ))}
          </div>
          <div className="more">
            {MORE.map((m, k) => (
              <Reveal key={m.t} delay={k * 50} className="mitem">
                <span className={`mic ${m.c}`}><Icon name={m.i} /></span>
                <div><b>{m.t}</b><span>{m.s}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tint-sky" id="how">
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
            <Img photo={PHOTOS.gallery} w={1000} className="howphoto" />
            <div className="howphone"><PhoneDemo /></div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Made for how you shop</span><h2>Every kind of mall visit, made easier.</h2></Reveal>
          <div className="moments">
            {MOMENTS.map((m, k) => (
              <Reveal key={m.t} delay={k * 90} className={`moment ${m.c}`}>
                <Img photo={m.p} w={1000} className="moment-img" />
                <span className="moment-txt"><b>{m.t}</b><span>{m.s}</span></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tint-gold" id="points">
        <div className="wrap pointswrap">
          <Reveal className="head">
            <span className="kicker">MallO points</span>
            <h2>Shop the way you always do. Get a little back.</h2>
            <p className="lead">Sign in with your phone number, scan your bill within 7 days, and we check it. Points are for gift cards from partner brands. MallO never holds your money.</p>
          </Reveal>
          <div className="pts">
            {POINTS.map((p, k) => (
              <Reveal key={p.title} delay={k * 80} className="pt"><span className="big">{p.big}</span><b>{p.title}</b><p>{p.text}</p></Reveal>
            ))}
          </div>
          <p className="fine">Limits, expiry and full rules are shown in the app. Points have no cash value and can’t be withdrawn.</p>
        </div>
      </section>

      <section className="sec" id="get">
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
            <Img photo={PHOTOS.phone} w={1100} className="get-img" />
            <span className="get-badge"><Icon name="phone" size={20} /><span><b>Android and iPhone</b><small>Free to download</small></span></span>
          </Reveal>
        </div>
      </section>

      <section className="sec tint-lilac">
        <div className="wrap faqwrap">
          <Reveal><span className="kicker">Questions</span><h2>Good to know.</h2><p className="muted">More answers on the <a href="#/help">Help</a> page.</p></Reveal>
          <Accordion items={SHOPPER_FAQ.slice(0, 4)} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap pband">
          <div className="pband-txt">
            <span className="kicker">Partner with us</span>
            <h2>Run a mall, a store or a brand?</h2>
            <p className="lead">Be found by shoppers who are already inside the mall. Listing is free.</p>
            <a className="btn pri" href="#/partner">Partner with MallO <Icon name="arrow" size={18} /></a>
          </div>
          <Img photo={PHOTOS.storefront} w={1200} className="pband-img" />
        </div>
      </section>
    </>
  );
}
