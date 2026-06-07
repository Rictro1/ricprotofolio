export interface Skill {
  id: string;
  icon: string;
  label: string;
}

export interface Achievement {
  id: string;
  date: string;
  icon: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  imageAlt: string;
  certificateUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  projectUrl: string;
  tags: string[];
  alignment: 'left' | 'right';
}

export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  quote: string;
  email: string;
  location: string;
  status: 'available' | 'busy' | 'unavailable';
  image: string;
}
