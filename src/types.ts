export interface ExperienceItem {
  id: string;
  title: string;
  iconName: 'touch' | 'scent' | 'light' | 'atmosphere';
  description: string;
  imageSrc: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  iconName: 'star' | 'aroma' | 'design' | 'luxury';
  description: string;
}

export interface TreatmentItem {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  imageSrc: string;
}

export interface GalleryItem {
  id: string;
  imageSrc: string;
  caption: string;
}

export interface NavLink {
  label: string;
  href: string;
}
