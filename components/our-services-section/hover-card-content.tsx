import { HoverCardContentT } from '@/types/hover-card-content';
import Link from 'next/link';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { buttonVariants } from '../ui/button';

export const HoverCardContent = ({
  content,
  layout,
  setLayout,
}: HoverCardContentT) => (
  <article
    className="absolute top-0 z-40 grid h-full w-full items-stretch justify-center divide-x divide-whitelilac-700 text-center"
    style={{ gridTemplateColumns: layout }}
  >
    {content.map(({ description, title, href }, index) => {
      const shapedLayoutArray: string[] = new Array(content.length).fill('0fr');
      shapedLayoutArray[index] = '1fr';
      const shapedLayout = shapedLayoutArray.join(' ');
      return (
        <section
          key={title}
          className="group mx-auto flex w-full cursor-pointer flex-col justify-between space-y-5 overflow-hidden py-20 md:px-5"
          onMouseEnter={() => setLayout(shapedLayout)}
        >
          <h1 className="text-center text-xs font-bold md:text-lg ">{title}</h1>
          <p className="text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-base">
            {description}
          </p>
          <Link
            href={href}
            className={buttonVariants({
              variant: 'ghost',
              className:
                'group/button overflow-hidden rounded-none hover:gap-x-2 sm:mr-auto',
            })}
          >
            <span className="overflow-hidden transition-[flex] group-hover/button:flex-1 sm:flex-[0]">
              VIEW
            </span>
            <LiaLongArrowAltRightSolid size={34} />
          </Link>
        </section>
      );
    })}
  </article>
);
