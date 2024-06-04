import { StaticImageData } from 'next/image';

export type ServiceT = {
  title: string;
  description: string;
  src?: StaticImageData;
  we_provide?: string[];
};
export type MainHeaderT = { header: string; text?: string };

export type ServicesItemT = { main_header: MainHeaderT; services: ServiceT[] };
