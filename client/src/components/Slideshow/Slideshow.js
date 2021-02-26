import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Slide from './Slide';

const DIV_WRAPPER = styled.div`
  overflow: hidden;
  position: relative;
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
  width: 100%;

  div:nth-child(1) {
    left: -100%;
  }
  div:nth-child(2) {
    left: 0%;
  }
  div:nth-child(3) {
    left: 100%;
  }

  &.next {
    animation: 1000ms ${next} ease;
  }
  &.prev {
    animation: 1000ms ${prev} ease;
  }
`;

const DIV_BUTTON = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.DIV_SLIDES = React.createRef();
    this.prev = React.createRef();

    this.state = {
      slideNumber: 0,
    };

    this.slides = [
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1613929905911-96040610a54d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      },
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1468863823688-36ac11ede785?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
      },
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1449960238630-7e720e630019?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1490823670292-6699d9edbb7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
      },
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1613938863787-e29426163d7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1613855234677-e06c162cd85e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80',
      },
      {
        desc: 'Some amazing mountains',
        name: 'first',
        url:
          'https://images.unsplash.com/photo-1594123582884-6c88a690210b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
    ];
  }

  handleClick = (e) => {
    const { slideNumber } = this.state;
    const id = e.target.id;
    const DIV_SLIDES = this.DIV_SLIDES.current;

    DIV_SLIDES.children[0].querySelector('p').classList.add('hide');
    DIV_SLIDES.children[1].querySelector('p').classList.remove('fade');
    DIV_SLIDES.children[2].querySelector('p').classList.add('hide');

    DIV_SLIDES.classList.add(id);

    const getSlideNumber = () => {
      if (id == 'prev') {
        if (slideNumber == 0) {
          return this.slides.length - 1;
        } else {
          return slideNumber - 1;
        }
      }

      if (id == 'next') {
        if (slideNumber == this.slides.length - 1) {
          return 0;
        } else {
          return slideNumber + 1;
        }
      }
    };

    this.DIV_SLIDES.current.onanimationend = () => {
      DIV_SLIDES.classList.remove(id);
      DIV_SLIDES.children[1].querySelector('p').classList.add('hide');

      this.setState(
        {
          slideNumber: getSlideNumber(),
        },
        () => {
          DIV_SLIDES.children[1].querySelector('p').classList.remove('hide');
          DIV_SLIDES.children[1].querySelector('p').classList.add('fade');
        }
      );
    };
  };

  render() {
    const visibleSlide = this.state.slideNumber;
    const prevSlide =
      visibleSlide - 1 == -1 ? this.slides.length - 1 : visibleSlide - 1;
    const nextSlide =
      visibleSlide + 1 == this.slides.length ? 0 : visibleSlide + 1;

    return (
      <DIV_WRAPPER>
        <DIV_SLIDES ref={this.DIV_SLIDES}>
          <Slide ref={this.prev} data={this.slides[prevSlide]} />
          <Slide visible={true} data={this.slides[visibleSlide]} />
          <Slide data={this.slides[nextSlide]} />
        </DIV_SLIDES>
        <DIV_BUTTON className='BUTTON BUTTON BUTTON'>
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
