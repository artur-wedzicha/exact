/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';

import './layout.css';
import '../../styles/global-tailwind.css';
import MainHeader from '../main-header/main-header';
import MainFooter from '../main-footer/main-footer';
import { useLocation } from '@reach/router';
import bgImage from '../../images/bg.webp';

const Layout = ({ children, mainStyle }) => {
  const location = useLocation();
  const pathPrefix = __PATH_PREFIX__ || '';
  const stripPrefixedAssetPath = (assetPath) => {
    if (!pathPrefix || typeof assetPath !== 'string') {
      return assetPath;
    }

    return assetPath.startsWith(`${pathPrefix}/`)
      ? assetPath.slice(pathPrefix.length)
      : assetPath;
  };
  const normalizeBackgroundImage = (backgroundImage) => {
    if (typeof backgroundImage !== 'string') {
      return backgroundImage;
    }

    const urlMatch = backgroundImage.match(/^url\((['"]?)(.*)\1\)$/);
    if (!urlMatch) {
      return backgroundImage;
    }

    const normalizedAssetPath = stripPrefixedAssetPath(urlMatch[2]);
    return `url(${normalizedAssetPath})`;
  };
  const normalizedPathname = pathPrefix
    ? location.pathname.replace(pathPrefix, '') || '/'
    : location.pathname;
  const isHomePage = normalizedPathname === '/';
  const normalizedMainStyle = mainStyle?.backgroundImage
    ? {
        ...mainStyle,
        backgroundImage: normalizeBackgroundImage(mainStyle.backgroundImage),
      }
    : mainStyle;
  const computedMainStyle = isHomePage
    ? {
        backgroundImage: `url(${stripPrefixedAssetPath(bgImage)})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        ...normalizedMainStyle,
      }
    : normalizedMainStyle;

  return (
    <div className={`layout ${isHomePage ? 'layout--homepage' : ''}`}>
      <MainHeader isHomePage={isHomePage}/>
      <main className={`${!isHomePage ? 'pt-24' : ''}`} style={computedMainStyle}>
        {children}
      </main>
      <MainFooter/>
    </div>
  )
};

export default Layout;
