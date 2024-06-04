import { NAVITEMS } from '@/config/nav-items';
import { MobileNavItemsT } from '@/types/mobile-nav-items';
import Link from 'next/link';
import React from 'react';
import { MobileDrowdown } from './mobile-dropdown';

export const MobileNavItems = ({ setIsModalOpen }: MobileNavItemsT) => (
  <ul className="my-6 flex flex-col items-center justify-center gap-5">
    {NAVITEMS.map(({ featured, href, title, elementId }) => (
      <React.Fragment key={title}>
        {!featured && (
          <li>
            <Link
              href={href}
              className="text-xl text-whitelilac transition-colors hover:text-whitelilac-700"
              onClick={() => setIsModalOpen(false)}
            >
              {title}
            </Link>
          </li>
        )}
        {featured && (
          <MobileDrowdown
            setIsModalOpen={setIsModalOpen}
            elementId={elementId}
            href={href}
            featured={featured}
            title={title}
          />
        )}
      </React.Fragment>
    ))}
  </ul>
);
