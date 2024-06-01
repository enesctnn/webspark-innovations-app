import { ITEMS } from '@/config/our-process';
import { BlurFade } from '../ui/blur-fade';
import { OrderedSlidingItems } from '../ui/ordered-sliding-items';
import { TextGradientLines } from '../ui/text-gradient-lines';

export const OurProcess = () => (
  <div className="relative flex w-full flex-col items-center justify-center gap-y-14 overflow-hidden bg-ellipse from-[#111] from-25% to-black to-45% px-2.5 py-20 text-white lg:px-5 [&>*]:z-30">
    <article className="space-y-6 text-center">
      <section className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold text-pastelblue">
          NEXT LEVEL WEBSITE DESIGN IN PHILADELPHIA
        </h2>
        <p className="text-center text-lg text-pastelblue">
          United Of Web is a global multidisciplinary design company. We bring a
          deep tech approach to design.
        </p>
        <TextGradientLines />
      </section>
      <h1 className="text-4xl font-extrabold">OUR PROCESS</h1>
    </article>
    <OrderedSlidingItems items={ITEMS} />
    <BlurFade
      className="bg-ellipse from-[#111] from-40% to-black to-75%"
      fadeOut={false}
    />
  </div>
);
