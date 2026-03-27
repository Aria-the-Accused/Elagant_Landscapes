import { NavLink, Service, GalleryImage } from './types';
import React from 'react';
import { Sprout, BrickWall, Scissors, Droplets } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Catering', path: '/catering' },
  { name: 'Get a Quote', path: '/quote' },
];

export const SERVICES: Service[] = [
  {
    id: 'design',
    title: 'Garden Design & Planting',
    description: 'Bespoke softscaping, elegant flowerbed arrangements, and seasonal planting to bring vibrant life to your outdoor areas.',
    icon: React.createElement(Sprout, { className: "w-8 h-8" }),
  },
  {
    id: 'paving',
    title: 'Patios & Paving',
    description: 'High-quality hardscaping including natural stone patios, durable driveways, and beautiful pathways built to last.',
    icon: React.createElement(BrickWall, { className: "w-8 h-8" }),
  },
  {
    id: 'maintenance',
    title: 'Lawn & Maintenance',
    description: 'Expert turf laying, weeding, pruning, and hedge trimming to keep your garden looking immaculate year-round.',
    icon: React.createElement(Scissors, { className: "w-8 h-8" }),
  },
  {
    id: 'features',
    title: 'Water Features & Fencing',
    description: 'Enhance the tranquility and privacy of your space with elegant water features, decking, and secure wooden fencing.',
    icon: React.createElement(Droplets, { className: "w-8 h-8" }),
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: '/gallery/elegant1.jpg', alt: 'Garden Patio', category: 'Paving' },
  { url: '/gallery/elegant2.jpg', alt: 'Stone Pathway', category: 'Paving' },
  { url: '/gallery/elegant3.jpg', alt: 'Beautiful Landscaping', category: 'Design' },
  { url: '/gallery/elegant4.jpg', alt: 'Outdoor Decking', category: 'Fencing' },
  { url: '/gallery/elegant5.jpg', alt: 'Lawn Care', category: 'Maintenance' },
  { url: '/gallery/elegant6.jpg', alt: 'Driveway Paving', category: 'Paving' },
  { url: '/gallery/elegant7.jpg', alt: 'Garden Design', category: 'Design' },
  { url: '/gallery/elegant8.jpg', alt: 'Landscaping Project', category: 'Maintenance' },
  { url: '/gallery/elegant9.jpg', alt: 'Fencing Installation', category: 'Fencing' },
  { url: '/gallery/elegant10.jpg', alt: 'Patio Design', category: 'Paving' },
  { url: '/gallery/elegant11.jpg', alt: 'Garden Layout', category: 'Design' },
  { url: '/gallery/elegant12.jpg', alt: 'Maintenance Work', category: 'Maintenance' },
  { url: '/gallery/elegant14.jpg', alt: 'Fence Design', category: 'Fencing' },
  { url: '/gallery/elegant15.jpg', alt: 'Paving Work', category: 'Paving' },
  { url: '/gallery/alegant.jpg', alt: 'Garden Elegance', category: 'Design' },
];

export const CONTACT_DETAILS = {
  phone: '+353 083 482 5397',
  whatsapp: '353833497418',
  email: 'elegantlandscapes2@gmail.com',
  address: 'Serving Dundalk, Dublin, Galway, Cork, and Surrounding Areas',
  facebook: 'https://www.facebook.com/p/Elegant-landscapes-100063486395535/',
};
