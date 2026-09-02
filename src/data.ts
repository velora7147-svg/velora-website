import { ExperienceItem, FeatureItem, TreatmentItem, GalleryItem, NavLink } from './types';

export const BRAND_INFO = {
  name: 'VELORA',
  fullName: 'VELORA Wellness Spa',
  subtitle: 'SENSUAL WELLNESS BOUTIQUE',
  tagline: 'The Art of Sensual Relaxation',
  conceptHeading: 'A Different Kind of Relaxation',
  conceptQuote: 'Relaxation is an Art',
  lineUrl: 'https://line.me/ti/p/~velora1747',
  phone: '096-987-7147',
  phoneTel: 'tel:0969877147',
  email: 'velora7147@gmail.com',
  lineId: 'velora1747',
  wechatId: 'velora7147',
  hours: 'Open Daily 09:00 – 23:00',
  address: '41/250 Moo 11, Soi 18, Bang Mae Nang, Bang Yai, Nonthaburi 11140',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=41%2F250+Moo+11+Soi+18+Bang+Mae+Nang+Bang+Yai+Nonthaburi+11140',
  copyright: '© 2026 VELORA Wellness Spa. All Rights Reserved.',
};

export const NAV_KEYS: { id: string; key: 'home' | 'about' | 'experience' | 'treatments' | 'gallery' | 'location' | 'contact'; href: string }[] = [
  { id: 'nav-home', key: 'home', href: '#hero' },
  { id: 'nav-about', key: 'about', href: '#about' },
  { id: 'nav-exp', key: 'experience', href: '#experience' },
  { id: 'nav-treat', key: 'treatments', href: '#treatments' },
  { id: 'nav-gal', key: 'gallery', href: '#gallery' },
  { id: 'nav-loc', key: 'location', href: '#location' },
  { id: 'nav-contact', key: 'contact', href: '#contact' },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-touch',
    title: 'Touch',
    iconName: 'touch',
    description: 'The healing power of skilled hands, grounding you fully in the present moment.',
    imageSrc: '/experience-touch.jpg',
  },
  {
    id: 'exp-scent',
    title: 'Scent',
    iconName: 'scent',
    description: 'Signature aromas of Thai orchid and premium oils that calm the senses.',
    imageSrc: '/experience-scent.jpg',
  },
  {
    id: 'exp-light',
    title: 'Light',
    iconName: 'light',
    description: 'Soft golden moonlight and ambient blue tones that soothe the eyes and mind.',
    imageSrc: '/experience-light.jpg',
  },
  {
    id: 'exp-atmosphere',
    title: 'Atmosphere',
    iconName: 'atmosphere',
    description: 'A cosmic, starlit ambiance that transports you far from the noise of the city.',
    imageSrc: '/about-atmosphere.jpg',
  },
];

export const WHY_VELORA_FEATURES: FeatureItem[] = [
  {
    id: 'feat-starry',
    title: 'Starry Ambience',
    iconName: 'star',
    description: 'The interior is designed under a Space & Starry Night theme, with lighting crafted for deep calm and relaxation.',
  },
  {
    id: 'feat-aroma',
    title: 'Signature Aroma',
    iconName: 'aroma',
    description: 'An aroma blend inspired by Thai orchids and premium aromatic oils, chosen to create a fresh, calm atmosphere.',
  },
  {
    id: 'feat-design',
    title: 'Modern Design',
    iconName: 'design',
    description: 'Not a typical massage shop — a modern, distinctive space with beautiful corners perfect for photos.',
  },
  {
    id: 'feat-luxury',
    title: 'Affordable Luxury',
    iconName: 'luxury',
    description: "A wellness experience that feels premium and luxurious, at a price that's accessible. Luxury doesn't always have to be complicated.",
  },
];

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'treatment-thai',
    name: 'THAI MASSAGE',
    duration: '60 MIN',
    price: '900 THB',
    description: 'Traditional Thai massage that relieves deep body tension.',
    imageSrc: '/menu-thai-massage.jpg',
  },
  {
    id: 'treatment-oil',
    name: 'OIL MASSAGE',
    duration: '60 MIN',
    price: '1,100 THB',
    description: 'Relax with aromatic oils in a serene treatment room.',
    imageSrc: '/menu-oil-massage.jpg',
  },
  {
    id: 'treatment-man',
    name: 'MAN REVIVE',
    duration: '60 MIN',
    price: '1,600 THB',
    description: 'A revitalizing treatment to restore body and mind.',
    imageSrc: '/menu-man-revive.jpg',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-1', imageSrc: '/gallery-01.jpg?v=2', caption: 'Moonlit Serenity Suite' },
  { id: 'gal-2', imageSrc: '/gallery-02.jpg?v=2', caption: 'Private Treatment Chamber' },
  { id: 'gal-3', imageSrc: '/gallery-03.jpg?v=2', caption: 'Thai Orchid Aromatherapy' },
  { id: 'gal-4', imageSrc: '/gallery-04.jpg?v=2', caption: 'Lounge & Tea Sanctuary' },
];
