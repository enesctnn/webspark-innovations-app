'use client';

import { SERVICES } from '@/config/our-services';
import React, { useState } from 'react';
import { ExpandingImage } from './extending-image';

export function HoverCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex h-[500px] flex-wrap overflow-hidden transition-all duration-500">
      {SERVICES.map(({ description, src, title }, index) => (
        <ExpandingImage
          key={title}
          description={description}
          src={src}
          title={title}
          index={index + 1}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          seperator={index < SERVICES.length - 1}
        />
      ))}
    </div>
  );
}
