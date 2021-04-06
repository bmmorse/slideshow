import React from 'react';
import styled, { keyframes } from 'styled-components';

const DIV_SLIDE = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 100%;
  padding: 4rem;

  img {
    min-width: 72%;
    // min-height: 100%;
  }
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

const Para = styled.p`
  &.hide {
    opacity: 0;
  }

  &.fade {
    animation: ${fade} 1000ms ease;
  }
`;

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DIV_SLIDE>
        <img src={this.props.data.url} alt='' />
        <Para visible={this.props.visible}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Para>
      </DIV_SLIDE>
    );
  }
}
