import { BlurFadeT } from '@/types/blur-fade';

export const BlurFade = ({ className }: BlurFadeT) => (
  <>
    <div
      className={`!absolute !top-0 h-1 w-full bg-black blur-sm ${className}`}
      aria-hidden
    />
    <div
      className={`!absolute !bottom-0 h-1 w-full bg-black blur-sm ${className}`}
      aria-hidden
    />
  </>
);
