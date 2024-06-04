import { SetStateAction } from 'react';

export type MobileDropdownT = {
  title: string;
  href: string;
  elementId: string;
  featured: {
    title: string;
    href: string;
  }[];
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
};
