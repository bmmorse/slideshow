import React from 'react';
import styled from 'styled-components';

const DIV_SLIDE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;

  img {
    max-height: 80vh;
    max-width: 100%;
  }
`;

const Para = styled.p``;

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
    }
  }

  render() {
    return (
      <DIV_SLIDE>
        <img src={this.props.data.url} alt='' />
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Para>
      </DIV_SLIDE>
    );
  }
}
