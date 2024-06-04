import { ServicesItemT } from '@/types/services-item';
import { StaticImageData } from 'next/image';

export type ServicesListContentT = {
  services: ServicesItemT;
  banner: StaticImageData;
  title: string;
};
