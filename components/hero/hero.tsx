import { HeroBackground } from './hero-background';
import { HeroContent } from './hero-content';

export function Hero() {
  return (
    <div className="relative -mt-28 h-[900px] w-full overflow-hidden py-40 text-center">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
