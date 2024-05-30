import { InfiniteScrollImagesT } from '@/types/infinite-scroll-images';
import Image from 'next/image';

export const InfiniteScrollImages = ({ images }: InfiniteScrollImagesT) => (
  <div className="relative inline-flex h-full w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
    <ul className="z-50 flex w-full animate-reverse-infinite-scroll items-center justify-center space-x-20 md:justify-start">
      {images.map(item => (
        <Image
          key={item.alt}
          title={item.alt}
          src={item.src}
          alt={item.alt}
          width={80}
          height={80}
          className="object-contain object-center"
          role="listitem"
        />
      ))}
    </ul>
    <ul className="absolute top-0 flex h-full w-full animate-infinite-scroll items-center justify-center gap-20 md:justify-start">
      {images.map(item => (
        <Image
          key={item.alt}
          title={item.alt}
          src={item.src}
          alt={item.alt}
          width={40}
          height={40}
          className="object-contain object-center opacity-80 blur-[1px]"
          role="listitem"
        />
      ))}
    </ul>
  </div>
);
