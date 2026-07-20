import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import Typography from './Typography/typography';
import { routes } from '@/router/router';
import Container from './container/container';
import './button/button.css';

const galleryItems = [
  {
    key: '719189926_1011090175201407_3036841626463715853_n',
    title: 'Budowa drogi dojazdowej',
    location: 'Kraków',
    year: '2024',
  },
  {
    key: '656486062_944962248480867_7549960103650031739_n',
    title: 'Wykopy pod fundamenty',
    location: 'Wieliczka',
    year: '2024',
  },
  {
    key: '720776632_1014718264838598_2815066638155342621_n',
    title: 'Utwardzanie terenu',
    location: 'Bochnia',
    year: '2024',
  },
];

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query GallerySectionImages {
      allFile(
        filter: { relativeDirectory: { regex: "/icons\\/gallery\\/[1-4]$/" } }
        sort: { name: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const imageMap = data.allFile.nodes.reduce((acc, node) => {
    acc[node.name] = getImage(node.childImageSharp);
    return acc;
  }, {});

  return (
    <section className="overflow-hidden bg-[var(--color-primary-text)] p-[var(--space-6)]">
      <Container>
        <div className="grid gap-8 xl:grid-cols-4 xl:items-start">
          <div className="flex h-full flex-col justify-between border-b border-white/10 pb-8 xl:min-h-[292px] xl:border-b-0 xl:pb-0">
            <div>
              <Typography
                variant="text"
                className="mb-4 text-[14px] font-extrabold uppercase leading-none text-[var(--color-primary)]"
              >
                Realizacje
              </Typography>

              <Typography
                variant="h3"
                className="max-w-[300px] text-[36px] font-extrabold uppercase leading-[1.08] text-white"
              >
                Zobacz nasze ostatnie projekty
              </Typography>
            </div>

            <div className="mt-8 pt-6">
              <Link
                to={routes.realizations.path}
                className="button button--outlined min-h-[64px] gap-6 px-6 text-[15px] text-white"
              >
                <span>Zobacz wszystkie realizacje</span>
                <ArrowRight
                  size={20}
                  strokeWidth={2.2}
                  className="text-[var(--color-primary)]"
                />
              </Link>
            </div>
          </div>

          {galleryItems.map(({ key, title, location, year }) => (
            <Link
              key={key}
              to={routes.realizations.path}
              className="group flex flex-col"
            >
              <div className="relative mb-4 overflow-hidden border border-white/10">
                {imageMap[key] ? (
                  <GatsbyImage
                    image={imageMap[key]}
                    alt={title}
                    className="h-[226px] w-full"
                    imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : null}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[var(--color-primary)]">
                  <ImageIcon size={18} strokeWidth={2} />
                  <span className="h-px w-6 bg-[var(--color-primary)]" />
                </div>
              </div>

              <Typography
                variant="text"
                className="mb-1 text-[18px] font-extrabold uppercase leading-[1.25] text-white"
              >
                {title}
              </Typography>

              <div className="flex items-center justify-between gap-4 text-[16px] text-[var(--color-secondary-text)]">
                <Typography
                  variant="text"
                  className="text-[16px] text-[var(--color-secondary-text)]"
                >
                  {location}
                </Typography>
                <Typography
                  variant="text"
                  className="text-[16px] text-[var(--color-secondary-text)]"
                >
                  {year}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
