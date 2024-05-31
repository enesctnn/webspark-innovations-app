import { BlurFadeT } from '@/types/blur-fade';

export const BlurFade = ({
  className,
  fadeIn = true,
  fadeOut = true,
}: BlurFadeT) => (
  <>
    {fadeIn && (
      <div
        className={`absolute inset-x-0 top-[-3px] h-2 bg-black blur-sm ${className}`}
        aria-hidden
      />
    )}
    {fadeOut && (
      <div
        className={`absolute inset-x-0 bottom-[-3px] h-2 bg-black blur-sm ${className}`}
        aria-hidden
      />
    )}
  </>
);
