import Image from 'next/image';
import Link from 'next/link';
import { LogoScrollOpacityWrapper } from './logo-scroll-opacity-wrapper';
import logo from '@/assets/logos/webspark-logo.png';
import rgb_logo from '@/assets/logos/webspark_logo_rgb.png';
import { LogoT } from '@/types/logo';

export const Logo = ({ solid }: LogoT) => (
  <Link href="/" className="relative h-full w-44" title="WebSpark Home Page">
    {!solid && (
      <>
        <LogoScrollOpacityWrapper>
          <Image
            src={rgb_logo}
            alt="WebSpark Innovations Official Logo RGB"
            className="-mx-3 -my-8 h-40 w-full object-contain object-center"
          />
        </LogoScrollOpacityWrapper>
        <LogoScrollOpacityWrapper increasing_on_scroll>
          <Image
            src={logo}
            alt="WebSpark Innovations Official Logo Whitescale"
            className="-mx-3 -my-8 h-40 w-full object-contain object-center"
          />
        </LogoScrollOpacityWrapper>
      </>
    )}
    {solid && (
      <Image
        src={logo}
        alt="WebSpark Innovations Official Logo Whitescale"
        className="-mx-3 -my-8 h-40 w-full object-contain object-center"
      />
    )}
  </Link>
);
