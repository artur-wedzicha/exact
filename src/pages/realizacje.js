import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import GalleryGrid from '@/components/gallery-grid/gallery-grid';
import PageHeader from '@/components/pageheader';
import Breadcrumbs from '@/components/breadcrumbs';
import Container from '@/components/container/container';
import RealizationsStats from '@/components/realizations-stats';
import RealizationsContact from '@/components/realizations-contact';
import realizationsPageImage from '@/images/realizations_page.jpg';
import contactImage from '@/images/contact.png';

export default function OfferPage() {
  return (
    <Layout
      mainStyle={{
        backgroundImage: `url(${realizationsPageImage})`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Seo
        title="Realizacje"
        description="Zobacz nasze realizacje w praktyce. Solidny sprzęt, doświadczenie i zaangażowanie w każdym projekcie."
      />

      <Container>
        <div className="mt-24 pb-10">
          <Breadcrumbs
            items={[
              { label: 'Strona główna', to: '/' },
              { label: 'Realizacje' },
            ]}
          />
        </div>

        <PageHeader
          title="Realizacje"
          description="Zobacz nasze realizacje w praktyce. Solidny sprzęt, doświadczenie i zaangażowanie w każdym projekcie."
          transparent
        />

        <section className="mt-24">
          <RealizationsStats />
        </section>

        <section className="mb-32 mt-12">
          <GalleryGrid />
        </section>

        <RealizationsContact
          imageSrc={contactImage}
          imageAlt="Koparka Exact podczas prac ziemnych"
        />
      </Container>
    </Layout>
  );
}
