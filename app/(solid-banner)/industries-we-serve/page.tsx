import { ImageBanner } from '@/components/image-banner/image-banner';
import { IndustriesContent } from '@/components/industries/industries-content';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'WSI | Industries Serve',
  description: 'WSI Industries Serve Page',
};

const IndustriesWeServePage = () => (
  <>
    <ImageBanner banner="/images/banner.jpg" title="Industries We Serve" />
    <IndustriesContent />
  </>
);

export default IndustriesWeServePage;
