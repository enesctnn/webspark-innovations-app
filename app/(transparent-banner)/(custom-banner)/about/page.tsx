import { AboutContent } from '@/components/about/about-content';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WSI | About',
  description: 'WSI About Page',
};

const AboutPage = () => <AboutContent />;

export default AboutPage;
