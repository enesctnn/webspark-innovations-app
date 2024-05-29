import { SERVICES } from '@/config/our-services';
import { SetStateAction } from 'react';

export type HoverCardContentT = {
  content: Omit<(typeof SERVICES)[number], 'src'>[];
  layout: string;
  setLayout: React.Dispatch<SetStateAction<string>>;
};
