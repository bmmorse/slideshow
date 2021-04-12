import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './fonts.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const GlobalCSS = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }


  body {
    font-family: 'ProxRegular';
    height:100%;
  }

  a,a:visited {
    text-decoration: none;
  }

  .App {
    position: relative;
    width: 100%;
  }

h1,h2,h3,h4 {
  font-weight: normal;
}

`;

export default class Globals extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <GlobalCSS />
      </>
    );
  }
}
