import * as React from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = ({ items = [] }) => {
  if (!items.length) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-3 text-[14px]"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {index > 0 ? (
              <span className="text-[var(--color-primary)]">›</span>
            ) : null}

            {item.to && !isLast ? (
              <Link
                to={item.to}
                className="text-[var(--color-secondary-text)]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? 'text-[var(--color-primary-text)]'
                    : 'text-[var(--color-secondary-text)]'
                }
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
