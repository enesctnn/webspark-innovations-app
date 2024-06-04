import { CardT } from '@/types/card';
import { BlurFade } from './blur-fade';
import { MaxWidthWrapper } from './max-width-wrapper';

export const Card = ({ className, children }: CardT) => (
  <div className="relative min-h-screen overflow-hidden bg-ellipse from-pastelblue-100 from-20% to-pastelblue-400 to-50% py-40 text-regalblue-400">
    <MaxWidthWrapper className={className}>{children}</MaxWidthWrapper>
    <BlurFade fadeOut={false} />
  </div>
);
