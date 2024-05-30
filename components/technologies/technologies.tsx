import { LOGOS } from '@/config/logos';
import { BlurFade } from '../ui/blur-fade';
import { InfiniteScrollImages } from '../ui/infinite-scroll-images';

export const Technologies = () => (
  <div className="relative h-44 w-full overflow-hidden bg-ellipse from-regalblue-100 from-25% to-regalblue to-75%">
    <InfiniteScrollImages images={LOGOS} />
    <BlurFade />
  </div>
);
