import * as React from 'react';
import { Link } from 'gatsby';
import { Clock3, Mail, MapPin, ArrowRight, Phone } from 'lucide-react';
import Typography from './Typography/typography';
import Container from './container/container';
import { routes } from '@/router/router';
import './button/button.css';

const contactDetails = [
  {
    icon: Phone,
    value: '48 537 202 251',
    href: 'tel:+48537202251',
  },
  {
    icon: Mail,
    value: 'biuro@exact-transport.pl',
  },
  {
    icon: MapPin,
    value: 'Zagacie, ul. Lawendowa 9',
  },
  {
    icon: Clock3,
    value: 'Pon - Pt: 7:00 - 17:00\nSob: 8:00 - 13:00',
  },
];

const markerLat = 50.0015796;
const markerLng = 19.7003077;
const centerLat = markerLat;
const centerLng = 19.55380661;
const markerQuery = encodeURIComponent(`${markerLat},${markerLng}`);
const centerQuery = encodeURIComponent(`${centerLat},${centerLng}`);
const googleEmbedSrc = `https://www.google.com/maps?q=${markerQuery}&ll=${centerQuery}&z=10&output=embed`;

const Map = () => {
  return (
    <Container>
      <section className="my-32 overflow-hidden rounded-[var(--border-radius)] border border-[var(--color-lines)] bg-[var(--color-white)]">
        <div className="grid xl:grid-cols-[50%_50%]">
          <div className="relative min-h-[420px]">
            <iframe
              title="Mapa Google - Exact Transport"
              src={googleEmbedSrc}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-[var(--space-6)] left-[var(--space-6)] max-w-[320px] bg-[var(--color-white)] p-[var(--space-5)] shadow-[0_20px_60px_var(--color-shadow)]">
              <div className="mb-6 flex size-12 items-center justify-center bg-[var(--color-primary)] text-[var(--color-white)]">
                <MapPin size={24} strokeWidth={2} />
              </div>

              <Typography
                variant="h6"
                className="mb-4 text-[26px] font-extrabold leading-[1.2] text-[var(--color-primary-text)]"
              >
                Działamy na terenie całej Małopolski
              </Typography>

              <Typography
                variant="text"
                className="text-[18px] leading-[1.65] text-[var(--color-primary-text)]"
              >
                Obsługujemy klientów indywidualnych oraz firmy na terenie
                Krakowa i okolic do 100 km.
              </Typography>
            </div>
          </div>

          <div className="border-t border-[var(--color-lines)] p-[var(--space-6)] xl:border-l xl:border-t-0">
            <Typography
              variant="text"
              className="mb-4 text-[14px] font-extrabold uppercase leading-none text-[var(--color-primary)]"
            >
              Kontakt
            </Typography>

            <div className="max-w-[480px]">
              <Typography
                variant="h2"
                className="mb-6 text-[42px] font-extrabold leading-[1.08] text-[var(--color-primary-text)]"
              >
                Porozmawiajmy o Twojej inwestycji.
              </Typography>
            </div>

            <span className="mb-8 block h-[4px] w-10 bg-[var(--color-primary)]" />

            <div className="mb-10 max-w-[480px]">
              <Typography
                variant="text"
                className="text-[18px] leading-[1.7] text-[var(--color-primary-text)]"
              >
                Masz pytania lub potrzebujesz wyceny? Skontaktuj się z nami -
                odpowiemy najszybciej jak to możliwe.
              </Typography>
            </div>

            <div className="mb-10 space-y-7">
              {contactDetails.map(({ icon: Icon, value, href }) => (
                <div key={value} className="grid grid-cols-[28px_minmax(0,1fr)] gap-5">
                  <div className="pt-1 text-[var(--color-primary)]">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {href ? (
                    <a
                      href={href}
                      className="whitespace-pre-line text-[18px] leading-[1.6] text-[var(--color-primary-text)]"
                    >
                      {value}
                    </a>
                  ) : (
                    <Typography
                      variant="text"
                      className="whitespace-pre-line text-[18px] leading-[1.6] text-[var(--color-primary-text)]"
                    >
                      {value}
                    </Typography>
                  )}
                </div>
              ))}
            </div>

            <Link
              to={routes.contact.path}
              className="button button--secondary min-h-[64px] gap-6 px-8 text-[15px]"
            >
              <span>Napisz do nas</span>
              <ArrowRight size={22} strokeWidth={2.25} className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Map;
