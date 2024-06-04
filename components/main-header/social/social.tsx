import { SOCIALS } from '@/config/social';
import { SocialT } from '@/types/social';
import React from 'react';

export const Social = ({ className, visibleOnLg, iconSize = 24 }: SocialT) => (
  <ul
    className={`gap-x-3 ${visibleOnLg ? 'hidden lg:flex ' : 'flex '} ${className}`}
  >
    {SOCIALS.map(({ icon: Icon, href, title }) => (
      <li key={title} className="group animate-bump px-1">
        <a
          title={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-whitelilac transition-colors hover:text-regalblue-200"
        >
          <Icon
            className="transition-transform duration-300 group-hover:scale-125"
            size={iconSize}
          />
        </a>
      </li>
    ))}
  </ul>
);
