import { HeaderBackground } from './header-background';
import { Logo } from './logo/logo';
import { MobileNavBar } from './mobile-navbar/mobile-navbar';
import { Navbar } from './navbar/nav-bar';
import { Social } from './social/social';

export const MainHeader = () => (
  <header className="relative top-0 z-50 mt-8 flex h-24 w-full items-center justify-between px-20 md:sticky">
    <Logo />
    <Navbar />
    <MobileNavBar />
    <Social />
    <HeaderBackground />
  </header>
);
