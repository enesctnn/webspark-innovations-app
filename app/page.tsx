import { Hero } from '@/components/hero/hero';
import { OurServices } from '@/components/our-services-section/our-services';
import { Technologies } from '@/components/technologies/technologies';

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Technologies />
    </>
  );
}
