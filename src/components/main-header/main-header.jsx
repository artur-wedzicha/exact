import * as React from 'react';
import './main-header.css';
import Container from '../container/container';
import Navigation from '../navigation/navigation';
import logoColor from '@images/exact_logo_color.svg';
import { Link } from 'gatsby'
import { routes } from '@/router/router';
import useScrollThreshold from '@/hooks/useScrollThreshold';

const MainHeader = ({isHomePage}) => {
  const isSticky = useScrollThreshold();

  return (
    <header className={`main-header ${(isSticky) ? 'sticky top-0 left-0 right-0 z-50 bg-white shadow-md' : ''} transition-all duration-300`}>
      <Container>
        <Link to={routes.homePage.path}>
          <img src={logoColor} alt="Logo Exact usługi koparką" className="logo" />
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};

export default MainHeader;
