import { ITEMS } from '@/config/our-process';
import { BlurFade } from '../ui/blur-fade';
import { OrderedSlidingItems } from '../ui/ordered-sliding-items';

export const OurProcess = () => (
  <div className="relative flex w-full flex-col items-center justify-center gap-y-8 overflow-hidden bg-ellipse from-[#111] from-25% to-black to-45% px-2.5 py-20 text-white lg:px-5 [&>*]:z-30">
    <article className="space-y-4 text-center">
      <h1 className="text-4xl font-extrabold">OUR PROCESS</h1>
      <p className="font-bold text-pastelblue sm:text-lg">
        NEXT LEVEL WEBSITE DESIGN IN PHILADELPHIA
      </p>
      <p className="text-center text-xs text-pastelblue sm:text-sm">
        United Of Web is a global multidisciplinary design company. We bring a
        deep tech approach to design.
      </p>
    </article>
    <OrderedSlidingItems items={ITEMS} />
    <BlurFade
      className="bg-ellipse from-[#111] from-40% to-black to-75%"
      fadeOut={false}
    />
  </div>
);
