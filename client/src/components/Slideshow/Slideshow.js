import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slide from './Slide';
import SlideData from './Data';

const DIV_WRAPPER = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const next = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const prev = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

const DIV_SLIDES = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  right: 100%;

  &.next {
    animation: 500ms ${next} ease;
  }
  &.prev {
    animation: 500ms ${prev} ease;
  }
`;

const DIV_BUTTON = styled.div`
  background: red;
  width: 240px;
  height: 80px;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    width: 100%;
  }
`;

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.DIV_SLIDES = React.createRef();

    this.state = {
      slideNumber: 0,
    };

    this.slides = SlideData;
  }

  handleClick = (e) => {
    const { slideNumber } = this.state;
    const id = e.target.id;
    const DIV_SLIDES = this.DIV_SLIDES.current;
    const slides = this.slides;

    const newSlideNumber = (function setSlideNumber() {
      if (id == 'prev') {
        if (slideNumber == 0) {
          return slides.length - 1;
        } else {
          return slideNumber - 1;
        }
      } else {
        if (slideNumber == slides.length - 1) {
          return 0;
        } else {
          return slideNumber + 1;
        }
      }
    })();

    DIV_SLIDES.children[0].querySelector('p').classList.add('hide');
    DIV_SLIDES.children[0].querySelector('h1').classList.add('hide');

    DIV_SLIDES.children[1].querySelector('p').classList.remove('fade');
    DIV_SLIDES.children[1].querySelector('h1').classList.remove('fadeDown');

    DIV_SLIDES.children[2].querySelector('h1').classList.add('hide');
    DIV_SLIDES.children[2].querySelector('p').classList.add('hide');

    DIV_SLIDES.classList.add(id);

    DIV_SLIDES.onanimationend = () => {
      DIV_SLIDES.classList.remove(id);

      this.setState(
        {
          slideNumber: newSlideNumber,
        },
        () => {
          DIV_SLIDES.children[1].querySelector('p').classList.remove('hide');
          DIV_SLIDES.children[1].querySelector('h1').classList.remove('hide');

          DIV_SLIDES.children[1].querySelector('p').classList.add('fade');
          DIV_SLIDES.children[1].querySelector('h1').classList.add('fadeDown');
        }
      );
    };
  };

  render() {
    const { slideNumber, animateText } = this.state;
    const slides = this.slides;
    return (
      <DIV_WRAPPER>
        <DIV_SLIDES ref={this.DIV_SLIDES}>
          <Slide
            data={
              slideNumber - 1 < 0
                ? slides[slides.length - 1]
                : slides[slideNumber - 1]
            }
          />
          <Slide data={slides[slideNumber]} />
          <Slide
            data={
              slideNumber + 1 == slides.length
                ? slides[0]
                : slides[slideNumber + 1]
            }
          />
        </DIV_SLIDES>
        <DIV_BUTTON>
          <button id='prev' onClick={this.handleClick}>
            prev
          </button>
          <button id='next' onClick={this.handleClick}>
            next
          </button>
        </DIV_BUTTON>
      </DIV_WRAPPER>
    );
  }
}
