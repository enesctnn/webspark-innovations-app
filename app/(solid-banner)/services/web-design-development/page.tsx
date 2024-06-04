import { ServicesListContent } from '@/components/services/services-list-content';
import { WEB_DESIGN_DEVELOPMENT_SERVICE } from '@/config/services/web-design-development';
import banner from '@/assets/images/web-design-development/banner.jpeg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WSI | Web Design Development',
  description: 'WSI Web Design Development Page',
};

const WebDesignDevelopmentPage = () => (
  <ServicesListContent
    services={WEB_DESIGN_DEVELOPMENT_SERVICE}
    banner={banner}
    title="Web Design & Development Service"
  />
);

export default WebDesignDevelopmentPage;
