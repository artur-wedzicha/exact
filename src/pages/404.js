import * as React from 'react';
import { Link } from 'gatsby';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Typography from '../components/Typography/typography';
import { routes } from '@/router/router';
import '../components/button/button.css';

const NotFoundPage = () => (
  <Layout>
    <section className="flex min-h-[calc(100vh-240px)] items-center py-[var(--space-6)]">
      <div className="w-full max-w-[540px]">
        <div className="mb-8 flex items-end gap-3 md:gap-5">
          <Typography
            variant="h1"
            className="mb-0 text-[96px] font-extrabold leading-[0.85] text-[var(--color-primary-text)] md:text-[160px]"
          >
            4
          </Typography>
          <Typography
            variant="h1"
            className="mb-0 text-[96px] font-extrabold leading-[0.85] text-[var(--color-primary)] md:text-[160px]"
          >
            0
          </Typography>
          <Typography
            variant="h1"
            className="mb-0 text-[96px] font-extrabold leading-[0.85] text-[var(--color-primary-text)] md:text-[160px]"
          >
            4
          </Typography>
        </div>

        <Typography
          variant="h2"
          className="mb-8 max-w-[520px] text-[44px] font-extrabold leading-[1.02] text-[var(--color-primary-text)]"
        >
          Strona, której szukasz, nie istnieje.
        </Typography>

        <span className="mb-8 block h-[3px] w-12 bg-[var(--color-primary)]" />

        <div className="mb-10 max-w-[420px]">
          <Typography
            variant="text"
            className="text-[18px] leading-[1.75] text-[var(--color-primary-text)]"
          >
            Wygląda na to, że ta strona została przeniesiona lub nigdy nie
            istniała. Wróć na stronę główną i kontynuuj poszukiwania.
          </Typography>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to={routes.homePage.path}
            className="button min-h-[64px] min-w-0 gap-6 px-8 text-[15px] text-[var(--color-primary-text)]"
          >
            <span className="inline-flex items-center gap-3">
              <ArrowLeft size={20} strokeWidth={2.2} className="shrink-0" />
              <span>Wróć na stronę główną</span>
            </span>
          </Link>

          <Link
            to={routes.offer.path}
            className="button button--outlined-dark min-h-[64px] min-w-0 gap-6 px-8 text-[15px]"
          >
            <span>Zobacz naszą ofertę</span>
            <ArrowRight
              size={20}
              strokeWidth={2.2}
              className="shrink-0 text-[var(--color-primary-text)]"
            />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo title="404: Nie znaleziono strony" />;

export default NotFoundPage;
