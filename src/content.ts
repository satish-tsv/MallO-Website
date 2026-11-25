// All copy and image references live here so the pages stay simple to edit.

import PHOTO_LIST from './photos.json';

export type Photo = { src: (w?: number) => string; alt: string; credit: string; page: string };

// Free photos under the Unsplash License, listed in photos.json (credits on the About page).
// The deploy workflow downloads them into the site (img/<key>-800.jpg and -1600.jpg), so
// they are served from our own domain. Without a local copy the browser shows a soft gradient.
type Key = 'atrium' | 'chandelier' | 'gallery' | 'cafe' | 'escalator' | 'bags' | 'phone' | 'storefront' | 'biryani' | 'walk' | 'boutique' | 'kids' | 'arcade';

export const PHOTOS = Object.fromEntries(
  PHOTO_LIST.map((p) => [p.key, { src: (w = 1600) => `img/${p.key}-${w <= 900 ? 800 : 1600}.jpg`, alt: p.alt, credit: p.credit, page: p.page } satisfies Photo]),
) as Record<Key, Photo>;

// Cities and the malls where MallO is live. Edit this list as malls go live.
export const CITIES: { city: string; malls: { name: string; area: string }[] }[] = [
  { city: 'Hyderabad', malls: [{ name: 'Inorbit Mall', area: 'Madhapur' }, { name: 'Nexus Hyderabad', area: 'KPHB' }, { name: 'Sarath City Capital Mall', area: 'Kondapur' }] },
  { city: 'Bengaluru', malls: [{ name: 'Phoenix Marketcity', area: 'Whitefield' }, { name: 'Orion Mall', area: 'Rajajinagar' }, { name: 'Phoenix Mall of Asia', area: 'Hebbal' }] },
  { city: 'Chennai', malls: [{ name: 'Phoenix Marketcity', area: 'Velachery' }, { name: 'Express Avenue', area: 'Royapettah' }, { name: 'VR Chennai', area: 'Anna Nagar' }] },
  { city: 'Mumbai', malls: [{ name: 'Phoenix Palladium', area: 'Lower Parel' }, { name: 'Jio World Plaza', area: 'BKC' }, { name: 'Inorbit Mall', area: 'Malad' }] },
];

// App store links. Paste the real store URLs here when the app is published; until then the badges are not clickable.
export const STORE = {
  android: '',
  ios: '',
};

export const EMAIL = {
  hello: 'hello@mallo.example',
  partners: 'partners@mallo.example',
  help: 'help@mallo.example',
  grievance: 'grievance@mallo.example',
};

export const POINTS = [
  { big: '+50', title: 'When you sign in', text: 'A welcome bonus for new members. Joined with a friend’s invite? You get 100 more.' },
  { big: '50', title: 'Points per ₹1,000', text: 'On eligible bills from stores in the mall. 10 points are worth ₹1 on gift cards.' },
  { big: '+100', title: 'Every 5th bill', text: 'A milestone bonus for every fifth approved bill of ₹200 or more.' },
  { big: '+600', title: 'For each friend', text: '100 when a friend joins with your invite, and 500 when their first bill is approved.' },
];

export const SHOPPER_FAQ = [
  { q: 'Is MallO free?', a: 'Yes. MallO is free for shoppers. There are no ads and nothing to pay for finding your way.' },
  { q: 'Do I need to sign up?', a: 'No. Search, directions, offers, the map and the parking note all work without an account. Sign in with your phone number only if you want MallO points, offer alerts or a backup of your saved places.' },
  { q: 'Which malls are on MallO?', a: 'MallO is live in large malls in Hyderabad, Bengaluru, Chennai and Mumbai. Pick your city on the home page to see them; the app always lists every mall that is live.' },
  { q: 'Does MallO track where I go?', a: 'No. If you allow location, it is used on your phone only, to suggest the nearest mall. Your searches and parking note also stay on your phone.' },
  { q: 'How do MallO points work?', a: 'Sign in, then scan an eligible bill from a store in the mall within 7 days. Once we have checked it, you earn 50 points for every ₹1,000. Use them on partner gift cards, in steps of 100 points (₹10). Points have no cash value.' },
  { q: 'Are the offers real?', a: 'Every offer is the store’s, bank’s or mall’s own. We show its source, end date and the date we last checked it. Their terms are final.' },
];

export const PARTNER_FAQ = [
  { q: 'What does it cost to list my store?', a: 'Listing a store and its offers on MallO is free.' },
  { q: 'Who keeps my details up to date?', a: 'Our team does. Tell us when your hours, offers or what you sell change, and we check and publish the update.' },
  { q: 'Do I need new hardware or software?', a: 'No. There is nothing to install for you or your staff.' },
  { q: 'How do shoppers earn points at my store?', a: 'Shoppers scan their bill in the app after they shop. We check it and credit MallO points from our side, at no cost to you.' },
  { q: 'We are a mall. How do we start?', a: 'Write to us. We map the mall with you, list every store and facility, and set up your Home screen for offers and events before going live.' },
  { q: 'Can my brand offer gift cards?', a: 'Yes. Brands can offer gift cards to MallO members, who redeem their points for them. Write to us to set it up.' },
];
