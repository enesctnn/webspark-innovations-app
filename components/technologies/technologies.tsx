import { LOGOS } from '@/config/logos';
import { BlurFade } from '../ui/blur-fade';
import { InfiniteScrollImages } from '../ui/infinite-scroll-images';

export const Technologies = () => (
  <div className="bg-ellipse relative from-regalblue-100 from-25% to-regalblue to-75% py-10">
    <InfiniteScrollImages images={LOGOS} />
    <BlurFade />
  </div>
);
