import React from 'react';
import styled from 'styled-components';
import VAR from '../Globals/variables';

const DIV_FULL = styled.div`
  background: rgba(255, 255, 255, 1);
  height: 100vh;
  position: fixed;
  width: 640px;
  z-index: 100;

  img {
    padding: 28px 0 0 32px;
    width: 160px;
  }

  .rightBorder {
    background: rgba(0, 0, 0, 0.16);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
  }
`;

const DIV_TEXTWRAP = styled.div`
  margin-top: 160px;
  position: relative;

  .accentLine {
    background: rgba(0, 0, 0, 0.16);
    height: 4px;
    width: 32%;
  }

  h1 {
    padding: 54px 0 0 2rem;
  }
  h4 {
    padding: 62px 0 0 38px;
  }
`;

export default class Sidebar extends React.Component {
  render() {
    return (
      <>
        <DIV_FULL>
          <div className='rightBorder'></div>
          <img src={VAR.images.logo1}></img>

          <DIV_TEXTWRAP>
            <div className='accentLine'></div>
            <h4>16px, light, 12 character</h4>
            <h1>Aliqua ut enim ad minim veniam</h1>
          </DIV_TEXTWRAP>
        </DIV_FULL>
      </>
    );
  }
}
