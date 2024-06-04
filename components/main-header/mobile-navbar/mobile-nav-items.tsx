import { SheetClose } from '@/components/ui/sheet';
import { NAVITEMS } from '@/config/nav-items';
import Link from 'next/link';
import { MobileDrowdown } from './mobile-dropdown';

export const MobileNavItems = () => (
  <ul className="my-6 flex flex-col items-center justify-center gap-5">
    {NAVITEMS.map(({ featured, href, title, elementId }) => (
      <>
        {!featured && (
          <li key={title}>
            <SheetClose asChild>
              <Link
                href={href}
                className="text-xl text-whitelilac transition-colors hover:text-whitelilac-700"
              >
                {title}
              </Link>
            </SheetClose>
          </li>
        )}
        {featured && (
          <MobileDrowdown
            elementId={elementId}
            href={href}
            featured={featured}
            title={title}
          />
        )}
      </>
    ))}
  </ul>
);
