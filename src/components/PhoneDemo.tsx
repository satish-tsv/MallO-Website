import { useEffect, useState } from 'react';
import { Icon } from './ui';

type Demo = { q: string; results: { l: string; name: string; where: string; why: string }[]; steps: string[]; to: string };

const DEMOS: Demo[] = [
  {
    q: 'running shoes',
    results: [
      { l: 'N', name: 'Nike', where: 'Level 2', why: 'Sells running shoes' },
      { l: 'D', name: 'Decathlon', where: 'Level 1', why: 'Usually stocks sports shoes' },
    ],
    to: 'Nike',
    steps: ['Take the lift by the food court to Level 2', 'Turn left and walk past the fountain', 'Nike is on your right, opposite Zara'],
  },
  {
    q: 'biryani',
    results: [
      { l: 'P', name: 'Paradise', where: 'Level 3 · Food court', why: 'Biryani and a drink for ₹299' },
      { l: 'S', name: 'Spice Route', where: 'Level 3 · Food court', why: 'Serves Hyderabadi biryani' },
    ],
    to: 'Paradise',
    steps: ['Take the escalator by Lifestyle to Level 3', 'Walk into the food court', 'Paradise is the third counter on your left'],
  },
  {
    q: 'baby care room',
    results: [
      { l: '♡', name: 'Baby care room', where: 'Level 1', why: 'Facility' },
      { l: '♡', name: 'Baby care room', where: 'Level 3', why: 'Facility' },
    ],
    to: 'the baby care room',
    steps: ['Walk towards the main lifts on Level 1', 'Turn right after the washrooms', 'The baby care room is at the end of the corridor'],
  },
];

const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function PhoneDemo() {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(reduce ? DEMOS[0].q : '');
  const d = DEMOS[i];
  useEffect(() => {
    if (reduce) return;
    let n = 0;
    setTyped('');
    const t = setInterval(() => {
      n++;
      setTyped(d.q.slice(0, n));
      if (n >= d.q.length) clearInterval(t);
    }, 70);
    const next = setTimeout(() => setI((x) => (x + 1) % DEMOS.length), 6500);
    return () => { clearInterval(t); clearTimeout(next); };
  }, [i]);
  const done = typed === d.q;
  return (
    <div className="phone" role="img" aria-label={`The MallO app: a search for ${d.q} shows ${d.results[0].name} on ${d.results[0].where}, with steps to get there`}>
      <div className="notch" />
      <div className="screen" aria-hidden="true">
        <div className="srow"><span className="schip">Your mall ▾</span><span className="schip">Map</span></div>
        <div className="shi">What do you need today?</div>
        <div className="ssearch"><span>{typed}<i className="caret" /></span><b><Icon name="search" size={15} /></b></div>
        <div className={`sres ${done ? 'in' : ''}`}>
          {d.results.map((r, k) => (
            <div className="sitem" key={r.name + k} style={{ transitionDelay: `${k * 120}ms` }}>
              <span className="slogo">{r.l}</span>
              <div><b>{r.name}</b><small>{r.where} · <em>Open until 10 pm</em></small><span className="swhy">{r.why}</span></div>
            </div>
          ))}
          <div className="ssteps" style={{ transitionDelay: '260ms' }}>
            <b>How to get to {d.to}</b>
            <ol>{d.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}
