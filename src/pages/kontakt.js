import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Container from '@/components/container/container';
import Breadcrumbs from '@/components/breadcrumbs';
import RealizationsContact from '@/components/realizations-contact';
import Map from '@/components/map';
import contactImage from '@/images/contact.png';
import contactPageImage from '@/images/contact_page.jpg';

export default function OfferPage() {
  return (
    <Layout
      mainStyle={{
        backgroundImage: `url(${contactPageImage})`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Seo
        title="Kontakt"
        description="Skontaktuj się z Exact. Odpowiadamy na pytania, przygotowujemy wyceny i pomagamy zaplanować realizację prac ziemnych oraz transportu."
      />

      <Container>
        <div className="mt-24 pb-10">
          <Breadcrumbs
            items={[
              { label: 'Strona główna', to: '/' },
              { label: 'Kontakt' },
            ]}
          />
        </div>

        <RealizationsContact
          imageSrc={contactImage}
          imageAlt="Koparka Exact podczas prac ziemnych"
        />
      </Container>

      <Map />
    </Layout>
  );
}
