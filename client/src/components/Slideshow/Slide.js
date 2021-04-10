import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const DIV_SLIDE = styled.div`
  display: flex;
  min-width: 100%;
`;

const DIV_IMAGE = styled.div`
  overflow: hidden;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const fade = keyframes`
  from {
    opacity: 0;
    bottom: -20px;
  }
  to {
    opacity: 1; 
    bottom: 0px;
  }
`;

const DIV_TEXT = styled.div`
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'ProxLight';
    font-size: 48px;
    line-height: 64px;
  }

  p {
    max-width: 384px;
    position: relative;
    width: 60%;

    &.fade {
      animation: ${fade} 200ms ease;
    }

    &.hide {
      opacity: 0;
    }
  }
`;

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { animateText, data } = this.props;
    return (
      <DIV_SLIDE>
        <DIV_IMAGE src={data.url}></DIV_IMAGE>
        <DIV_TEXT>
          <h1>
            Ocean Jasper Sphere<br></br>68mm Madagascar
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </DIV_TEXT>
      </DIV_SLIDE>
    );
  }
}
