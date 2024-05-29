import Image from 'next/image';
import Link from 'next/link';
import { LogoScrollOpacityWrapper } from './logo-scroll-opacity-wrapper';

export const Logo = () => (
  <Link href="/" className="relative h-20 w-36" title="WebSpark Home Page">
    <LogoScrollOpacityWrapper>
      <Image
        src="/logo/logo_rgb.png"
        alt="WebSpark Innovations Logo RGB"
        className="object-cover object-center"
        fill
      />
    </LogoScrollOpacityWrapper>
    <LogoScrollOpacityWrapper increasing_on_scroll>
      <Image
        src="/logo/logo.png"
        alt="WebSpark Innovations Logo Whitescaled"
        className="object-cover object-center"
        fill
      />
    </LogoScrollOpacityWrapper>
  </Link>
);
