import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from '@/components/Typography/typography';

const SectionAboutUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
      <header className="text-left mb-24 flex flex-col gap-6">
        <Typography variant={'h2'} className="mb-6 leading-ztight">
          O nas
        </Typography>
        <Typography variant="p" className="leading-loose">
          Jesteśmy dynamicznie rozwijającą się firmą specjalizującą się w
          profesjonalnych pracach ziemnych oraz usługach koparką. Oferujemy
          kompleksowe przygotowanie terenu pod budowę domu – od niwelacji
          gruntu, przez wykopy, aż po transport ziemi i kruszywa.
        </Typography>
        <Typography variant="p" className="leading-loose">
          Dzięki nowoczesnemu sprzętowi, w tym dużym i małym koparkom oraz
          zagęszczarce, realizujemy zlecenia szybko, sprawnie i z dbałością o
          każdy detal. Obsługujemy zarówno klientów indywidualnych, jak i
          firmy budowlane.{' '}
        </Typography>
        <Typography variant="p" className="leading-loose">
          Naszym celem jest dostarczanie niezawodnych usług ziemnych na
          najwyższym poziomie – od A do Z. Zaufaj doświadczeniu i postaw na
          solidne przygotowanie terenu pod Twoją inwestycję!{' '}
        </Typography>
      </header>

      <div>
        <StaticImage
          src="../../../images/pages/homepage/aboutus/about_us.webp"
          alt="Logo Exact usługi koparką"
          placeholder="none"
          layout="constrained"
          loading="eager"
          formats={['auto', 'webp']}
          priority={true}
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
};

export default SectionAboutUs;
