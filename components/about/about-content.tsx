import { OurProcess } from '../our-process/our-process';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';
import { AboutWelcome } from './about-welcome';

export function AboutContent() {
  return (
    <MaxWidthWrapper className="relative flex max-w-screen-2xl flex-col items-center justify-center gap-32 overflow-hidden pb-40 pt-14">
      <AboutWelcome />
      <OurProcess />
    </MaxWidthWrapper>
  );
}
