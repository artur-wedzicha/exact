import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ContactForm from '../../form/form';
import Grid from '@/components/grid/grid';
import Typography from '@/components/Typography/typography';

const SectionContact = () => {
  return (
    <section className={'mb-32'}>
      <Grid container spacing={20}>
        <Grid item xs={12} md={6}>
          <header className="text-left mb-24">
            <Typography variant={'h2'} className="mb-6 leading-tight">
              Masz pytania? Chcesz uzyskać wycenę lub umówic termin realizacji?
            </Typography>
            <Typography variant={'p'} className="leading-loose">
              Skontaktuj się z nami – z przyjemnością doradzimy i pomożemy dobrać najlepsze
              rozwiązania w zakresie prac ziemnych, przygotowania terenu czy usług koparką.
              Działamy lokalnie i regionalnie – oferujemy usługi koparką w Zagaciu, prace
              ziemne w Czernichowie, a także transport kruszywa i ziemi na terenie całego
              powiatu krakowskiego, jak również w całym województwie małopolskim i śląskim.
            </Typography>
          </header>

          <StaticImage
            src="../../../images/pages/homepage/contact/contact.webp"
            alt="Logo Exact usługi koparką"
            placeholder="none"
            layout="constrained"
            loading={'eager'}
            formats={["auto", "webp", "avif"]}
            priority={true}
            className={'rounded-xl'}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </section>
  );
};

export default SectionContact;
