import * as React from 'react';
import { Link } from 'gatsby';
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Construction,
  Handshake,
  HardHat,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../container/container';
import Typography from '@/components/Typography/typography';
import { routes } from '@/router/router';
import logo from '@images/exact_logo_color.svg';
import darkLogo from '@images/exact_logo_dark.svg';
import '../button/button.css';

const serviceLinks = [
  { label: 'Prace ziemne', to: routes.offer.excavators.path },
  { label: 'Transport', to: routes.offer.transport.path },
  { label: 'Wywrotki', to: routes.offer.transport.path },
  { label: 'Zagęszczanie terenu', to: routes.offer.zageszczarki.path },
  { label: 'Rozbiórki', to: routes.offer.accessories.path },
  { label: 'Porządkowanie i wycinka', to: routes.offer.accessories.path },
  { label: 'Wynajem sprzętu', to: routes.offer.path },
  { label: 'Pełna lista usług', to: routes.offer.path },
];

const aboutLinks = [
  { label: 'O nas', to: routes.aboutUs.path },
  { label: 'Dlaczego my?', to: routes.aboutUs.path },
  { label: 'Sprzęt', to: routes.offer.path },
  { label: 'Realizacje', to: routes.realizations.path },
  { label: 'Referencje', to: routes.realizations.path },
  { label: 'Kariera', to: routes.contact.path },
];

const customerLinks = [
  { label: 'FAQ' },
  { label: 'Blog' },
  { label: 'Polityka prywatności' },
  { label: 'Regulamin' },
  { label: 'Warunki współpracy' },
];

const strengths = [
  {
    icon: Construction,
    label: 'Nowoczesny sprzęt',
  },
  {
    icon: ShieldCheck,
    label: 'Doświadczenie i niezawodność',
  },
  {
    icon: UsersRound,
    label: 'Wykwalifikowany zespół',
  },
  {
    icon: Handshake,
    label: 'Indywidualne podejście',
  },
];

const stats = [
  {
    icon: Construction,
    value: '10+',
    label: 'Lat doświadczenia',
  },
  {
    icon: Truck,
    value: '250+',
    label: 'Zrealizowanych projektów',
  },
  {
    icon: UsersRound,
    value: '20+',
    label: 'Specjalistów w zespole',
  },
  {
    icon: HardHat,
    value: '100%',
    label: 'Bezpieczeństwo',
  },
];

const contactItems = [
  {
    icon: Phone,
    content: (
      <a href="tel:+48537202251" className="text-[var(--color-primary-text)]">
        +48 537 202 251
      </a>
    ),
  },
  {
    icon: Mail,
    content: (
      <a
        href="mailto:biuro@exact-transport.pl"
        className="text-[var(--color-primary-text)]"
      >
        biuro@exact-transport.pl
      </a>
    ),
  },
  {
    icon: MapPin,
    content: (
      <>
        Zagacie, ul. Lawendowa 9
        <br />
        32-070 Czernichów
      </>
    ),
  },
  {
    icon: Clock3,
    content: (
      <>
        Pon - Pt: 7:00 - 17:00
        <br />
        Sob: 8:00 - 13:00
      </>
    ),
  },
];

