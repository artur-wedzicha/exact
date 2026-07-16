import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Typography from '../components/Typography/typography';
import EquipmentSection from '@/components/sections/equipment/section-equipment';
import SectionContact from '@/components/sections/contact/section-contact';
import ContactForm from '@/components/form/form';
import { StaticImage } from 'gatsby-plugin-image';
import Grid from '@/components/grid/grid';

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo
        title="Strona główna"
        description="Witaj na mojej super stronie Gatsby!"
      />

      <section className={'mb-32'}>
        <header className="text-left mb-24">
          <Typography variant={'h2'} className="mb-6">
            O nas
          </Typography>
          <Typography variant="p" className="text-wrap text-left">
            Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane do
            różnych potrzeb inwestycyjnych – od drobnych prac tprzydomowych po
            większe roboty budowlane. Dysponujemy nowoczesnym sprzętem, w tym
            dużą i małą koparką oraz ubijarką.
          </Typography>
        </header>
        <Grid container spacing={20}>
          <Grid item xs={12} md={8}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={4}>
            <StaticImage
              src="../images/adrian.png"
              alt="Logo Exact usługi koparką"
              placeholder="none"
              layout="constrained"
              loading={'eager'}
              formats={['auto', 'webp', 'png']}
              priority={true}
            />
          </Grid>
        </Grid>
      </section>

      <section className={'mb-32'}>
        <EquipmentSection />
      </section>
    </Layout>
  );
}
