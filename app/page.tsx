import { Hero } from '@/components/hero/hero';

import { OurServices } from '@/components/our-services-section/our-services';
import { Technologies } from '@/components/technologies/technologies';
import { WhatWeOfferHomeHeader } from '@/components/what-we-offer/what-we-offer-home-header';

const HomePage = () => (
  <>
    <Hero />
    <OurServices />
    <Technologies />
    <WhatWeOfferHomeHeader />
  </>
);

export default HomePage;
