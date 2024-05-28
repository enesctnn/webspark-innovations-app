import { HeroBackground } from './hero-background';
import { HeroContent } from './hero-content';

export function Hero() {
  return (
    <div className="relative h-[900px] w-full py-40 text-center -mt-28">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
