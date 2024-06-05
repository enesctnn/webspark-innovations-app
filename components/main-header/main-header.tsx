import { MainHeaderT } from '@/types/main-header';
import { HeaderBackground } from './header-background';
import { Logo } from './logo/logo';
import { MobileNavBar } from './mobile-navbar/mobile-navbar';
import { Navbar } from './navbar/nav-bar';
import { Social } from './social/social';

export const MainHeader = ({ solid }: MainHeaderT) => (
  <header
    className={`relative z-50 flex h-24 w-full items-center justify-between px-20 ${!!solid ? ' inset-x-0 bg-regalblue' : 'top-0 mt-8 lg:sticky'}`}
  >
    <Logo solid={!!solid} />
    <Navbar />
    <MobileNavBar />
    <Social visibleOnLg />
    {!solid && <HeaderBackground />}
  </header>
);
