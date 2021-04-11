import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slide from './Slide';
import SlideData from './Data';
import prevSVG from '../../Globals/svg/prev.svg';
import nextSVG from '../../Globals/svg/next.svg';

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
  width: 200px;
  height: 80px;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    background: hsla(0, 0%, 0%, 1);
    border: none;
    width: 100%;
    transition: background 300ms ease;

    &:disabled {
      background: blue;
    }

    &:hover {
      background: yellow;
    }

    img {
      height: 32%;
    }
  }
`;

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.DIV_SLIDES = React.createRef();

    this.state = {
      slideNumber: 0,
      animateSlide: false,
    };

    this.slides = SlideData;
  }

  componentDidMount() {
    this.setState({
      animateSlide: true,
    });
  }

  handleClick = (e) => {
    const { slideNumber, animateSlide } = this.state;
    const id = e.target.id;
    const DIV_SLIDES = this.DIV_SLIDES.current;
    const slides = this.slides;

    const slideClassName = (() => {
      if (e.target.id === 'prev') {
        return 'prev';
      } else {
        return 'next';
      }
    })();

    const newSlideNumber = (() => {
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

    this.setState({
      animateSlide: false,
    });

    DIV_SLIDES.onanimationend = () => {
      DIV_SLIDES.classList.remove(slideClassName);

      this.setState({
        slideNumber: newSlideNumber,
        animateSlide: true,
      });
    };

    DIV_SLIDES.classList.add(slideClassName);
  };

  render() {
    const { slideNumber, animateSlide } = this.state;
    const slides = this.slides;
    return (
      <DIV_WRAPPER>
        <DIV_SLIDES ref={this.DIV_SLIDES}>
          <Slide
            animateSlide={animateSlide}
            data={
              slideNumber - 1 < 0
                ? slides[slides.length - 1]
                : slides[slideNumber - 1]
            }
          />
          <Slide animateSlide={animateSlide} data={slides[slideNumber]} />
          <Slide
            animateSlide={animateSlide}
            data={
              slideNumber + 1 == slides.length
                ? slides[0]
                : slides[slideNumber + 1]
            }
          />
        </DIV_SLIDES>
        <DIV_BUTTON>
          <button
            id='prev'
            onClick={this.handleClick}
            disabled={animateSlide ? false : true}
          >
            <img src={prevSVG} alt='' />
          </button>
          <button
            id='next'
            onClick={this.handleClick}
            disabled={animateSlide ? false : true}
          >
            <img src={nextSVG} alt='' />
          </button>
        </DIV_BUTTON>
      </DIV_WRAPPER>
    );
  }
}
