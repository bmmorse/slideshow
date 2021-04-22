import React from 'react';
import styled, { keyframes } from 'styled-components';

const DIV_SLIDE = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  flex-direction: column;

  @media (min-width: 1152px) {
    flex-direction: row;
  }
`;

const DIV_IMAGE = styled.div`
  overflow: hidden;
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 1152px) {
    width: 76%;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 10%;
  justify-content: center;
  height: 160px;
  min-height: 160px;

  color: hsla(225, 6%, 13%, 1);

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
    position: relative;
    font-size: 24px;
    line-height: 1;
  }

  p {
    max-width: 384px;
    position: relative;
    color: hsla(0, 0%, 0%, 0.64);
  }

  @media (min-width: 1152px) {
    align-items: center;
    width: 24%;
    padding-left: 0%;
    height: 100%;
    h1 {
      margin: 0 0 8px 0;
      font-size: 40px;
      line-height: 1;
    }
  }
`;

export default class Slide extends React.Component {
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
