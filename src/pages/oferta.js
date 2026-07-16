import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Typography from '../components/Typography/typography';

export default function OfferPage() {
  return (
    <Layout>
      <Seo
        title="Strona główna"
        description="Witaj na mojej super stronie Gatsby!"
      />

      <section className={'mb-32'}>
        <header className="text-center mb-24">
          <Typography variant={'h2'} className="mb-6">
            Oferta
          </Typography>
          <Typography variant="p" className="mx-auto text-wrap text-center">
            Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane do
            różnych potrzeb inwestycyjnych – od drobnych prac tprzydomowych po
            większe roboty budowlane. Dysponujemy nowoczesnym sprzętem, w tym
            dużą i małą koparką oraz ubijarką.
          </Typography>
        </header>
      </section>
    </Layout>
  );
}
