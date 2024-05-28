import { NavItemsGroup } from '@/config/nav-items';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FlipWords } from '../ui/flip-words';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';

const words = ['Spark', 'Boost', 'Momentum', 'Inspiration'];
const className =
  'bg-gradient-to-b from-whitelilac to-regalblue-50 bg-clip-text';

export const HeroContent = () => (
  <MaxWidthWrapper>
    <article className="space-y-14">
      <section className="space-y-5">
        <h1 className="w-full overflow-hidden text-7xl text-transparent">
          <span className={className}>The </span>
          <strong>
            <FlipWords
              words={words}
              className="text-regalblue-400 drop-shadow"
            />
          </strong>
          <br />
          <span className={className}>To Your Business</span>
        </h1>
        <p className="text-4xl font-bold text-whitelilac">
          We Guarantee Your Business Will Grow
        </p>
      </section>
      <Button
        asChild
        className="text-xl font-bold transition-all hover:scale-110"
        size="lg"
      >
        <Link href={NavItemsGroup.CONTACT_US}>Contact Us</Link>
      </Button>
    </article>
  </MaxWidthWrapper>
);
