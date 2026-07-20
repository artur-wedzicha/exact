import * as React from 'react';
import { Link } from 'gatsby';
import {ArrowRight, PhoneCall} from 'lucide-react';
import { routes } from '../../router/router';
import './navigation.css';
import { useLocation } from '@reach/router';

const Navigation = () => {
  const { pathname } = useLocation();

  const normalizePath = (path) => path.replace(/\/+$/, '');

  const isActive = (routePath) => {
    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(routePath);

    if (targetPath === '') return currentPath === '';
    if (targetPath === '/') return currentPath === '/';

    return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link
            to={routes.homePage.path}
            className={isActive(routes.homePage.path) ? 'active' : ''}
          >
            {routes.homePage.title}
          </Link>
        </li>
        <li>
          <Link
            to={routes.aboutUs.path}
            className={isActive(routes.aboutUs.path) ? 'active' : ''}
          >
            {routes.aboutUs.title}
          </Link>
        </li>
        <li>
          <Link
            to={routes.offer.path}
            className={isActive(routes.offer.path) ? 'active' : ''}
          >
            {routes.offer.title}
          </Link>
        </li>
        <li>
          <Link
            to={routes.realizations.path}
            className={isActive(routes.realizations.path) ? 'active' : ''}
          >
            {routes.realizations.title}
          </Link>
        </li>
        <li>
          <Link
            to={routes.contact.path}
            className={isActive(routes.contact.path) ? 'active' : ''}
          >
            {routes.contact.title}
          </Link>
        </li>
      </ul>

      <Link
        to={routes.contact.path}
        className="button navigation__cta gap-3 text-[var(--color-primary-text)] "
      >
        <PhoneCall size={20} strokeWidth={1.8} />
        <span>537 202 251</span>
        {/*<ArrowRight size={22} strokeWidth={2.25} className="shrink-0" />*/}
      </Link>
    </nav>
  );
};

export default Navigation;
