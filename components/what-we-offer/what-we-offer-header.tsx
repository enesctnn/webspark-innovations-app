import { ExpandingHeader } from '../ui/expanding-header';

export const WhatWeOfferHeader = () => (
  <ExpandingHeader
    size="150px"
    animateOnce
    fadeOut={false}
    className="via-[#111] via-70% to-90%"
  >
    <h1 className="text-4xl font-bold md:text-5xl">What We Offer ?</h1>
  </ExpandingHeader>
);
