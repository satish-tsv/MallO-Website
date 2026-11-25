// All copy and image references live here so the pages stay simple to edit.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}`;

export type Photo = { src: (w?: number) => string; alt: string; credit: string; page: string };

const photo = (id: string, alt: string, credit: string, page: string): Photo => ({
  src: (w = 1600) => u(id, w),
  alt,
  credit,
  page,
});

// Free photos under the Unsplash License. Credits are listed on the About page.
export const PHOTOS = {
  atrium: photo('photo-1652084224603-bf266d72d22a', 'A bright, busy mall atrium with a glass roof', 'Shubham Indi', 'https://unsplash.com/photos/_K9nKkiO_ak'),
  chandelier: photo('photo-1703688983198-64b98ab547b2', 'A grand mall lobby with a chandelier', 'Aman Kumar', 'https://unsplash.com/photos/q1RHDEIOWX0'),
  gallery: photo('photo-1676638955578-b3b13078adfe', 'Inside a modern Indian mall', 'UnKknown Traveller', 'https://unsplash.com/photos/CfQCZe3wjU0'),
  cafe: photo('photo-1611902169148-857ebcf717b9', 'A warm cafe interior in Hyderabad', 'Shreyas Gupta', 'https://unsplash.com/photos/VXLgYUMMqh8'),
  escalator: photo('photo-1483181994834-aba9fd1e251a', 'A shopper with bags on a mall escalator', 'freestocks', 'https://unsplash.com/photos/yqBKaF1KecM'),
  bags: photo('photo-1573855619003-97b4799dcd8b', 'A shopper carrying paper shopping bags', 'Erik Mclean', 'https://unsplash.com/photos/nfoRa6NHTbU'),
  phone: photo('photo-1578610257589-1fc92a1448d2', 'A person holding a smartphone', 'Erik Mclean', 'https://unsplash.com/photos/gIyLwILVuAo'),
  storefront: photo('photo-1756312091104-0a9719517da7', 'A shop entrance with bags and green plants', 'rishi', 'https://unsplash.com/photos/AiupN4bB_9o'),
  biryani: photo('photo-1631515243349-e0cb75fb8d3a', 'A bowl of biryani', 'Mario Raj', 'https://unsplash.com/photos/ysmeQt1dzcw'),
  walk: photo('photo-1678364859787-6b2eff1c88f7', 'Two people walking through a mall in India', 'Dhiraj Chouhan', 'https://unsplash.com/photos/9CLRuZtno9I'),
  boutique: photo('photo-1612012060786-58a0bf29474c', 'A small boutique with wooden shelves', 'Piret Ilver', 'https://unsplash.com/photos/EvTuMAnhnKE'),
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
  { q: 'Which malls are on MallO?', a: 'We are launching with large malls in Hyderabad. The app lists every mall that is live, and we will add more over time.' },
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
