import React, { useState } from 'react';
import './gallery-grid.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const sizes = ['small', 'medium', 'large'];

const GalleryGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "pages/homepage/gallery" } }
        sort: { name: ASC }
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

  const tiles = data.allFile.nodes.map((node, i) => {
    const rowIndex = Math.floor(i / 3);
    const isEvenRow = rowIndex % 2 === 0;
    const indexInRow = i % 3;
    const sizeClass = isEvenRow
      ? sizes[indexInRow]
      : sizes.slice().reverse()[indexInRow];

    const imageData = getImage(node);

    return {
      id: i,
      gatsbyImageData: imageData,
      size: sizeClass,
      src: imageData.images.fallback.src,
      alt: `Zdjęcie ${i}`,
    };
  });

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="gallery-grid">
        {tiles.map((tile, index) => (
          <div
            key={tile.id}
            onClick={() => openLightbox(index)}
            className={`gallery-grid__item rounded-xl size-${tile.size}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <GatsbyImage image={tile.gatsbyImageData} alt={tile.alt} />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={tiles[photoIndex].src}
          nextSrc={tiles[(photoIndex + 1) % tiles.length].src}
          prevSrc={tiles[(photoIndex + tiles.length - 1) % tiles.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + tiles.length - 1) % tiles.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % tiles.length)
          }
        />
      )}
    </>
  );
};

export default GalleryGrid;
