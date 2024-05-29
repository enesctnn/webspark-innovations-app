import { InfiniteScrollImagesT } from '@/types/infinite-scroll-images';
import Image from 'next/image';

export const InfiniteScrollImages = ({ images }: InfiniteScrollImagesT) => (
  <div className="relative inline-flex h-full w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
    <ul className="z-50 flex animate-reverse-infinite-scroll items-center justify-center space-x-20 md:justify-start">
      {images.map(item => (
        <li key={item.alt} className="relative h-20 w-20" title={item.alt}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain object-center"
          />
        </li>
      ))}
    </ul>
    <ul className="absolute top-0 flex h-full animate-infinite-scroll items-center justify-center gap-20 md:justify-start">
      {images.map(item => (
        <li key={item.alt} className="relative h-14 w-14">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain object-center blur-[1px]"
          />
        </li>
      ))}
    </ul>
  </div>
);
