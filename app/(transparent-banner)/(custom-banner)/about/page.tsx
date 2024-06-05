import { AboutContent } from '@/components/about/about-content';
import { AboutHeader } from '@/components/about/about-header';
import type { Metadata } from 'next';
import { SparklesCore } from '@/components/ui/sparkles';
export const metadata: Metadata = {
  title: 'WSI | About',
  description: 'WSI About Page',
};

const AboutPage = () => (
  <>
    <SparklesCore
      particleDensity={2}
      maxSize={1.5}
      className="absolute inset-x-0 bottom-0 top-60 z-10"
      background="transparent"
    />
    <AboutContent />
  </>
);

export default AboutPage;
