import * as React from 'react';
import Typography from './Typography/typography';

const PageHeader = ({
  title,
  description,
  backgroundImage = null,
  backgroundPosition = 'right center',
  backgroundSize = 'contain',
  transparent = false,
}) => {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
        backgroundSize,
      }
    : undefined;

  return (
    <section
      className={`overflow-hidden ${
        transparent
          ? 'bg-transparent'
          : 'border-b border-[var(--color-lines)] bg-[var(--color-white)]'
      }`}
      style={sectionStyle}
    >
      <div className="min-h-[340px] p-[var(--space-6)] lg:min-h-[420px] lg:w-[55%] lg:pr-0">
        <div className="flex h-full flex-col justify-center">
          <Typography
            variant="h1"
            className="mb-8 text-[52px] font-extrabold leading-[1.02] text-[var(--color-primary-text)] md:text-[72px]"
          >
            {title}
          </Typography>

          <span className="mb-8 block h-[4px] w-12 bg-[var(--color-primary)]" />

          <div className="max-w-[420px]">
            <Typography
              variant="text"
              className="text-[18px] leading-[1.75] text-[var(--color-primary-text)]"
            >
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
