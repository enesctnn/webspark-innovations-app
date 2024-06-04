import { SERVICES } from './our-services';

export const NAVITEMS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/',
    elementId: 'services',
    featured: SERVICES.map(({ title, href }) => ({ title, href })),
  },
  {
    title: 'Industries We Serve',
    href: '/industries-we-serve',
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export enum NavItemsGroup {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  INDUSTRIES_WE_SERVE = '/industries-we-serve',
  CONTACT_US = '/contact-us',
}
