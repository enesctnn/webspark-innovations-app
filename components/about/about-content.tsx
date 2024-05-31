import { MaxWidthWrapper } from '../ui/max-width-wrapper';
import { AboutWelcome } from './about-welcome';

export function AboutContent() {
  return (
    <MaxWidthWrapper className="relative z-30 flex max-w-screen-2xl flex-col items-center justify-center overflow-hidden py-20">
      <AboutWelcome />
    </MaxWidthWrapper>
  );
}
