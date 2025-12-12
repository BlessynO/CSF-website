import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProgramItem {
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}