import { NavLink } from './nav-link';
import { NAVITEMS } from '@/config/nav-items';

export const Navbar = () => (
  <nav className="mx-auto hidden sm:block">
    <ul className="flex h-full items-center justify-between gap-5">
      {NAVITEMS.map(item => (
        <li key={item.title}>
          <NavLink href={item.href}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
