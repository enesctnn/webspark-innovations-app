'use client';

import { ScrollIntoViewLinkT } from '@/types/scroll-into-view-link';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ScrollIntoViewLink({
  elementId,
  href,
  title,
  className,
}: ScrollIntoViewLinkT) {
  useEffect(() => {
    const hash = window.location.hash.split('#');
    const target = hash[hash.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const router = useRouter();
  const path = usePathname();

  return (
    <Link
      href={href}
      onClick={e => {
        e.preventDefault();
        if (path !== href) router.push(`${href}#${elementId}`);
        document
          .getElementById(elementId)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.location.hash = elementId;
      }}
      scroll={false}
      className={`py-4 text-lg ${className}`}
    >
      {title}
    </Link>
  );
}
