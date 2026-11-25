import { EMAIL, PHOTOS, SHOPPER_FAQ } from '../content';
import { Accordion, Icon, Img, Reveal } from '../components/ui';
import { PageHero } from '../components/layout';

const VALUES = [
  { i: 'clock' as const, t: 'Quick', s: 'The answer comes first. Three taps or fewer to anything you need.' },
  { i: 'chat' as const, t: 'Plain', s: 'Everyday words and a calm screen, for every age and every comfort with apps.' },
  { i: 'shield' as const, t: 'Honest', s: 'We say what we know and when we checked it. No made-up walking times, ratings or “popular” labels.' },
  { i: 'users' as const, t: 'Warm', s: 'Friendly and local, never loud. Marigold is the colour of an Indian welcome.' },
];

export function About() {
  return (
    <>
      <PageHero photoKey="chandelier" kicker="About MallO" title="Built in Hyderabad, for the mall you’re in." tint="mint">
        <p className="lead">Big malls are wonderful, and easy to get lost in. MallO started with the question every shopper asks: “where do I go?” We’re an app-first team building the simplest way to answer it.</p>
      </PageHero>

      <section className="sec">
        <div className="wrap split2">
          <div>
            <Reveal><span className="kicker">Our story</span><h2>A guide in every visitor’s pocket.</h2></Reveal>
            <Reveal><p className="lead">Malls keep getting bigger: more floors, more stores, more food and more offers. Signs and help desks can only do so much. MallO puts the whole mall on your phone, in plain words, with honest answers and clear steps.</p>
            <p className="muted">We’re starting with large malls in Hyderabad, on Android and iPhone, and will add more cities over time.</p></Reveal>
          </div>
          <Reveal delay={100}><Img photo={PHOTOS.gallery} w={1200} className="rounded tallimg" /></Reveal>
        </div>
      </section>

      <section className="sec tint-gold">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">What we stand for</span><h2>Quick. Plain. Honest. Warm.</h2></Reveal>
          <div className="values">
            {VALUES.map((v, k) => <Reveal key={v.t} delay={k * 70} className="wcard"><span className="mic gold"><Icon name={v.i} /></span><b>{v.t}</b><p>{v.s}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Our promise on privacy</span><h2>Your mall visit is your business.</h2></Reveal>
          <div className="promise">
            {[
              ['No account needed', 'Find your way, see offers and save a parking note without signing in.'],
              ['Stays on your phone', 'Your location, searches and parking note never leave your phone.'],
              ['Only what’s needed', 'If you sign in for points, we keep only what that needs, and you can delete your account in the app.'],
              ['No ads', 'Results are ordered by what you asked for, not by who paid.'],
            ].map(([t, s], k) => <Reveal key={t} delay={k * 70} className="prom"><Icon name="check" size={20} /><div><b>{t}</b><p>{s}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sec tint-sky" id="credits">
        <div className="wrap">
          <h2 className="h3">Photo credits</h2>
          <p className="muted small">Photos used under the Unsplash License. Thank you to:</p>
          <ul className="credits">
            {Object.values(PHOTOS).map((p) => <li key={p.page}><a href={p.page} target="_blank" rel="noopener noreferrer">{p.credit}</a> · {p.alt}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}

export function Help() {
  return (
    <>
      <PageHero photoKey="cafe" kicker="Help" title="How can we help?" tint="sky">
        <p className="lead">Answers to common questions, and how to reach us.</p>
      </PageHero>
      <section className="sec">
        <div className="wrap faqwrap">
          <Reveal><span className="kicker">For shoppers</span><h2>Frequently asked.</h2></Reveal>
          <Accordion items={SHOPPER_FAQ} />
        </div>
      </section>
      <section className="sec tint-peach" id="contact">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Contact</span><h2>Write to us.</h2></Reveal>
          <div className="contacts">
            {[
              { i: 'chat' as const, t: 'General', e: EMAIL.hello, s: 'Ideas, press and everything else.' },
              { i: 'phone' as const, t: 'App help', e: EMAIL.help, s: 'Questions about the app, points or your account.' },
              { i: 'store' as const, t: 'Partners', e: EMAIL.partners, s: 'Malls, stores and brands.', link: '#/partner' },
              { i: 'shield' as const, t: 'Grievance Officer', e: EMAIL.grievance, s: 'Complaints about your data or our service.' },
            ].map((c, k) => (
              <Reveal key={c.t} delay={k * 70} className="ccard">
                <span className="mic gold"><Icon name={c.i} /></span>
                <b>{c.t}</b><p>{c.s}</p>
                <a href={`mailto:${c.e}`}>{c.e}</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Terms of Use';
  return (
    <>
      <PageHero photoKey="atrium" kicker="Legal" title={title} tint="lilac" />
      <section className="sec">
        <div className="wrap narrow">
          <p className="lead">Our full {title} will appear here.</p>
          <p className="muted">Until then, if you have a question, write to <a href={`mailto:${EMAIL.grievance}`}>{EMAIL.grievance}</a>.</p>
        </div>
      </section>
    </>
  );
}
