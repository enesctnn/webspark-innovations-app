import { MobileDropDownItemsT } from '@/types/mobile-dropdown-items';
import Link from 'next/link';

export const MobileDropdownItems = ({ featured }: MobileDropDownItemsT) =>
  featured.map(feature => (
    <li key={feature.title}>
      <Link href={feature.href} className="hover:underline">
        {feature.title}
      </Link>
    </li>
  ));
