import { MobileDropdownT } from './mobile-dropdown';

export type MobileDropDownItemsT = Omit<
  MobileDropdownT,
  'title' | 'elementId' | 'href'
>;
