import { SOCIALS } from '@/config/social';
import React from 'react';

export const Social = () => (
  <ul className="hidden gap-x-1 md:flex">
    {SOCIALS.map(({ icon: Icon, href, title }) => (
      <li key={href} className="animate-bump group px-1">
        <a
          title={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-whitelilac transition-colors hover:text-regalblue-200"
        >
          <Icon
            className="transition-transform duration-300 group-hover:scale-125"
            size={24}
          />
        </a>
      </li>
    ))}
  </ul>
);
