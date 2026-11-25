import { useEffect, useState, type FormEvent } from 'react';
import { EMAIL, PARTNER_FAQ, PHOTOS } from '../content';
import { Accordion, Icon, Img, Reveal } from '../components/ui';
import { PageHero } from '../components/layout';

type Tab = 'malls' | 'stores';

const WHY: Record<Tab, { i: Parameters<typeof Icon>[0]['name']; t: string; s: string }[]> = {
  malls: [
    { i: 'map', t: 'Fewer lost visitors', s: 'Shoppers find stores, facilities and parking themselves, with steps from landmarks they can see.' },
    { i: 'tag', t: 'Your offers and events, seen', s: 'Mall-wide offers, festive campaigns and announcements on the mall’s Home screen, labelled as yours.' },
    { i: 'gift', t: 'A reason to shop across the mall', s: 'Points on bills from your stores encourage people to visit more stores, and to come back.' },
    { i: 'building', t: 'A directory that stays right', s: 'We keep stores, floors, hours and facilities up to date with you, and check every shopper report.' },
    { i: 'users', t: 'Built for everyone', s: 'Large text, screen readers and plain English. Accessible washrooms, lifts and ramps are easy to find.' },
    { i: 'shield', t: 'Private by design', s: 'No tracking of where shoppers walk. Location, searches and parking notes stay on their phone.' },
  ],
  stores: [
    { i: 'search', t: 'Show up in the right searches', s: 'When a shopper searches for what you sell, your store comes up with the reason it matched and the way to your door.' },
    { i: 'tag', t: 'Your offers, front and centre', s: 'Send us your offers. We check them and show them with your name, end date and terms.' },
    { i: 'gift', t: 'Bills that bring shoppers back', s: 'Shoppers earn MallO points on eligible bills from your store, at no cost to you.' },
    { i: 'clock', t: 'Correct hours and details', s: 'Your floor, hours, phone and what you sell, kept right. We only say you “sell” something once you confirm it.' },
    { i: 'phone', t: 'Nothing to install', s: 'No new device and no software for your staff. Just tell us what has changed.' },
    { i: 'store', t: 'Gift card partnerships', s: 'Brands can offer their gift cards to MallO members, who redeem their points for them.' },
  ],
};

const STEPS = [
  { t: 'Tell us about you', s: 'Fill in the form or write to us. We reply within two working days.' },
  { t: 'We set up your listing', s: 'We map your mall or add your store, hours, offers and what you sell, and check it with you.' },
  { t: 'Go live', s: 'Shoppers find you in search, on the map and on the offers page. Send us updates any time.' },
];

const NEED: Record<Tab, string[]> = {
  malls: ['Your mall’s floor plans or directory', 'A list of stores and facilities on each floor', 'A contact for offers and events'],
  stores: ['Your store name and floor', 'Opening hours and a phone number', 'Current offers and their end dates (optional)'],
};

export function Partner() {
  const [tab, setTab] = useState<Tab>('malls');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const sync = () => { if (location.hash.endsWith('#stores')) setTab('stores'); else if (location.hash.endsWith('#malls')) setTab('malls'); };
    sync();
    addEventListener('hashchange', sync);
    return () => removeEventListener('hashchange', sync);
  }, []);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get('name')}\nI represent: ${f.get('who')}\nOrganisation: ${f.get('org')}\nCity: ${f.get('city')}\nContact: ${f.get('contact')}\n\n${f.get('msg') || ''}`;
    location.href = `mailto:${EMAIL.partners}?subject=${encodeURIComponent(`MallO partner enquiry: ${f.get('org')}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <>
      <PageHero photoKey="storefront" kicker="Partner with us" title="Be found by shoppers who are already in the mall." tint="peach">
        <p className="lead">MallO is the guide in every visitor’s pocket. Partner with us to make your mall easier to explore, or to put your store in front of shoppers a few steps away.</p>
        <div className="ctas"><a className="btn pri" href="#/partner#form">Get in touch</a><a className="btn ghost" href="#/partner#why">See the benefits</a></div>
      </PageHero>

      <section className="sec" id="why">
        <div className="wrap">
          <Reveal className="head center"><span className="kicker">Why partner with MallO</span><h2>Good for your visitors. Good for business.</h2></Reveal>
          <div className="tabs" role="tablist" aria-label="Partner type">
            <button role="tab" id="t-malls" aria-selected={tab === 'malls'} aria-controls="p-why" onClick={() => setTab('malls')}><Icon name="building" size={18} /> For malls</button>
            <button role="tab" id="t-stores" aria-selected={tab === 'stores'} aria-controls="p-why" onClick={() => setTab('stores')}><Icon name="store" size={18} /> For stores and brands</button>
          </div>
          <span id="malls" className="anchor" /><span id="stores" className="anchor" />
          <div className="whygrid" id="p-why" role="tabpanel" aria-labelledby={`t-${tab}`} key={tab}>
            {WHY[tab].map((w, k) => (
              <div className="wcard pop" key={w.t} style={{ animationDelay: `${k * 50}ms` }}>
                <span className="mic gold"><Icon name={w.i} /></span><b>{w.t}</b><p>{w.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tint-mint">
        <div className="wrap split2">
          <Reveal className="imgstack">
            <Img photo={PHOTOS.boutique} w={1000} className="is-a" />
            <Img photo={PHOTOS.gallery} w={900} className="is-b" />
          </Reveal>
          <div>
            <Reveal><span className="kicker">How it works</span><h2>Live in three simple steps.</h2></Reveal>
            <ol className="hsteps">
              {STEPS.map((s, k) => <Reveal as="li" key={s.t} delay={k * 100}><span className="n">{k + 1}</span><div><b>{s.t}</b><p>{s.s}</p></div></Reveal>)}
            </ol>
            <Reveal className="need">
              <b>What you’ll need ({tab === 'malls' ? 'malls' : 'stores'})</b>
              <ul>{NEED[tab].map((n) => <li key={n}><Icon name="check" size={18} /> {n}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap faqwrap">
          <Reveal><span className="kicker">Partner FAQ</span><h2>Questions from partners.</h2></Reveal>
          <Accordion items={PARTNER_FAQ} />
        </div>
      </section>

      <section className="sec tint-lilac" id="form">
        <div className="wrap formwrap">
          <Reveal>
            <span className="kicker">Get in touch</span>
            <h2>Let’s bring MallO to your mall or store.</h2>
            <p className="lead">Tell us a little about you and we’ll get back within two working days.</p>
            <a className="maillink" href={`mailto:${EMAIL.partners}`}><Icon name="chat" size={18} /> {EMAIL.partners}</a>
          </Reveal>
          <Reveal delay={100}>
            <form className="pform" onSubmit={submit}>
              <div className="row2">
                <label>Your name<input name="name" required autoComplete="name" /></label>
                <label>I represent<select name="who" required defaultValue=""><option value="" disabled>Choose one</option><option>A mall</option><option>A store</option><option>A brand</option><option>Something else</option></select></label>
              </div>
              <div className="row2">
                <label>Mall, store or brand name<input name="org" required /></label>
                <label>City<input name="city" /></label>
              </div>
              <label>Email or phone<input name="contact" required autoComplete="email" /></label>
              <label>Message<textarea name="msg" rows={4} placeholder="Tell us about your mall, store or brand" /></label>
              <button className="btn pri wide">Send enquiry</button>
              <p className="formnote" aria-live="polite">{sent ? 'Your email app should open with your message filled in. If it doesn’t, write to ' + EMAIL.partners + '.' : 'This opens your email app with your message filled in. We only use your details to reply.'}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
