import { MobileDropDownItemsT } from '@/types/mobile-dropdown-items';
import Link from 'next/link';

export const MobileDropdownItems = ({
  featured,
  setIsModalOpen,
}: MobileDropDownItemsT) =>
  featured.map(feature => (
    <li key={feature.title}>
      <Link
        href={feature.href}
        className="font-bold tracking-wide"
        onClick={() => setIsModalOpen(false)}
      >
        {feature.title}
      </Link>
    </li>
  ));
