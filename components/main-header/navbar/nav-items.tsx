import { NAVITEMS } from '@/config/nav-items';
import { NavLink } from './nav-link';
import { ScrollIntoViewLink } from './scroll-into-view-link';

export const NavItems = () => (
  <ul className="flex h-full items-center justify-between gap-5">
    {NAVITEMS.map(item => (
      <>
        {!item.featured && (
          <li key={item.title}>
            <NavLink href={item.href}>{item.title}</NavLink>
          </li>
        )}
        {item.featured && (
          <li key={item.title} className="group relative">
            <ScrollIntoViewLink
              title={item.title}
              href={item.href}
              elementId={item.elementId}
            />
            <ul className="absolute -left-24 top-10 z-50 flex h-0 flex-col place-content-center items-center justify-center gap-1 overflow-hidden rounded-md bg-regalblue text-center transition-all duration-300 group-hover:h-72 group-hover:border-2 group-hover:border-white">
              {item.featured.map(feature => (
                <li key={feature.title} className="mx-auto w-max px-4 py-2">
                  <NavLink
                    href={feature.href}
                    className="max-w-60 whitespace-pre-line"
                  >
                    {feature.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        )}
      </>
    ))}
  </ul>
);
