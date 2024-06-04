import { ServicesListContent } from '@/components/services/services-list-content';
import { SEO_SERVICE } from '@/config/services/seo';
import type { Metadata } from 'next';
import banner from '@/assets/images/search-engine-optimization/banner.jpeg';

export const metadata: Metadata = {
  title: 'WSI | SEO',
  description: 'WSI SEO Page',
};

const SEOPage = () => (
  <ServicesListContent
    services={SEO_SERVICE}
    banner={banner}
    title="Search Engine Optimization Service"
  />
);

export default SEOPage;
