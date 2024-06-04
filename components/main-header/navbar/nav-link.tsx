'use client';

import { buttonVariants } from '@/components/ui/button';
import { NavLinkT } from '@/types/nav-link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ children, href, className }: NavLinkT) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: 'link',
        className: `!p-0 !m-0 !text-lg font-bold text-muted text-whitelilac decoration-2 underline-offset-[10px] ${path === href ? 'underline ' : ''} ${className}`,
      })}
    >
      {children}
    </Link>
  );
}
