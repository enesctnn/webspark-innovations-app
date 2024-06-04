import { ServicesListContent } from '@/components/services/services-list-content';
import type { Metadata } from 'next';

import banner from '@/assets/images/custom-logo-creation/banner.jpeg';
import { CUSTOM_LOGO_CREATION_SERVICE } from '@/config/services/custom-logo-creation';

export const metadata: Metadata = {
  title: 'WSI | Custom Logo Creation',
  description: 'WSI Custom Logo Creation Page',
};

const CustomLogoCreationPage = () => (
  <ServicesListContent
    banner={banner}
    services={CUSTOM_LOGO_CREATION_SERVICE}
    title="Custom Logo Creation Service"
  />
);

export default CustomLogoCreationPage;
