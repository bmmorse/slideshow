import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const DIV_SLIDE = styled.div`
  display: flex;
  min-width: 100%;
`;

const DIV_IMAGE = styled.div`
  overflow: hidden;
  width: 67%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1; 
    transform: translateY(0px);
  }
`;

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1; 
    transform: translateY(0px);
  }
`;

const DIV_TEXT = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .fadeUp {
    animation: ${fadeUp} 300ms ease;
  }

  .fadeDown {
    animation: ${fadeDown} 300ms ease;
  }

  .hideUp {
    opacity: 0;
    transform: translateY(-40px);
    transition: all 200ms ease;
  }

  .hideDown {
    opacity: 0;
    transform: translateY(40px);
    transition: all 200ms ease;
  }

  h1 {
    font-family: 'ProxLight';
    font-size: 48px;
    position: relative;
    line-height: 64px;
  }

  p {
    max-width: 384px;
    position: relative;
  }
`;

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { animateSlide, data } = this.props;
    return (
      <DIV_SLIDE>
        <DIV_IMAGE src={data.url}></DIV_IMAGE>
        <DIV_TEXT>
          <h1 className={animateSlide ? 'fadeUp' : 'hideUp'}>{data.city}</h1>
          <p className={animateSlide ? 'fadeDown' : 'hideDown'}>
            {data.country}
          </p>
        </DIV_TEXT>
      </DIV_SLIDE>
    );
  }
}
