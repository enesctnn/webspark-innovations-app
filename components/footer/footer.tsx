import logo from '@/assets/logos/webspark-logo.png';
import { NavItemsGroup } from '@/config/nav-items';
import Image from 'next/image';
import Link from 'next/link';
import { CiMail, CiPhone } from 'react-icons/ci';
import { buttonVariants } from '../ui/button';

export const Footer = () => (
  <footer className="flex h-full w-full items-center justify-evenly gap-y-5 overflow-hidden bg-ellipse from-regalblue-700 from-25% to-regalblue-900 to-60% py-4 text-white max-md:flex-col">
    <Link
      href={NavItemsGroup.HOME}
      className="w-80 animate-pulse overflow-hidden hover:animate-none"
      title="WebSpark Innovations"
    >
      <Image
        src={logo}
        alt="WebSpark Innovations Official Logo"
        className="-mx-3 -my-8 object-contain object-center"
      />
    </Link>
    <article className="space-y-4">
      <div className="flex w-full flex-col gap-4">
        <Link
          href={NavItemsGroup.CONTACT_US}
          title="Contact Us"
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
          <section className="">
            <h2 className="font-bold">Phone</h2>
            <p>(267) 890-7561</p>
          </section>
        </div>
        <div className="flex items-start gap-4">
          <CiMail size={28} />
          <section className="">
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
    <article className="flex h-full w-80 flex-col text-center">
      <Link
        href={NavItemsGroup.ABOUT}
        title="About"
        className={buttonVariants({
          variant: 'link',
          className: '!text-2xl !font-bold text-whitelilac decoration-2',
        })}
        role="heading"
        aria-level={1}
      >
        Who We Are
      </Link>
      <p>
        WebSpark Innovations, a dynamic web agency based in the vibrant city of
        Philadelphia. Founded by{' '}
        <a
          href="https://www.temple.edu/"
          className="font-bold text-regalblue-100 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="opens Temple University official website on blank page"
        >
          Temple University
        </a>{' '}
        graduates, our mission is simple: to empower local businesses and propel
        them to new heights of success in the digital realm.
      </p>
    </article>
  </footer>
);
