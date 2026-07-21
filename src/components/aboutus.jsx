import * as React from 'react';
import { ArrowRight, Settings2, Wrench, Network } from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from './Typography/typography';

const stats = [
  {
    icon: Settings2,
    value: '10+',
    label: 'Lat doświadczenia',
  },
  {
    icon: Wrench,
    value: '250+',
    label: 'Zrealizowanych projektów',
  },
  {
    icon: Network,
    value: '20+',
    label: 'Specjalistów w zespole',
  },
];

const AboutUs = () => {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.9fr)]">
        <div className="grid gap-10 p-[var(--space-6)] lg:grid-cols-[minmax(320px,1fr)_1px_minmax(280px,0.95fr)] lg:gap-12">
          <div className="border-b border-[var(--color-lines)] pb-8 lg:border-b-0 lg:pb-0">
            <Typography
              variant="text"
              className="mb-5 text-[var(--color-primary)] text-[14px] font-extrabold uppercase leading-none"
            >
              O firmie
            </Typography>

            <Typography
              variant="h2"
              className="mb-10 max-w-[440px] text-[44px] font-extrabold uppercase leading-[1.08] text-[var(--color-primary-text)] md:text-[52px]"
            >
              Na nas możesz liczyć!
            </Typography>

            <Typography
              variant="text"
              className="mb-3 max-w-[360px] text-[18px] leading-[1.6] text-[var(--color-secondary-text)]"
            >
              Działamy od ponad 10 lat, realizując projekty dla klientów
              indywidualnych i firm.
            </Typography>

            <Typography
              variant="text"
              className="mb-8 max-w-[360px] text-[18px] leading-[1.6] text-[var(--color-secondary-text)]"
            >
              Stawiamy na niezawodność, bezpieczeństwo i najwyższą jakość usług.
            </Typography>

            <div className="text-[var(--color-primary-text)]">
              <div className="mb-2 text-[44px] italic leading-none text-[var(--color-primary-text)]">
                A. Exact
              </div>
              <Typography
                variant="text"
                className="text-[14px] font-semibold uppercase tracking-[0.06em]"
              >
                Kierownik firmy
              </Typography>
            </div>
          </div>

          <div className="hidden bg-[var(--color-lines)] lg:block" />

          <div className="flex flex-col justify-center gap-10 lg:pl-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center text-[var(--color-primary-text)]">
                  <Icon size={34} strokeWidth={1.8} />
                </div>

                <div>
                  <Typography
                    variant="h4"
                    className="mb-1 text-[44px] font-extrabold leading-none text-[var(--color-primary-text)]"
                  >
                    {value}
                  </Typography>
                  <Typography
                    variant="text"
                    className="max-w-[210px] text-[14px] font-semibold uppercase leading-[1.25] text-[var(--color-primary-text)]"
                  >
                    {label}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[100%]">
          <StaticImage
            src="../images/excavator.png"
            alt="Koparka Exact podczas prac ziemnych"
            className="h-full min-h-[420px] w-full"
            imgClassName="h-full w-full object-cover"
            placeholder="none"
            loading="eager"
            formats={['auto', 'webp']}
          />
        </div>
      </div>

      <div className="px-[var(--space-6)] pb-[var(--space-6)] lg:absolute lg:bottom-0 lg:right-[15%] lg:w-[400px] lg:px-0 lg:pb-0">
        <div className="flex items-center justify-between gap-6 bg-[var(--color-primary-text)] px-8 py-7 text-white lg:min-h-[136px]">
          <Typography
            variant="text"
            className="max-w-[240px] text-[18px] leading-[1.55] text-white"
          >
            Stawiamy na nowoczesny sprzęt i sprawdzone rozwiązania, aby
            zapewnić efektywność na każdym etapie.
          </Typography>

          <button
            type="button"
            className="flex size-14 shrink-0 items-center justify-center bg-[var(--color-primary)] text-[var(--color-primary-text)]"
            aria-label="Przejdź dalej"
          >
            <ArrowRight size={26} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
