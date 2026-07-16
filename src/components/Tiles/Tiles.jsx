import * as React from 'react';
import './tiles.css';
import Tile from './Tile/Tile';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Tiles = ({ tiles = [] }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "pages/homepage/services" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
            )
          }
        }
      }
    }
  `);

  const imageMap = new Map();
  data.allFile.nodes.forEach((node) => {
    imageMap.set(node.name, node.childImageSharp.gatsbyImageData);
  });

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

    {tiles.map((tile, index) => {
        const image = imageMap.get(tile.src);
        const ariaLabel = `Przejdź do: ${tile.name}`;

        return (
          <article className="tile-wrapper" key={index}>
            <Link to={tile.link} className="tile-link" aria-label={ariaLabel}>
              <Tile
                title={tile.name}
                description={tile.description}
                imageData={image}
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Tiles;
