import { SERVICES } from '@/config/our-services';

export type ExpandingImageT = (typeof SERVICES)[number] & {
  expandedIndex: number | null;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
  seperator?: boolean;
};
