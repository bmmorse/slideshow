import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import VAR from './variables';

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
    font-family: 'Fira Sans', sans-serif;
  }

  a,a:visited {
    text-decoration: none;
  }

  .App {
    position: relative;
    width: 100%;
  }

  h1 {
    color: rgba(0, 0, 0, 0.80);
    font-size: 80px;
    line-height: 1;
  }

  h4 {
    color: rgba(0, 0, 0, 0.80);
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 12px;
    line-height: 1;
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
