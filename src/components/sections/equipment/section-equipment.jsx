import React from 'react';
import Grid from '@/components/grid/grid';
import { routes } from '@/router/router';
import { Link } from 'gatsby';
import AssortmentElement from '@/components/ListItem/AssortmentElement';


const equipments = [
  {
    src: 'excavator',
    name: 'Koparki',
    description:
      'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane do różnych potrzeb inwestycyjnych – od drobnych prac tprzydomowych po większe roboty budowlane.',
    link: routes.offer.excavators.path,
  },
  {
    src: 'transport',
    name: 'Transport',
    description:
      'Mały wóz. Kompleksowe usługi zwane..vMały wóz. Kompleksowe usługi zwane...m.',
    link: routes.offer.transport.path,
  },
  {
    src: 'zageszczarki',
    name: 'Zagęszczarki',
    description:
      'Oferujemy kompleksowe usługi ziemne i koparkowe dostosowane...',
    link: routes.offer.zageszczarki.path,
  },
  {
    src: 'accessories',
    name: 'Akcesoria',
    description: 'Mały wóz. Kompleksowe usługi zwane...',
    link: routes.offer.accessories.path,
  },
];


const EquipmentSection = () => {
  return (
    <Grid container spacing={20}>
      {equipments.map((equipment) => (
        <Grid item xs={12} md={3} key={equipment.name}>
          <Link to={equipment.link}>
            <AssortmentElement
              title={equipment.name}
              description={equipment.description}
              src={equipment.src}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default EquipmentSection;
