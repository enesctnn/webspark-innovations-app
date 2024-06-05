import logo from '@/assets/logos/webspark-logo.png';
import { NavItemsGroup } from '@/config/nav-items';
import Image from 'next/image';
import Link from 'next/link';
import { CiMail, CiPhone } from 'react-icons/ci';
import { Social } from '../main-header/social/social';
import { BlurFade } from '../ui/blur-fade';
import { buttonVariants } from '../ui/button';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';

export const Footer = () => (
  <footer className="relative overflow-hidden bg-ellipse from-regalblue-700 from-25% to-regalblue-900 to-60% py-4 text-white ">
    <MaxWidthWrapper className="flex h-full w-full items-center justify-between gap-y-5 max-md:flex-col">
      <Link
        href={NavItemsGroup.HOME}
        className="relative h-72 w-72 flex-shrink-0 animate-pulse overflow-hidden hover:animate-none md:w-40 lg:w-52"
        title="WebSpark Innovations"
      >
        <Image
          src={logo}
          alt="WebSpark Innovations Official Logo"
          className="object-contain object-center"
          fill
        />
      </Link>
      <article className="space-y-4">
        <div className="flex w-full flex-col gap-4">
          <Link
            href={NavItemsGroup.CONTACT_US}
            className={buttonVariants({
              variant: 'link',
              className:
                'text-center !text-2xl !font-bold text-whitelilac decoration-2',
            })}
            role="heading"
            aria-level={1}
          >
            Contact Us
          </Link>
          <div className="flex items-start gap-4">
            <CiPhone size={28} />
            <section>
              <h2 className="font-bold">Phone</h2>
              <p>(267) 890-7561</p>
            </section>
          </div>
          <div className="flex items-start gap-4">
            <CiMail size={28} />
            <section>
              <h2 className="font-bold">Mail</h2>
              <a
                className="hover:underline"
                href="mailto:websparkinnovations@gmail.com"
                target="_blank"
              >
                websparkinnovations@gmail.com
              </a>
            </section>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()}{' '}
            <strong>WebSpark Innovations</strong> All rights reserved.
          </p>
        </div>
      </article>
      <Social iconSize={30} />
      <BlurFade fadeOut={false} />
    </MaxWidthWrapper>
  </footer>
);
