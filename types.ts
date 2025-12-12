import { ReactNode } from 'react';

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: ReactNode;
  image: string; // Used for Cards (Core Service Image) and default fallback
  heroImage?: string; // Optional: Distinct image for Service Detail Hero
  contentImages?: string[]; // Optional: Array of images for the content slider (replaces single image)
  icon?: ReactNode;
  faqs: FAQ[];
  cta: ServiceCTA;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}