const FooterLinkList = ({ title, items }) => (
  <div className="flex flex-col gap-6">
    <div>
      <Typography
        variant="h5"
        className="mb-5 text-[18px] font-extrabold uppercase leading-none text-[var(--color-primary-text)]"
      >
        {title}
      </Typography>
      <span className="block h-[3px] w-9 bg-[var(--color-primary)]" />
    </div>

    <ul className="space-y-5">
      {items.map(({ label, to }) => (
        <li key={label}>
          {to ? (
            <Link
              to={to}
              className="inline-flex items-start gap-3 text-[17px] leading-[1.45] text-[var(--color-primary-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              <ChevronRight
                size={18}
                strokeWidth={2}
                className="mt-[3px] shrink-0 text-[var(--color-primary)]"
              />
              <span>{label}</span>
            </Link>
          ) : (
            <div className="inline-flex items-start gap-3 text-[17px] leading-[1.45] text-[var(--color-primary-text)]">
              <ChevronRight
                size={18}
                strokeWidth={2}
                className="mt-[3px] shrink-0 text-[var(--color-primary)]"
              />
              <span>{label}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const MainFooter = () => {
  return (
    <footer className="main-footer bg-[var(--color-white)]">
      <Container>
        <div className="h-px bg-[var(--color-lines)]" />
        <div className="pt-[var(--space-6)]">
          <div className="grid gap-12 pb-[var(--space-6)] xl:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(320px,1fr)]">
            <div className="flex flex-col gap-8">
              <Link to={routes.homePage.path} className="inline-flex">
                <img
                  src={logo}
                  alt="Exact prace ziemne i transport"
                  className="h-auto w-[230px]"
                />
              </Link>

              <div className="max-w-[360px]">
                <Typography
                  variant="text"
                  className="text-[18px] leading-[1.75] text-[var(--color-primary-text)]"
                >
                  Świadczymy kompleksowe usługi w zakresie prac ziemnych oraz
                  transportu. Działamy na terenie całej Małopolski, gwarantując
                  jakość, terminowość i profesjonalne podejście do każdego
                  zlecenia.
                </Typography>
              </div>

              <div>
                <span className="mb-8 block h-[3px] w-9 bg-[var(--color-primary)]" />

                <ul className="space-y-6">
                  {strengths.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-4 text-[var(--color-primary-text)]"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center text-[var(--color-primary)]">
                        <Icon size={28} strokeWidth={1.9} />
                      </div>
                      <Typography
                        variant="text"
                        className="text-[17px] font-semibold leading-[1.4] text-[var(--color-primary-text)]"
                      >
                        {label}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <FooterLinkList title="Usługi" items={serviceLinks} />
            <FooterLinkList title="O firmie" items={aboutLinks} />
            <FooterLinkList title="Dla klienta" items={customerLinks} />

            <div className="flex flex-col gap-6">
              <div>
                <Typography
                  variant="h5"
                  className="mb-5 text-[18px] font-extrabold uppercase leading-none text-[var(--color-primary-text)]"
                >
                  Kontakt
                </Typography>
                <span className="block h-[3px] w-9 bg-[var(--color-primary)]" />
              </div>

              <div className="space-y-7">
                {contactItems.map(({ icon: Icon, content }, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 text-[var(--color-primary-text)]"
                  >
                    <div className="pt-[2px] text-[var(--color-primary)]">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <Typography
                      variant="text"
                      className="text-[18px] leading-[1.65] text-[var(--color-primary-text)]"
                    >
                      {content}
                    </Typography>
                  </div>
                ))}
              </div>

              <Link
                to={routes.contact.path}
                className="button button--outlined-dark mt-4 min-h-[64px] gap-6 px-8 text-[15px]"
              >
                <span>Napisz do nas</span>
                <ArrowRight
                  size={22}
                  strokeWidth={2.25}
                  className="shrink-0 text-[var(--color-primary)]"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-[var(--space-6)] overflow-hidden bg-[var(--color-primary)]">
        <Container>
          <div className="relative py-[var(--space-5)]">
            <div className="absolute bottom-0 left-0 hidden opacity-15 lg:block">
              <StaticImage
                src="../../images/excavator.png"
                alt=""
                aria-hidden="true"
                className="w-[240px]"
                imgClassName="object-contain"
                placeholder="none"
                loading="eager"
                formats={['auto', 'webp']}
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="lg:pl-[180px]">
                <Typography
                  variant="text"
                  className="text-[18px] leading-[1.6] text-[var(--color-primary-text)]"
                >
                  © 2024 <strong>EXACT.</strong> Wszelkie prawa zastrzeżone.
                </Typography>
              </div>

              <div className="flex items-center gap-4 text-[var(--color-primary-text)]">
                <Typography
                  variant="text"
                  className="text-[18px] leading-none text-[var(--color-primary-text)]"
                >
                  Realizacja:
                </Typography>
                <img
                  src={darkLogo}
                  alt="Exact"
                  className="h-auto w-[112px]"
                />
              </div>
            </div>

            <div className="relative z-10 mt-6 border-t border-[var(--color-footer-divider)]" />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default MainFooter;
