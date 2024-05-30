import { CustomBanner } from '@/components/main-header/custom-banner/custom-banner';

const CustomBannerLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CustomBanner />
    <div className="mt-28">{children}</div>
  </>
);

export default CustomBannerLayout;
