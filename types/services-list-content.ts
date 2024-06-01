import { StaticImageData } from 'next/image';

export type ServicesListContentT = {
  items: {
    src: StaticImageData;
    title: string;
    description: string;
  }[];
};
