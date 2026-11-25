import { Icon } from './ui';

/** A phone showing the three "how it works" screens: pick a mall, ask, then the mall map with text steps. */
export function MapDemo({ step }: { step: number }) {
  return (
    <div className="phone mapphone" role="img" aria-label="The MallO app: choose your mall, ask for Croma, then see Croma on the mall map with steps to get there">
      <div className="notch" />
      <div className="screen" aria-hidden="true">
        <div className={`mscr ${step === 0 ? 'on' : ''}`}>
          <div className="shi">Choose your mall</div>
          {[['Inorbit Mall', 'Madhapur · 1.2 km', true], ['Nexus Hyderabad', 'KPHB · 8 km', false], ['Sarath City Capital Mall', 'Kondapur · 4 km', false]].map(([n, a, sel]) => (
            <div key={String(n)} className={`mrow ${sel ? 'sel' : ''}`}><span className="slogo">{String(n)[0]}</span><div><b>{n}</b><small>{a}</small></div>{sel && <span className="mtick"><Icon name="check" size={14} /></span>}</div>
          ))}
          <p className="mnote">Nearest mall suggested. Your location stays on your phone.</p>
        </div>

        <div className={`mscr ${step === 1 ? 'on' : ''}`}>
          <div className="srow"><span className="schip">Inorbit ▾</span><span className="schip">Map</span></div>
          <div className="ssearch"><span>Croma</span><b><Icon name="search" size={15} /></b></div>
          <div className="sitem"><span className="slogo">C</span><div><b>Croma</b><small>Level 1 · <em>Open until 10 pm</em></small><span className="swhy">Electronics</span></div></div>
          <div className="sitem"><span className="slogo">%</span><div><b>Bank offer on iPhone</b><small>Croma · ends Sun</small></div></div>
        </div>

        <div className={`mscr ${step === 2 ? 'on' : ''}`}>
          <div className="srow"><span className="schip">Level 1 ▾</span><span className="schip">2D · 3D</span></div>
          <svg className="mallmap" viewBox="0 0 260 200">
            <rect x="4" y="4" width="252" height="192" rx="18" fill="#fff" stroke="#E6E6EB" strokeWidth="2" />
            <rect x="20" y="86" width="220" height="28" rx="8" fill="#F1F1F4" />
            <rect x="116" y="20" width="28" height="160" rx="8" fill="#F1F1F4" />
            <g fontFamily="inherit" fontSize="9" fontWeight="600" fill="#62636E">
              <rect x="20" y="20" width="86" height="56" rx="8" fill="#FFF3D0" /><text x="30" y="52">Lifestyle</text>
              <rect x="154" y="20" width="86" height="56" rx="8" fill="#E1F0FF" /><text x="166" y="52">Food court</text>
              <rect x="20" y="124" width="86" height="56" rx="8" fill="#DDF5EA" /><text x="34" y="156">Fountain</text>
              <rect x="154" y="124" width="86" height="56" rx="8" fill="#FFE4DF" className="mdest" /><text x="180" y="156" fill="#17171C">Croma</text>
              <rect x="118" y="92" width="24" height="16" rx="4" fill="#fff" stroke="#17171C" strokeWidth="1.5" /><text x="121" y="103" fontSize="7">Lift</text>
            </g>
            <g className="myou"><circle cx="60" cy="100" r="14" fill="#7CC4FF" opacity=".35" /><circle cx="60" cy="100" r="6" fill="#1d5fc4" stroke="#fff" strokeWidth="2" /></g>
            <g className="mpin"><path d="M197 112s-11-10-11-18a11 11 0 0 1 22 0c0 8-11 18-11 18z" fill="#FFB300" stroke="#17171C" strokeWidth="2" /><circle cx="197" cy="94" r="4" fill="#17171C" /></g>
          </svg>
          <div className="ssteps">
            <b>How to get to Croma</b>
            <ol><li>Walk past the fountain</li><li>Turn right at the lift</li><li>Croma is on your right</li></ol>
          </div>
        </div>
      </div>
    </div>
  );
}
