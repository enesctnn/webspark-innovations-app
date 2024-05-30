import { Hero } from '@/components/hero/hero';
import { OurProcessHomeHeader } from '@/components/our-process/our-process-home-header';
import { OurServices } from '@/components/our-services-section/our-services';
import { Technologies } from '@/components/technologies/technologies';

const Home = () => (
  <>
    <Hero />
    <OurServices />
    <Technologies />
    <OurProcessHomeHeader />
  </>
);

export default Home;
