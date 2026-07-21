import React from 'react';

import Layout from '../../components/layout/layout';
import Seo from '../../components/seo';
import Typography from '../../components/Typography/typography';
import { StaticImage } from 'gatsby-plugin-image';
import { seo } from '@/seo/seo';

export default function OfferExcavatorsPage() {
  return (
    <Layout>
      <Seo title={seo.pages.koparki.title} description={seo.pages.koparki.description} />

      <section className={'mb-32'}>
        <header className="text-center mb-24">
          <Typography variant={'h2'} className="mb-6">
            Koparki
          </Typography>
          <StaticImage
            src={"../../images/pages/homepage/equipments/excavator.png"}
            alt="Logo Exact usługi koparką"
            placeholder="none"
            layout="constrained"
            loading={'eager'}
            formats={['auto', 'webp']}
            priority={true}
          />
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
