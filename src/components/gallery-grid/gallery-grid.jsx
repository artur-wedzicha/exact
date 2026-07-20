import React, { useState } from 'react';
import './gallery-grid.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Typography from '@/components/Typography/typography';

const sizes = ['small', 'medium', 'large'];

const projectMeta = [
  { location: 'Kraków, 04.2024', title: 'Wykopy pod fundamenty' },
  { location: 'Czernichów, 03.2024', title: 'Prace ziemne - przygotowanie terenu' },
  { location: 'Skawina, 02.2025', title: 'Transport kruszywa' },
  { location: 'Liszki, 01.2024', title: 'Niwelacje terenu' },
  { location: 'Zabierzów, 12.2023', title: 'Załadunek i transport materiałów' },
  { location: 'Kraków, 11.2023', title: 'Transport wywrotką' },
  { location: 'Mogilany, 10.2023', title: 'Wykopy pod instalacje' },
  { location: 'Niepołomice, 09.2023', title: 'Rozbiórka obiektu' },
];

const GalleryGrid = ({ directory = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { regex: "/icons\\/gallery\\/[1-4]$/" } }
        sort: [{ relativeDirectory: ASC }, { name: ASC }]
      ) {
        nodes {
          name
          relativeDirectory
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

  const filteredNodes = directory
    ? data.allFile.nodes.filter((node) => node.relativeDirectory === directory)
    : data.allFile.nodes;

  const visibleNodes = filteredNodes.filter(
    (node) => !node.name.startsWith('social_')
  );

  const orderedNodes =
    !directory && visibleNodes.length > 10
      ? [...visibleNodes.slice(10), ...visibleNodes.slice(0, 10)]
      : visibleNodes;

  const tiles = orderedNodes.map((node, i) => {
    const imageData = getImage(node.childImageSharp);
    const meta = projectMeta[i % projectMeta.length];
    const rowIndex = Math.floor(i / 3);
    const indexInRow = i % 3;
    const sizeClass =
      rowIndex % 2 === 0
        ? sizes[indexInRow]
        : sizes.slice().reverse()[indexInRow];

    return {
      id: i,
      gatsbyImageData: imageData,
      sizeClass,
      src: imageData.images.fallback.src,
      alt: meta.title,
      location: meta.location,
      title: meta.title,
    };
  });

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  if (!tiles.length) {
    return null;
  }

  return (
    <>
      <div className="gallery-grid">
        {tiles.map((tile, index) => (
          <div
            key={tile.id}
            onClick={() => openLightbox(index)}
            className={`gallery-grid__item group relative overflow-hidden rounded-[var(--border-radius)] size-${tile.sizeClass}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <GatsbyImage
              image={tile.gatsbyImageData}
              alt={tile.alt}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,25,26,0.82)] via-[rgba(25,25,26,0.18)] to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <Typography
                variant="text"
                className="mb-1 text-[13px] leading-none text-[var(--color-white)]"
              >
                {tile.location}
              </Typography>
              <Typography
                variant="text"
                className="text-[15px] font-semibold leading-[1.3] text-[var(--color-white)]"
              >
                {tile.title}
              </Typography>
            </div>
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
