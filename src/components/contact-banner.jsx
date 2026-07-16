import * as React from 'react';
import { Link } from 'gatsby';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Typography from './Typography/typography';
import Container from './container/container';
import { routes } from '@/router/router';
import './button/button.css';

const ContactBanner = () => {
  return (
    <section className="bg-[var(--color-primary)] border-b-[6px] border-[var(--color-primary-text)]">
      <Container>
        <div className="flex flex-col gap-8 py-[var(--space-5)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-6 lg:items-center">
            <div className="shrink-0 text-[var(--color-primary-text)]">
              <PhoneCall size={56} strokeWidth={1.8} />
            </div>

            <div>
              <Typography
                variant="h5"
                className="text-[26px] font-extrabold uppercase leading-[1.1] text-[var(--color-primary-text)] md:text-[32px]"
              >
                Masz pytania? Chcesz uzyskać wycenę?
              </Typography>

              <Typography
                variant="text"
                className="max-w-[760px] text-[18px] leading-[1.6] text-[var(--color-primary-text)]"
              >
                Skontaktuj się z nami - doradzimy i przygotujemy ofertę
                dopasowaną do Twoich potrzeb.
              </Typography>
            </div>
          </div>

          <Link
            to={routes.contact.path}
            className="button button--secondary min-h-[68px] gap-6 px-8 text-[15px]"
          >
            <span>Skontaktuj się</span>
            <ArrowRight size={22} strokeWidth={2.25} className="shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactBanner;
