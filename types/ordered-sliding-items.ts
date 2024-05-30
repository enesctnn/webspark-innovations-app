import { StaticImageData } from 'next/image';

export type OrderedSlidingItemsT = {
  items: {
    title: string;
    description: string;
    img: StaticImageData;
  }[];
};
