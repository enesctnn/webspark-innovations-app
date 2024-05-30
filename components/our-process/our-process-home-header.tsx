import { NavItemsGroup } from '@/config/nav-items';
import Link from 'next/link';
import { CursorClicking } from '../ui/cursor-clicking';
import { ExpandingHeader } from '../ui/expanding-header';

export const OurProcessHomeHeader = () => (
  <ExpandingHeader size="300px" animateOnce>
    <article className="flex flex-col gap-2 text-pastelblue">
      <div
        className="group relative mx-auto h-max w-max transition-transform duration-300 ease-in-out hover:scale-110"
        role="heading"
        aria-level={1}
      >
        <Link
          href={NavItemsGroup.WHAT_WE_OFFER}
          className="animate-pulse text-3xl !font-bold text-white group-hover:animate-none sm:text-5xl"
        >
          What We Offer ?
        </Link>
        <CursorClicking className="-bottom-2 -right-2" />
      </div>
      <p className="font-bold sm:text-lg">
        NEXT LEVEL WEBSITE DESIGN IN PHILADELPHIA
      </p>
      <p className="text-center text-xs sm:text-sm">
        United Of Web is a global multidisciplinary design company. We bring a
        deep tech approach to design.
      </p>
    </article>
  </ExpandingHeader>
);
