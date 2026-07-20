import * as React from 'react';
import { ShieldCheck, Truck, Users, HardHat } from 'lucide-react';
import Typography from './Typography/typography';

const stats = [
  {
    icon: ShieldCheck,
    value: '10+',
    label: 'LAT DOŚWIADCZENIA',
    description: 'Ponad dekada skutecznych realizacji dla klientów w Małopolsce.',
  },
  {
    icon: Truck,
    value: '250+',
    label: 'ZREALIZOWANYCH PROJEKTÓW',
    description: 'Z sukcesem zamknięte inwestycje ziemne i transportowe.',
  },
  {
    icon: Users,
    value: '20+',
    label: 'SPECJALISTÓW W ZESPOLE',
    description: 'Wykwalifikowana kadra gotowa do działania.',
  },
  {
    icon: HardHat,
    value: '100%',
    label: 'BEZPIECZEŃSTWO',
    description: 'Działamy zgodnie z najwyższymi standardami BHP.',
  },
];

const getCardClassName = (index) => {
  const classes = ['py-[var(--space-5)]'];

  if (index < stats.length - 1) {
    classes.push('border-b', 'border-[var(--color-lines)]');
  }

  if (index === 0 || index === 2) {
    classes.push('sm:border-r');
  }

  if (index === 0 || index === 1) {
    classes.push('sm:border-b');
  } else {
    classes.push('sm:border-b-0');
  }

  if (index === 1 || index === 3) {
    classes.push('sm:border-r-0');
  }

  if (index < stats.length - 1) {
    classes.push('xl:border-r');
  } else {
    classes.push('xl:border-r-0');
  }

  classes.push('xl:border-b-0');

  return classes.join(' ');
};

const RealizationsStats = () => {
  return (
    <section className="overflow-hidden rounded-[var(--border-radius)] bg-[var(--color-white)] shadow-[var(--box-shadow)]">
      <div className="grid lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,3fr)]">
        <div className="border-b border-[var(--color-lines)] py-[var(--space-5)] lg:border-b-0 lg:border-r lg:pr-[var(--space-5)]">
          <Typography
            variant="text"
            className="mb-4 text-[12px] font-extrabold uppercase leading-none text-[var(--color-primary)]"
          >
            Doświadczenie, na które możesz liczyć
          </Typography>

          <Typography
            variant="h3"
            className="mb-6 max-w-[280px] text-[34px] font-extrabold leading-[1.08] text-[var(--color-primary-text)]"
          >
            Dostarczamy jakość, której możesz zaufać.
          </Typography>

          <Typography
            variant="text"
            className="max-w-[300px] text-[15px] leading-[1.7] text-[var(--color-muted-text)]"
          >
            Od ponad dekady realizujemy projekty dla firm budowlanych,
            deweloperów i inwestorów prywatnych. Stawiamy na bezpieczeństwo,
            terminowość i nowoczesny sprzęt.
          </Typography>

          <div className="mt-8">
            <div className="mb-2 text-[34px] italic leading-none text-[var(--color-primary-text)]">
              A. Exact
            </div>
            <Typography
              variant="text"
              className="text-[12px] font-semibold uppercase leading-none text-[var(--color-muted-text)]"
            >
              Kierownik firmy
            </Typography>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, description }, index) => (
            <div key={label} className={getCardClassName(index)}>
              <div className="mb-8 flex h-10 items-center text-[var(--color-primary)]">
                <Icon size={28} strokeWidth={1.75} />
              </div>

              <Typography
                variant="h4"
                className="mb-2 text-[34px] font-extrabold leading-none text-[var(--color-primary-text)]"
              >
                {value}
              </Typography>

              <Typography
                variant="text"
                className="mb-4 text-[12px] font-extrabold uppercase leading-[1.3] text-[var(--color-primary-text)]"
              >
                {label}
              </Typography>

              <Typography
                variant="text"
                className="max-w-[210px] text-[14px] leading-[1.65] text-[var(--color-muted-text)]"
              >
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealizationsStats;
