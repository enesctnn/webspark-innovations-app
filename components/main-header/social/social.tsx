import { SOCIALS } from '@/config/social';
import React from 'react';

export const Social = () => (
  <ul className="hidden gap-x-4 md:flex">
    {SOCIALS.map(({ icon: Icon, href, title }) => (
      <li key={href}>
        <a
          title={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-whitelilac transition-colors hover:text-regalblue-200"
        >
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);
