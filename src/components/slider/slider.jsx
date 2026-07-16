import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import Typography from '../Typography/typography';
import SliderStats from './slider-stats';
import { routes } from '@/router/router';
import { Link } from 'gatsby';

const Slider = () => {
  return (
    <div
      className="relative z-[1] flex min-h-[930px] w-full items-center py-[72px] md:py-24">
        <div className="flex w-full flex-col gap-10 md:gap-14">
          <div className="max-w-[760px]">
          <Typography
            variant="h6"
            className="mb-4 text-[16px] font-bold uppercase leading-none font-extrabold text-[var(--color-primary)] md:mb-6 md:text-[20px]"
          >
            Transport i prace ziemne
          </Typography>

          <Typography
            variant="h1"
            className="mb-6 flex flex-col uppercase leading-[0.9] text-[var(--color-primary-text)]"
          >
            <span className="block">Siła.</span>
            <span className="block">Precyzja.</span>
            <span className="block text-[var(--color-primary)]">Termin.</span>
          </Typography>

          <Typography
            variant="text"
            className="mb-8 max-w-[540px] text-[22px] leading-[1.25] text-[var(--color-primary-text)] md:mb-10 md:text-[32px]"
          >
            Kompleksowe usługi koparką i roboty ziemne dla inwestycji
            budowlanych, instalacyjnych i przemysłowych.
          </Typography>

          <Link
            to={routes.offer.path}
            className="button inline-flex items-center justify-center text-[var(--color-primary-text)]"
          >
            Zobacz ofertę
            <ArrowRight size={22} strokeWidth={2.25} className="shrink-0" />
          </Link>
        </div>
          <SliderStats />
        </div>
    </div>
  );
};

export default Slider;
