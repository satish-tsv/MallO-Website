import { useEffect, useState } from 'react';
import { Icon } from './ui';
import { Illo } from './Illo';

const reduce = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Left panel: type a store into the map search, see it pinned on the mall map with simple steps. */
export function MapSearch() {
  const word = 'Croma';
  const [n, setN] = useState(reduce() ? word.length : 0);
  useEffect(() => {
    if (reduce()) return;
    let k = 0;
    const t = setInterval(() => {
      k = (k + 1) % (word.length + 14); // type, then hold, then start again
      setN(Math.min(k, word.length));
    }, 260);
    return () => clearInterval(t);
  }, []);
  const found = n === word.length;
  return (
    <div className="panel mappanel" role="img" aria-label="MallO map search: Croma is pinned on Level 1, with steps to get there">
      <div className="panel-top"><span className="schip">Level 1 ▾</span><span className="schip">2D · 3D</span></div>
      <div className="ssearch" aria-hidden="true"><span>{word.slice(0, n)}<i className="caret" /></span><b><Icon name="search" size={15} /></b></div>
      <svg className={`mallmap ${found ? 'found' : ''}`} viewBox="0 0 260 170" aria-hidden="true">
        <rect x="4" y="4" width="252" height="162" rx="18" fill="#fff" stroke="#E6E6EB" strokeWidth="2" />
        <rect x="20" y="72" width="220" height="26" rx="8" fill="#F1F1F4" />
        <rect x="116" y="18" width="28" height="134" rx="8" fill="#F1F1F4" />
        <g fontSize="9" fontWeight="600" fill="#62636E">
          <rect x="20" y="18" width="86" height="46" rx="8" fill="#FFF3D0" /><text x="32" y="45">Lifestyle</text>
          <rect x="154" y="18" width="86" height="46" rx="8" fill="#E1F0FF" /><text x="166" y="45">Food court</text>
          <rect x="20" y="106" width="86" height="46" rx="8" fill="#DDF5EA" /><text x="36" y="133">Fountain</text>
          <rect x="154" y="106" width="86" height="46" rx="8" fill="#F1F1F4" className="mdest" /><text x="180" y="133" fill="#17171C">Croma</text>
          <rect x="118" y="77" width="24" height="16" rx="4" fill="#fff" stroke="#17171C" strokeWidth="1.5" /><text x="122" y="88" fontSize="7">Lift</text>
        </g>
        <g className="myou"><circle cx="60" cy="85" r="14" fill="#7CC4FF" opacity=".35" /><circle cx="60" cy="85" r="6" fill="#1d5fc4" stroke="#fff" strokeWidth="2" /></g>
        <g className="mpin"><path d="M197 100s-11-10-11-18a11 11 0 0 1 22 0c0 8-11 18-11 18z" fill="#FFB300" stroke="#17171C" strokeWidth="2" /><circle cx="197" cy="82" r="4" fill="#17171C" /></g>
      </svg>
      <div className={`ssteps ${found ? 'in' : ''}`} aria-hidden="true">
        <b>Croma · Level 1</b>
        <ol><li>Walk past the fountain</li><li>Turn right at the lift</li><li>Croma is on your right</li></ol>
      </div>
    </div>
  );
}

type Msg = { me?: boolean; text?: string; cards?: { icon: Parameters<typeof Illo>[0]['name']; t: string; s: string; cta: string }[] };
const CHAT: Msg[] = [
  { me: true, text: 'Gift for my dad under ₹2,000?' },
  { text: 'Here are a few ideas:', cards: [
    { icon: 'store', t: 'Titan · Level 2', s: 'Watches from ₹1,500', cta: 'Open' },
    { icon: 'gift', t: 'Archies · Level 1', s: 'Gift sets', cta: 'Open' },
  ] },
  { me: true, text: 'Nearest washroom?' },
  { text: 'The closest one:', cards: [{ icon: 'washroom', t: 'Washrooms · Level 1', s: 'Near the food court', cta: 'Show on map' }] },
];

/** Right panel: a short Ask AI conversation that plays out, then restarts. */
export function AskChat() {
  const [n, setN] = useState(reduce() ? CHAT.length : 0);
  useEffect(() => {
    if (reduce()) return;
    let k = 0;
    const t = setInterval(() => { k = (k + 1) % (CHAT.length + 3); setN(Math.min(k, CHAT.length)); }, 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="panel chatpanel" role="img" aria-label="Ask AI: a shopper asks for a gift for their dad under ₹2,000 and for the nearest washroom; MallO replies with stores and the washroom, each with a button to open it">
      <div className="panel-top"><span className="chat-title"><Illo name="ai" size={26} /> Ask MallO</span><span className="schip">AI</span></div>
      <div className="chat" aria-hidden="true">
        {CHAT.slice(0, n).map((m, k) => (
          <div key={k} className={`bubble ${m.me ? 'me' : 'bot'}`}>
            {m.text && <p>{m.text}</p>}
            {m.cards?.map((c) => (
              <div key={c.t} className="ccardx"><Illo name={c.icon} size={30} /><span><b>{c.t}</b><small>{c.s}</small></span><em>{c.cta}</em></div>
            ))}
          </div>
        ))}
        {n < CHAT.length && n % 2 === 1 && <div className="bubble bot typing"><i /><i /><i /></div>}
      </div>
      <div className="chat-input" aria-hidden="true"><span>Ask anything about this mall…</span><b><Icon name="arrow" size={15} /></b></div>
    </div>
  );
}
