import { ServicesListArticleT } from '@/types/services-list';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { ServicesListArticleAnimation } from './services-list-article-animation';

export const ServicesListArticle = ({
  service: { description, title, src, we_provide },
  index,
}: ServicesListArticleT) => (
  <ServicesListArticleAnimation index={index}>
    {src && (
      <div className="relative min-h-96 w-full flex-1">
        <Image
          src={src}
          alt={title}
          className="object-contain object-center"
          fill
        />
      </div>
    )}
    <section className="flex flex-1 flex-col gap-4 text-left">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      <div className="flex flex-col gap-2">
        <div className="h-0.5 w-10 bg-regalblue-50" />
        <p>{description}</p>
      </div>
      {we_provide && (
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 text-lg italic text-regalblue-100">
            <div className="h-0.5 w-14 bg-regalblue-50" />
            We Provide
          </h3>
          <ul className="w-max rounded-md p-8 shadow-md shadow-zinc-700/60">
            {we_provide.map(item => (
              <li key={item} className="flex items-center gap-1">
                <GoDotFill size={14} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  </ServicesListArticleAnimation>
);
