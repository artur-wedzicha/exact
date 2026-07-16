import * as React from 'react';
import './AssortmentElement.css';
import Typography from '../Typography/typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import useEquipmentsImages from '@/components/ListItem/useEquipmentsImages';

const AssortmentElement = ({ title = 'Sample title', description = '', src }) => {
  const images = useEquipmentsImages();
  const image = images[src];

  return (
    <div className="assortment flex flex-col items-center text-center gap-4">
      <div className='assortment__thumb flex items-center justify-center w-full h-48'>
      {image && (
        <GatsbyImage
          image={image}
          alt={`Obrazek: ${title}`}
          className="h-auto"
        />
      )}
      </div>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="p">{description}</Typography>
    </div>
  );
};

export default AssortmentElement;
