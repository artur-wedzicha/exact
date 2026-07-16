import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import SectionContact from '@/components/sections/contact/section-contact';
import SectionAboutUs from '@/components/sections/about-us/about-us';
import Map from '@/components/map';

export default function OfferPage() {
  return (
    <Layout>
      <Seo
        title="Strona główna"
        description="Witaj na mojej super stronie Gatsby!"
      />

      <SectionContact/>
      <Map />
      <SectionAboutUs/>
    </Layout>
  );
}
