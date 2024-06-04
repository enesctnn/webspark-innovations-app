import { ServicesListContentT } from '@/types/services-list-content';
import { ContactForm } from '../contact-us/contact-form/contact-form';
import { ImageBanner } from '../image-banner/image-banner';
import { ServicesListArticle } from './services-list-article';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';

export const ServicesListContent = ({
  services: {
    services,
    main_header: { text, header },
  },
  banner,
  title,
}: ServicesListContentT) => (
  <>
    <ImageBanner banner={banner} title={title} />
    <header className="w-full bg-regalblue-300 py-14 text-center">
      <MaxWidthWrapper className="flex flex-col gap-8">
        <h2 className="flex items-center justify-center gap-4 text-lg italic text-sky-400">
          <div className="h-px w-8 bg-sky-400" />
          About This Service
        </h2>
        <h1 className="text-5xl font-bold text-sky-400">{header}</h1>
        <p>{text}</p>
      </MaxWidthWrapper>
    </header>
    <div className="flex flex-col items-stretch justify-center">
      <ul className="flex flex-col">
        {services.map((item, index) => (
          <li key={item.title}>
            <ServicesListArticle service={item} index={index} />
          </li>
        ))}
      </ul>
      <ContactForm
        className={`mx-auto w-full rounded-none border-none text-regalblue-700 ${services.length % 2 === 0 ? 'bg-white' : 'bg-pastelblue-100'}`}
        title="Get In Touch"
      />
    </div>
  </>
);
