import { ServicesListContent } from '@/components/services/services-list-content';
import { SOCIAL_MEDIA_MARKETING_SERVICE } from '@/config/services/social-media-marketing';
import type { Metadata } from 'next';
import banner from '@/assets/images/social-media-marketing/banner.jpeg';

export const metadata: Metadata = {
  title: 'WSI | Social Media Marketing',
  description: 'WSI Social Media Marketing Page',
};

const SocialMediaMarketingPage = () => (
  <ServicesListContent
    services={SOCIAL_MEDIA_MARKETING_SERVICE}
    banner={banner}
    title="Social Media Marketing Service"
  />
);

export default SocialMediaMarketingPage;
