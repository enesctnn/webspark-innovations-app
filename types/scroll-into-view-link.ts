import { SetStateAction } from 'react';

export type ScrollIntoViewLinkT = {
  href: string;
  title: string;
  elementId: string;
  className?: string;
  setIsModalOpen?: React.Dispatch<SetStateAction<boolean>>;
};
