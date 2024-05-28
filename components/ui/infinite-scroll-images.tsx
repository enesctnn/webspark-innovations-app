import { InfiniteScrollImagesT } from '@/types/infinite-scroll-images';
import Image from 'next/image';

export const InfiniteScrollImages = ({ images }: InfiniteScrollImagesT) => (
  <div className="relative inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
    <ul className="animate-reverse-infinite-scroll z-50 flex items-center justify-center space-x-20 md:justify-start">
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
    <ul className="animate-infinite-scroll absolute top-0 flex w-full items-center justify-center space-x-20 md:justify-start">
      {images.map(item => (
        <li key={item.alt} className="relative h-20 w-20" title={item.alt}>
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
