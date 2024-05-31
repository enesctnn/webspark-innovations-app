import { NavItemsGroup } from '@/config/nav-items';
import Link from 'next/link';
import { CursorClicking } from '../ui/cursor-clicking';
import { ExpandingHeader } from '../ui/expanding-header';

export const WhatWeOfferHomeHeader = () => (
  <ExpandingHeader
    size="250px"
    animateOnce
    className="from-regalblue"
    fadeOut={false}
  >
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
          All Services
        </Link>
        <CursorClicking className="-bottom-2 -right-2" />
      </div>
      <p className="font-bold sm:text-lg">
        We`re a web design and digital marketing agency that provides a full
        spectrum of services to help your business succeed.
      </p>
    </article>
  </ExpandingHeader>
);
