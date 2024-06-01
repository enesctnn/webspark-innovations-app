'use client';

import { SERVICES } from '@/config/our-services';
import { useState } from 'react';
import { ExpandingImages } from './expanding-images';
import { HoverCardContent } from './hover-card-content';

const layoutArray: string[] = new Array(SERVICES.length).fill('1fr');
const DEFAULT = `${layoutArray.join(' ')}`;

export function HoverCard() {
  const [layout, setLayout] = useState<string>(DEFAULT);

  return (
    <div
      className="relative h-[550px] w-full overflow-hidden"
      onMouseLeave={() => setLayout(DEFAULT)}
    >
      <ExpandingImages
        layout={layout}
        images={[...SERVICES.map(({ src }) => ({ src }))]}
      />
      <HoverCardContent
        layout={DEFAULT}
        setLayout={setLayout}
        content={[
          ...SERVICES.map(({ title, description, href }) => ({
            title,
            description,
            href,
          })),
        ]}
      />
    </div>
  );
}
