import * as React from 'react';
import { HardHat, ShieldCheck, Truck, Users } from 'lucide-react';
import Typography from '../Typography/typography';
import { Fragment } from 'react';

const stats = [
  {
    icon: ShieldCheck,
    value: '10+',
    label: 'Lat doświadczenia',
  },
  {
    icon: Truck,
    value: '250+',
    label: 'Zrealizowanych projektów',
  },
  {
    icon: Users,
    value: '20+',
    label: 'Specjalistów w zespole',
  },
  {
    icon: HardHat,
    value: '100%',
    label: 'Bezpieczeństwo',
  },
];

const SliderStats = () => {
  return (
    <div className="absolute bottom-0 right-0 h-32 w-auto rounded-[var(--border-radius)] rounded-bl-none rounded-br-none bg-white/90 backdrop-blur-sm xl:h-32">
      <div className="flex flex-col xl:h-full xl:flex-row">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <Fragment key={label}>
            <div className="flex flex-1 items-center gap-5 px-6 py-7 md:px-8 xl:h-full xl:px-8 xl:py-0">
              <div className="flex size-14 shrink-0 items-center justify-center text-[var(--color-primary)]">
                <Icon size={42} strokeWidth={1.75} />
              </div>

              <div className="min-w-0">
                <Typography
                  variant="h5"
                  className="mb-1 font-extrabold leading-none text-[var(--color-primary-text)]"
                >
                  {value}
                </Typography>

                <Typography
                  variant="text"
                  className="max-w-[180px] text-[14px] font-semibold uppercase leading-[1.15] text-[var(--color-primary-text)]"
                >
                  {label}
                </Typography>
              </div>
            </div>

            {index < stats.length - 1 && (
              <>
                <span className="mx-6 h-px bg-[var(--color-lines)] xl:hidden" />
                <span className="hidden h-16 w-px self-center bg-[var(--color-lines)] xl:block" />
              </>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SliderStats;
