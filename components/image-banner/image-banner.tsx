import { ImageBannerT } from '@/types/image-banner';
import Image from 'next/image';

export function ImageBanner({ banner, title }: ImageBannerT) {
  const words = title.split(' ');

  return (
    <>
      <div className="fixed -top-10 left-0 -z-40 h-[800px] w-full overflow-hidden">
        <Image
          src={banner}
          alt="a computer screent website design image"
          className="object-cover object-center"
          fill
        />
        <div className="absolute inset-0 bg-zinc-800/70" />
      </div>
      <header className="z-40 mx-auto h-[560px] place-content-center text-center text-white sm:w-4/5">
        <h1 className="text-4xl font-bold md:text-5xl">
          {words.map((word, index) => {
            if (index === words.length - 1) {
              return (
                <span key={word + index} className="text-pastelblue-400">
                  {word}
                </span>
              );
            } else return word + ' ';
          })}
        </h1>
      </header>
    </>
  );
}
