import React from 'react';
import styled, { keyframes } from 'styled-components';

const DIV_WRAPPER = styled.div`
  align-items: center;
  background: url('https://www.psitmatters.com/wp-content/uploads/2020/11/tucker-tangeman-SnXraH8PaQ4-unsplash-scaled.jpg')
    no-repeat;
  background-position: center center;
  background-size: cover;

  display: flex;
  height: 560px;
  justify-content: center;
  position: relative;
  width: 100%;

  @media (min-width: 1000px) {
    height: 640px;
  }

  &::after {
    background: linear-gradient(0deg, #00000092 30%, #00000064 100%);
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const H1_BANNER = styled.h1`
  color: #ffffff;
  font-family: 'ProxBold';
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  bottom: 100px;
  z-index: 10;
  width: 300px;

  @media (min-width: 500px) {
    font-size: 40px;
    width: 500px;
  }

  @media (min-width: 800px) {
    width: 500px;
    bottom: 50px;
    font-size: 40px;
  }

  @media (min-width: 1000px) {
    width: 770px;
    bottom: 0px;
    font-size: 64px;
  }
`;

const DIV_TEXT = styled.div`
  background: linear-gradient(transparent, hsla(0, 100%, 100%, 0.4));
  width: 100%;
  z-index: 50;
  position: absolute;
  bottom: 0px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  padding: 20px 5px;

  @media (min-width: 1400px) {
    padding: 0;
  }
`;

const animateItem = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const UL_NUMBERS = styled.ul`
  display: grid;
  gap: 40px 10px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1400px) {
    display: flex;
  }

  li {
    text-align: center;
    flex: 1 1 30%;
    opacity: 0;

    &.animate {
      animation: ${animateItem} 500ms ease forwards;
    }

    &:hover {
      h3 {
        color: #ffffff !important;
      }
    }

    @media (min-width: 1400px) {
      padding: 50px 0;
      flex: 0 1 100%;
    }

    p {
      color: #ffffff64;
    }

    h3 {
      color: #ffffff90;
      font-size: 24px;
      transition: all ease 300ms;

      @media (min-width: 400px) {
        h3 {
          font-size: 32px;
        }
      }
    }
  }
`;

export default function Banner() {
  const animateNumbersRef = React.useRef(null);

  const [animateNumbers, setAnimateNumbers] = React.useState(false);

  React.useEffect(() => {
    function createTimer(child, delay) {
      return setTimeout(() => {
        list.children[child].classList.add('animate');
      }, delay);
    }

    const list = animateNumbersRef.current;
    createTimer(0, 1000);
    createTimer(1, 1500);
    createTimer(2, 2000);
    createTimer(3, 2500);
    createTimer(4, 3000);
    createTimer(5, 3500);
  });

  const figures = [
    ['$4,769,933', 'Program Donations'],
    ['31,851', 'Non-Profits Supported'],
    ['$93,937', 'Donations This Month'],
    ['7,439', 'Hunger Org. Supported'],
    ['19,716,115', 'Meals Provided*'],
    ['139,732,470', 'Single-Use Bags Not Used*'],
  ];
  return (
    <DIV_WRAPPER>
      <H1_BANNER>Everyday choices can change the world.</H1_BANNER>
      <DIV_TEXT>
        <UL_NUMBERS ref={animateNumbersRef}>
          {figures.map((e) => {
            return (
              <li key={e[1]}>
                <h3>{e[0]}</h3>
                <p>{e[1]}</p>
              </li>
            );
          })}
        </UL_NUMBERS>
      </DIV_TEXT>
    </DIV_WRAPPER>
  );
}
