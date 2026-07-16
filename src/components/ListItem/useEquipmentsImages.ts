// src/hooks/useEquipmentsImages.js
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const useEquipmentsImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "pages/homepage/equipments" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  const imageMap = {};
  data.allFile.nodes.forEach((node) => {
    imageMap[node.name] = getImage(node.childImageSharp);
  });

  return imageMap;
};

export default useEquipmentsImages;
