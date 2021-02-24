import React from 'react';
import styled from 'styled-components';
import Slideshow from '../Slideshow/Slideshow';

const DIV_WRAPPER = styled.div`
  background: blue;
  width: 100%;
  grid-area: content;
`;

export default class Content extends React.Component {
  render() {
    return (
      <DIV_WRAPPER>
        <Slideshow />
      </DIV_WRAPPER>
    );
  }
}
