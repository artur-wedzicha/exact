import React from 'react';
import '../styles/global.css';
import './index.css';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Slider from '../components/slider/slider';
import AboutUs from '../components/aboutus';
import Container from '../components/container/container';
import {routes} from '@/router/router';
import Services from '@/components/services/services';
import Assortment from '@/components/assortment';
import Gallery from '@/components/gallery';
import ContactBanner from '@/components/contact-banner';
import Map from '@/components/map';

const services = [
    {
        src: 'wykopy-wod-kan',
        name: 'Wykopy wodno-kanalizacyjne',
        description:
            'Mały wóz. Kompleksowe usługi zwane..vMały wóz. Kompleksowe usługi zwane...m.',
        link: routes.offer.excavators.path,
    },
    {
        src: 'wykopy-elektryczne',
        name: 'Wykopy elektryczne',
        description:
            'Mały wóz. Kompleksowe usługi zwane..vMały wóz. Kompleksowe usługi zwane...m.',
        link: routes.offer.excavators.path,
    },
    {
        src: 'wykopy-gazowe',
        name: 'Wykopy gazowe',
        description:
            'Mały wóz. Kompleksowe usługi zwane..vMały wóz. Kompleksowe usługi zwane...m.',
        link: routes.offer.excavators.path,
    },
    {
        src: 'wykopy-fundamenty',
        name: 'Wykopy pod fundamenty',
        description:
            'Mały wóz. Kompleksowe usługi zwane..vMały wóz. Kompleksowe usługi zwane...m.',
        link: routes.offer.transport.path,
    },
    {
        src: 'wykopy-fundamenty',
        name: 'Wykopy pod płyty fundamentowe',
        description:
            'Mały wóz. Kompleksowe usługi zwane..vMały wóz. Kompleksowe usługi zwane...m.',
        link: routes.offer.transport.path,
    },
    {
        src: 'parkingi',
        name: 'Drogi dojazdowe, parkingi',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
    {
        src: 'zageszczarki',
        name: 'Zagęszczenia tereny',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
    {
        src: 'zbiorniki',
        name: 'Zbiorniki wodne, szamba',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
    {
        src: 'niwelacja',
        name: 'Niewelacja terenu',
        description: 'Mały wóz. Kompleksowe usługi zwane...',
        link: routes.offer.accessories.path,
    },
    {
        src: 'odwodnienia',
        name: 'Odwodnienia terenu',
        description: 'Mały wóz. Kompleksowe usługi zwane...',
        link: routes.offer.accessories.path,
    },
    {
        src: 'zageszczarki',
        name: 'Prace ziemne',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },

    {
        src: 'kanalizacje',
        name: 'Kanalizacja',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },

    {
        src: 'palisady',
        name: 'Układanie palisad',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
    {
        src: 'geokraty',
        name: 'Układanie geokraty',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
    {
        src: 'obrzeza',
        name: 'Układanie obrzeży',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
    {
        src: 'kostka-brukowa',
        name: 'Układanie kostki brukowej',
        description:
            'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
        link: routes.offer.zageszczarki.path,
    },
];

export default function HomePage() {
    return (
        <Layout>
            <Seo
                title="Strona główna"
                description="Witaj na mojej super stronie Gatsby!"
            />
            <Container>
                <Slider/>
                <AboutUs/>
            </Container>

            <ContactBanner/>
            <Services items={services}/>

            <Container>
                <Assortment/>
            </Container>
            <Gallery/>
            <Map/>
        </Layout>
    );
}
