import { ServicesListContentT } from '@/types/services-list-content';
import Image from 'next/image';
import { BlurFade } from '../ui/blur-fade';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';
import { ContactForm } from '../contact-us/contact-form/contact-form';

export const ServicesListContent = ({ items }: ServicesListContentT) => (
  <div className="relative min-h-screen overflow-hidden bg-ellipse from-regalblue-700 from-40% to-regalblue-900 to-60% py-40">
    <MaxWidthWrapper className="flex flex-col items-center justify-center gap-40">
      {items.map(({ description, src, title }, index) => (
        <article
          key={title}
          className={`flex flex-col items-center justify-center gap-10 ${(index + 1) % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
          <section className="flex flex-1 flex-col gap-10 text-center">
            <h2 className="text-4xl font-extrabold lg:text-5xl">{title}</h2>
            <p className="text-lg lg:text-2xl">{description}</p>
          </section>
          <div className="relative min-h-96 w-full flex-1">
            <Image
              src={src}
              alt={title}
              className="object-contain object-center"
              fill
            />
          </div>
        </article>
      ))}
      <ContactForm className="w-full lg:w-2/3" />
    </MaxWidthWrapper>
    <BlurFade fadeOut={false} />
  </div>
);
