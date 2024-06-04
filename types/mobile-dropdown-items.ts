import { SetStateAction } from 'react';
import { MobileDropdownT } from './mobile-dropdown';

export type MobileDropDownItemsT = Omit<
  MobileDropdownT,
  'title' | 'elementId' | 'href'
> & { setIsModalOpen: React.Dispatch<SetStateAction<boolean>> };
