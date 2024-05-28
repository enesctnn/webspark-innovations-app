import { SheetClose } from '@/components/ui/sheet';
import { NAVITEMS } from '@/config/nav-items';
import Link from 'next/link';

export const MobileNavItems = () => (
  <ul className="my-6 flex flex-col items-center justify-center gap-5">
    {NAVITEMS.map(item => (
      <li key={item.title}>
        <SheetClose asChild>
          <Link
            href={item.href}
            className="text-xl text-whitelilac transition-colors hover:text-whitelilac-700"
          >
            {item.title}
          </Link>
        </SheetClose>
      </li>
    ))}
  </ul>
);
