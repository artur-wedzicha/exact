import * as React from 'react';
import { Link } from 'gatsby';
import { ArrowRight, Construction, Truck, Wrench, Shovel } from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from './Typography/typography';
import { routes } from '@/router/router';

const assortmentItems = [
  {
    image: 'excavator_icon',
    icon: Construction,
    title: 'Koparki',
    description: 'Sprzęt do prac ziemnych',
  },
  {
    image: 'transport_icon',
    icon: Truck,
    title: 'Transport',
    description: 'Przewóz materiałów i maszyn',
  },
  {
    image: 'compactor_icon',
    icon: Wrench,
    title: 'Zagęszczarki',
    description: 'Przygotowanie i utwardzanie podłoża',
  },
  {
    image: 'assortment_icon',
    icon: Shovel,
    title: 'Akcesoria',
    description: 'Osprzęt do specjalistycznych robót',
  },
];

const Assortment = () => {
  return (
    <section className="assortment-section">
      <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)_minmax(320px,0.8fr)]">
        <div className="min-h-[320px] lg:min-h-full">
          <StaticImage
            src="../images/assortment.png"
            alt="Samochód ciężarowy Exact na placu budowy"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
            placeholder="none"
            loading="eager"
            formats={['auto', 'webp', 'avif']}
          />
        </div>

        <div className="flex flex-col justify-between border-t border-[var(--color-lines)] p-[var(--space-6)] lg:border-l lg:border-t-0">
          <div>
            <Typography
              variant="text"
              className="mb-4 text-[14px] font-extrabold uppercase leading-none text-[var(--color-primary)]"
            >
              Sprzęt
            </Typography>

            <Typography
              variant="h4"
              className="mb-6 max-w-[360px] text-[40px] uppercase font-extrabold leading-[1.04] text-[var(--color-primary-text)]"
            >
              Nowoczesny sprzęt gotowy do działania
            </Typography>

            <span className="mb-8 block h-[4px] w-10 bg-[var(--color-primary)]" />

            <Typography
              variant="text"
              className="max-w-[360px] text-[18px] leading-[1.75] text-[var(--color-secondary-text)]"
            >
              Inwestujemy w niezawodne maszyny, które pozwalają nam realizować
              nawet najbardziej wymagające zadania.
            </Typography>
          </div>

          <Link
            to={routes.offer.path}
            className="mt-10 inline-flex items-center gap-4 text-[16px] font-extrabold uppercase text-[var(--color-primary-text)]"
          >
            <span>Zobacz nasz sprzęt</span>
            <ArrowRight size={20} strokeWidth={2.2} />
          </Link>
        </div>

        <div className="flex flex-col justify-between border-t border-[var(--color-lines)] p-[var(--space-6)] lg:border-l lg:border-t-0">
          <div className="space-y-8">
            {assortmentItems.map(({ image, icon: Icon, title, description }) => (
              <div
                key={title}
                className="grid grid-cols-[72px_minmax(0,1fr)] items-start gap-x-5"
              >
                <div className="flex h-[72px] items-start justify-center pt-1 text-[var(--color-primary-text)]">
                  {image === 'excavator_icon' ? (
                    <StaticImage
                      src="../images/icons/excavator_icon.png"
                      alt={title}
                      className="h-14 w-14"
                      imgClassName="object-contain"
                      placeholder="none"
                      loading="eager"
                      formats={['auto', 'webp', 'avif']}
                    />
                  ) : image === 'transport_icon' ? (
                    <StaticImage
                      src="../images/icons/transport_icon.png"
                      alt={title}
                      className="h-14 w-14"
                      imgClassName="object-contain"
                      placeholder="none"
                      loading="eager"
                      formats={['auto', 'webp', 'avif']}
                    />
                  ) : image === 'compactor_icon' ? (
                    <StaticImage
                      src="../images/icons/compactor_icon.png"
                      alt={title}
                      className="h-14 w-14"
                      imgClassName="object-contain"
                      placeholder="none"
                      loading="eager"
                      formats={['auto', 'webp', 'avif']}
                    />
                  ) : image === 'assortment_icon' ? (
                    <StaticImage
                      src="../images/icons/assortment_icon.png"
                      alt={title}
                      className="h-14 w-14"
                      imgClassName="object-contain"
                      placeholder="none"
                      loading="eager"
                      formats={['auto', 'webp', 'avif']}
                    />
                  ) : (
                    <Icon size={56} strokeWidth={1.8} />
                  )}
                </div>

                <div>
                  <Typography
                    variant="text"
                    className="mb-1 text-[16px] font-bold uppercase leading-[1.25] text-[var(--color-primary-text)]"
                  >
                    {title}
                  </Typography>

                  <Typography
                    variant="text"
                    className="text-[18px] leading-[1.5] text-[var(--color-secondary-text)]"
                  >
                    {description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          <Link
            to={routes.offer.path}
            className="mt-10 inline-flex items-center gap-4 text-[16px] font-extrabold uppercase text-[var(--color-primary-text)]"
          >
            <span>Pełna lista sprzętu</span>
            <ArrowRight size={20} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Assortment;
