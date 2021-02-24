import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const DIV_WRAPPER = styled.div`
  overflow: hidden;
  position: relative;
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

  &.slideForward {
    animation: 500ms slideF ease forwards;

    @keyframes slideF {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
  &.slideBackward {
    animation: 500ms slideB ease forwards;

    @keyframes slideB {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(100%);
      }
    }
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
    this.state = {
      slideNumber: 0,
      slideForward: false,
      slideBackward: false,
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
    let id = e.target.id;
    let { slideForward, slideBackward, slideNumber } = this.state;

    if (!slideForward && !slideBackward) {
      this.setState(
        {
          slideBackward: id == 'prev' ? true : false,
          slideForward: id == 'next' ? true : false,
        },
        () => {
          setTimeout(() => {
            if (id == 'prev') {
              this.setState({
                slideBackward: false,
                slideNumber:
                  slideNumber == 0 ? this.slides.length - 1 : slideNumber - 1,
              });
            }

            if (id == 'next') {
              this.setState({
                slideForward: false,
                slideNumber:
                  slideNumber == this.slides.length - 1 ? 0 : slideNumber + 1,
              });
            }
          }, 500);
        }
      );
    }
  };

  render() {
    const visibleSlide = this.state.slideNumber;
    const prevSlide =
      visibleSlide - 1 == -1 ? this.slides.length - 1 : visibleSlide - 1;
    const nextSlide =
      visibleSlide + 1 == this.slides.length ? 0 : visibleSlide + 1;

    return (
      <DIV_WRAPPER>
        <DIV_SLIDES
          className={
            this.state.slideBackward
              ? 'slideBackward'
              : this.state.slideForward
              ? 'slideForward'
              : ''
          }
        >
          <Slide data={this.slides[prevSlide]} />
          <Slide middle={true} data={this.slides[visibleSlide]} />
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
