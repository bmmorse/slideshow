import React from 'react';
import styled from 'styled-components';
import Slideshow from '../Slideshow/Slideshow';

const DIV_HOME = styled.div`
  display: grid;
  grid-template-areas: '. content';
  grid-template-columns: 640px 1fr;
  width: 100%;
`;

export default class Home extends React.Component {
  render() {
    return (
      <DIV_HOME>
        <Slideshow />
      </DIV_HOME>
    );
  }
}
