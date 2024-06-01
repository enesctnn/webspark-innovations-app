import { SetStateAction } from 'react';

export type HoverCardContentT = {
  content: {
    title: string;
    description: string;
    href: string;
  }[];
  layout: string;
  setLayout: React.Dispatch<SetStateAction<string>>;
};
