import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '../../Typography/typography';
import './tile.css';

const Tile = ({ title, description, imageData }) => {
  const titleId = `tile-title-${title.replace(/\s+/g, '-')}`;

  return (
    <div className="tile text-center" role="group" aria-labelledby={titleId}>
      <GatsbyImage
        image={imageData}
        alt={title}
        className="tile__image"
      />

      <Typography
        id={titleId}
        variant="h3"
        className="tile__title leading-normal"

      >
        {title}
      </Typography>

      <Typography variant="p" className="tile__description leading-loose">
        {description}
      </Typography>
    </div>
  );
};

export default Tile;
