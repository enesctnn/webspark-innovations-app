import { StaticImageData } from 'next/image';

export type ServicesItemT = {
  src: StaticImageData;
  title: string;
  description: string;
}[];
