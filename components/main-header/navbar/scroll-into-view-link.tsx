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
  setIsModalOpen,
}: ScrollIntoViewLinkT) {
  useEffect(() => {
    const hash = window.location.hash.split('#');
    const target = hash[hash.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const router = useRouter();
  const path = usePathname();

  return (
    <Link
      href={href}
      onClick={e => {
        if (setIsModalOpen) setIsModalOpen(false);
        e.preventDefault();
        if (path !== href) router.push(`${href}#${elementId}`);
        document
          .getElementById(elementId)
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.location.hash = elementId;
      }}
      scroll={false}
      className={`py-4 text-lg ${className}`}
    >
      {title}
    </Link>
  );
}
