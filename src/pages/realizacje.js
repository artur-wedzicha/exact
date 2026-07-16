import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Typography from '../components/Typography/typography';
import GalleryGrid from '@/components/gallery-grid/gallery-grid';
import SectionContact from '@/components/sections/contact/section-contact';
import SectionAboutUs from '@/components/sections/about-us/about-us';

export default function OfferPage() {
  return (
    <Layout>
      <Seo
        title="Strona główna"
        description="Witaj na mojej super stronie Gatsby!"
      />

      {/*<SectionAboutUs/>*/}
      <section className={'mb-32'}>
        <header className="text-left mb-24">
          <Typography variant={'h2'} className="mb-6">
            Realzacje
          </Typography>
          <Typography variant="p" className="text-wrap text-left">
            Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane do
            różnych potrzeb inwestycyjnych – od drobnych prac tprzydomowych po
            większe roboty budowlane. Dysponujemy nowoczesnym sprzętem, w tym
            dużą i małą koparką oraz ubijarką.
          </Typography>
        </header>

        <GalleryGrid/>
        <GalleryGrid/>
        <GalleryGrid/>

      </section>
      <SectionContact/>
    </Layout>
  );
}
