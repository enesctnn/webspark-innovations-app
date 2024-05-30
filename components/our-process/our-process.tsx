import { ITEMS } from '@/config/our-process';
import { BlurFade } from '../ui/blur-fade';
import { OrderedSlidingItems } from '../ui/ordered-sliding-items';

export const OurProcess = () => (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-ellipse from-[#111] from-25% to-black to-45% px-2.5 py-20 text-white lg:px-5">
    <h1 className="mb-8 text-4xl font-bold">OUR PROCESS</h1>
    <OrderedSlidingItems items={ITEMS} />
    <BlurFade />
  </div>
);
