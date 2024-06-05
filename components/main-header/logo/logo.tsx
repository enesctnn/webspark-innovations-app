import logo from '@/assets/logos/webspark-logo.png';
import rgb_logo from '@/assets/logos/webspark_logo_rgb.png';
import { LogoT } from '@/types/logo';
import Image from 'next/image';
import Link from 'next/link';
import { LogoScrollOpacityWrapper } from './logo-scroll-opacity-wrapper';

export const Logo = ({ solid }: LogoT) => (
  <Link href="/" className="relative h-20 w-44" title="WebSpark Home Page">
    {!solid && (
      <>
        <LogoScrollOpacityWrapper>
          <Image
            src={rgb_logo}
            alt="WebSpark Innovations Official Logo RGB"
            className="object-contain object-center"
            fill
          />
        </LogoScrollOpacityWrapper>
        <LogoScrollOpacityWrapper increasing_on_scroll>
          <Image
            src={logo}
            alt="WebSpark Innovations Official Logo Whitescale"
            className="object-contain object-center"
            fill
          />
        </LogoScrollOpacityWrapper>
      </>
    )}
    {solid && (
      <Image
        src={logo}
        alt="WebSpark Innovations Official Logo Whitescale"
        className="object-contain object-center"
        fill
      />
    )}
  </Link>
);
