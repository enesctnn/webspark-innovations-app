'use client';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { MobileDropdownT } from '@/types/mobile-dropdown';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ScrollIntoViewLink } from '../navbar/scroll-into-view-link';
import { MobileDropdownItems } from './mobile-dropdown-items';

export function MobileDrowdown({
  elementId,
  featured,
  href,
  title,
}: MobileDropdownT) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const ref = useRef<HTMLLIElement | null>(null);
  useOnClickOutside(ref, () => setDropdownOpen(false));

  return (
    <li ref={ref} className="-my-2 flex flex-col items-center justify-center">
      <div className="flex items-center">
        <ScrollIntoViewLink
          title={title}
          href={href}
          elementId={elementId}
          className="text-xl"
        />
        <motion.div animate={{ rotate: !dropdownOpen ? 90 : 0 }}>
          <IoIosArrowDown
            className="cursor-pointer"
            size={23}
            onClick={() => setDropdownOpen(prevState => !prevState)}
          />
        </motion.div>
      </div>
      <motion.ul
        className={`z-50 flex h-0 flex-col items-center gap-3 overflow-hidden rounded-md`}
        initial={{ height: 0 }}
        animate={{ height: dropdownOpen ? 'max-content' : 0 }}
        aria-expanded={dropdownOpen}
      >
        <MobileDropdownItems featured={featured} />
      </motion.ul>
    </li>
  );
}
