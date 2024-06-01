import { SparklesCore } from '@/components/ui/sparkles';

const CustomBannerLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <SparklesCore
      particleDensity={2}
      maxSize={1.5}
      className="absolute inset-0 z-10"
      background="transparent"
    />
  </>
);

export default CustomBannerLayout;
