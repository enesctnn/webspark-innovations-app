import { SERVICES } from '@/config/our-services';

export type ExpandingImagesT = {
  images: Omit<(typeof SERVICES)[number], 'description' | 'title'>[];
  layout: string;
};
