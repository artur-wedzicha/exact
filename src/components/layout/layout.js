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

const Layout = ({children}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`layout ${isHomePage ? 'layout--homepage' : ''}`}>
      <MainHeader isHomePage={isHomePage}/>
      <main className={`${!isHomePage ? 'pt-24' : ''}`}>
        {children}
      </main>
      <MainFooter/>
    </div>
  )
};

export default Layout;
