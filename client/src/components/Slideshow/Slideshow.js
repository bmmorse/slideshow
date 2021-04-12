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
  position: relative;
  display: flex;
  right: 100%;
  height: 100%;

  &.next {
    animation: 500ms ${next} ease;
  }
  &.prev {
    animation: 500ms ${prev} ease;
  }
`;

const DIV_BUTTON = styled.div`
  width: 150px;
  height: 46px;
  display: flex;
  position: absolute;
  bottom: 57px;
  right: 10%;
  box-shadow: 0 6px 30px -10px hsla(0, 0%, 0%, 0.4);
  border-radius: 8px;

  @media (min-width: 1152px) {
    width: 200px;
    height: 60px;
    bottom: 80px;
    border-radius: 3rem;
    right: calc(12% - 100px);
  }
`;

const BUTTON = styled.input`
  border: none;
  width: 100%;
  padding: 8px;
  overflow: hidden;
  // transition: background-color 300ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    border-radius: 0;
  }

  &:nth-child(2) {
    border-radius: 0;
  }

  &:disabled {
    // background: yellow;
  }

  @media (hover: hover) {
    &:hover {
      background-color: hsla(225, 0%, 94%, 0.4);
    }
  }

  &:hover {
    background: none;
  }

  &:active {
    outline: none;
  }

  @media (min-width: 1152px) {
    &:nth-child(1) {
      border-radius: 8px 0 0 8px;
    }

    &:nth-child(2) {
      border-radius: 0 8px 8px 0;
    }
  }
`;

const DIV_DIVIDER = styled.div`
  height: 100%;
  width: 1px;
  background: hsla(225, 0%, 94%, 0.4);
`;

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.DIV_SLIDES = React.createRef();
    this.innerHeight = React.createRef();

    this.state = {
      slideNumber: 0,
      animateSlide: false,
    };

    this.slides = SlideData;
  }

  componentDidMount() {
    const wrapper = this.innerHeight.current;
    wrapper.style.height = `${window.innerHeight}px`;

    this.setState({
      animateSlide: true,
    });
  }

  handleClick = (e) => {
    const { slideNumber } = this.state;
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
      if (slideClassName == 'prev') {
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
      <DIV_WRAPPER ref={this.innerHeight}>
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
          <BUTTON
            id='prev'
            onClick={this.handleClick}
            disabled={animateSlide ? false : true}
            src={prevSVG}
            type='image'
          ></BUTTON>
          <DIV_DIVIDER />
          <BUTTON
            id='next'
            onClick={this.handleClick}
            disabled={animateSlide ? false : true}
            src={nextSVG}
            type='image'
          ></BUTTON>
        </DIV_BUTTON>
      </DIV_WRAPPER>
    );
  }
}
