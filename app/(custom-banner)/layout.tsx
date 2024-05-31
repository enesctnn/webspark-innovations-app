import { CustomBanner } from '@/components/main-header/custom-banner/custom-banner';
import { SparklesCore } from '@/components/ui/sparkles';

const CustomBannerLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CustomBanner />
    <div className="z-30 mt-28 min-h-screen">{children}</div>
    <SparklesCore
      particleDensity={2}
      particleSize={0.5}
      className="absolute inset-0 z-10"
      background="transparent"
    />
  </>
);

export default CustomBannerLayout;
