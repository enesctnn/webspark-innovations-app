import { HoverCardContentT } from '@/types/hover-card-content';

export const HoverCardContent = ({
  content,
  layout,
  setLayout,
}: HoverCardContentT) => (
  <article
    className="absolute top-0 z-40 grid h-full w-full items-stretch justify-center divide-x divide-whitelilac text-center"
    style={{ gridTemplateColumns: layout }}
  >
    {content.map(({ description, title }, index) => {
      const shapedLayoutArray: string[] = new Array(content.length).fill('0fr');
      shapedLayoutArray[index] = '1fr';
      const shapedLayout = shapedLayoutArray.join(' ');
      return (
        <section
          key={title}
          className="group mx-auto w-full cursor-pointer place-content-center space-y-5 overflow-hidden py-3 md:px-5 md:py-10"
          onMouseEnter={() => setLayout(shapedLayout)}
        >
          <h1 className="text-center text-xs font-bold md:text-lg ">{title}</h1>
          <p className="text-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-base">
            {description}
          </p>
        </section>
      );
    })}
  </article>
);
