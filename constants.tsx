import { 
  HeartHandshake, 
  Stethoscope, 
  Users, 
  Baby, 
  GraduationCap, 
  Activity,
  Megaphone,
  Globe,
  Syringe,
  Pill
} from 'lucide-react';
import { NavItem, ServiceItem, ProgramItem, Testimonial } from './types';

export const CONTACT_INFO = {
  address: "No 3, Rafiu Tijani Street, Ejigbo, Lagos",
  phones: ["09030134715", "09056699848"],
  email: "Info@conquerorfoundation.com",
  website: "conquerorfoundation.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Programs', href: '#programs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Volunteer', href: '#volunteer' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Public Awareness & Education',
    description: 'Preventative screening, community literacy workshops, and policy advocacy to reduce stigma and SCD incidence.',
    icon: Megaphone,
  },
  {
    title: 'Medical Consultation',
    description: 'Specialized expert consultation, clinical training for healthcare providers, and dissemination of evidence-based guidelines.',
    icon: Stethoscope,
  },
  {
    title: 'Humanitarian Support',
    description: 'Mobile medical outreaches, distribution of essential medications, and psychosocial support for vulnerable populations.',
    icon: HeartHandshake,
  },
  {
    title: 'Global Strategy',
    description: 'Technical support for national programs and promoting equitable access to treatments globally.',
    icon: Globe,
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    title: 'The Conquerors Assembly',
    description: 'A quarterly medical outreach offering expert-led sessions, free distribution of medications (Hydroxyurea, folic acid), and on-site genotype screening.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80', // Medical setting
    date: 'Quarterly'
  },
  {
    title: 'Mobile Medical Outreaches',
    description: 'Deploying mobile clinics to remote communities to provide free testing, essential medication, and on-site counseling.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80', // African doctor/patient
    date: 'Ongoing'
  },
  {
    title: 'Research & Innovation',
    description: 'Championing research initiatives aimed at discovering new therapies and improving quality of life for those affected by SCD.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80', // Black medical professional
    date: 'Continuous'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amina Bello",
    role: "SCD Warrior",
    content: "The Conqueror's Circuit has been a pillar of strength, offering the psychosocial aid I desperately needed.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80" // African woman
  },
  {
    name: "Chinedu Okafor",
    role: "Parent",
    content: "Through the Conquerors Assembly, we received free medication and counseling that changed our child's management plan.",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80" // African man
  },
  {
    name: "Dr. Sarah Mensah",
    role: "Medical Consultant",
    content: "Their dedication to clinical training and guideline dissemination is raising the standard of SCD care significantly.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80" // Doctor
  }
];

export const BLOG_POSTS = [
  {
    title: "Understanding the Sickle Cell Trait",
    excerpt: "Why knowing your genotype is the first step towards a sickle-free generation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80", // Medical research
    date: "Oct 12, 2023"
  },
  {
    title: "Managing Crisis in Cold Weather",
    excerpt: "Essential tips for warriors to stay healthy and pain-free during the rainy season.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee84d632?auto=format&fit=crop&q=80", // Person in rain/cold
    date: "Sep 28, 2023"
  },
  {
    title: "Nutrition Guide for SCD",
    excerpt: "Top immunity-boosting foods that support blood health and overall wellness.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80", // Healthy food
    date: "Sep 15, 2023"
  }
];