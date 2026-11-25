import { useEffect, useState } from 'react';
import { Icon } from './ui';

type Demo = { q: string; results: { l: string; name: string; where: string; why: string; open?: boolean }[]; steps: string[]; to: string };

const DEMOS: Demo[] = [
  {
    q: 'Where did I park?',
    results: [{ l: 'P', name: 'Your car', where: 'Level B2 · Pillar 14', why: 'Saved at 6:40 pm' }],
    to: 'your car',
    steps: ['Take lift 3 by Lifestyle', 'Go down to B2', 'Pillar 14 is on your left'],
  },
  {
    q: 'Croma offers on iPhone?',
    results: [
      { l: 'C', name: 'Croma', where: 'Level 1', why: 'Bank offer on iPhone · ends Sun', open: true },
      { l: 'C', name: 'Croma', where: 'Level 1', why: 'Exchange offer · ends 30 Nov', open: true },
    ],
    to: 'Croma',
    steps: ['Take the escalator by the fountain', 'Turn right on Level 1', 'Croma is the third store'],
  },
  {
    q: 'Nearest washroom?',
    results: [
      { l: '♿', name: 'Washroom', where: 'Level 2 · 40 m', why: 'Accessible washroom too' },
    ],
    to: 'the washroom',
    steps: ['Walk towards the food court', 'Turn left after Starbucks', 'Washrooms are at the end'],
  },
  {
    q: 'Biryani under ₹300?',
    results: [
      { l: 'P', name: 'Paradise', where: 'Level 3 · Food court', why: 'Biryani and a drink for ₹299', open: true },
    ],
    to: 'Paradise',
    steps: ['Take the escalator to Level 3', 'Walk into the food court', 'Third counter on your left'],
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
              <div><b>{r.name}</b><small>{r.where}{r.open && <> · <em>Open until 10 pm</em></>}</small><span className="swhy">{r.why}</span></div>
            </div>
          ))}
          <div className="ssteps" style={{ transitionDelay: '260ms' }}>
            <b>{d.to === 'your car' ? 'Back to your car' : `How to get to ${d.to}`}</b>
            <ol>{d.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}
