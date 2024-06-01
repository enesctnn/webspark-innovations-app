import { CustomBanner } from '@/components/main-header/custom-banner/custom-banner';

const CustomBannerLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CustomBanner />
    <div className="z-30 mt-28 min-h-screen">{children}</div>
  </>
);

export default CustomBannerLayout;
