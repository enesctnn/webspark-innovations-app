import { cn } from '@/lib/utils';
import { ExpandingImageT } from '@/types/extending-image';

export const ExpandingImage = ({
  description,
  expandedIndex,
  index,
  setExpandedIndex,
  src,
  title,
  seperator,
}: ExpandingImageT) => (
  <article
    className={cn(
      'group relative z-40 h-full w-1/4 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out',
      expandedIndex === index && 'w-[85%]',
      !!expandedIndex && expandedIndex !== index && 'w-[5%]'
    )}
    style={{ backgroundImage: `url(${src})` }}
    onMouseEnter={() => setExpandedIndex(index)}
    onMouseLeave={() => setExpandedIndex(null)}
  >
    <section className="mx-auto max-w-96 space-y-5 px-5 py-10 ">
      <h1 className="text-center text-xl font-bold">{title}</h1>
      <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {description}
      </p>
    </section>
    {seperator && (
      <div className="absolute bottom-0 right-0 top-0 w-[1px] bg-white" />
    )}
    <div
      className="absolute inset-0 -z-10 bg-black/45 transition-all duration-500"
      aria-hidden
    />
  </article>
);
