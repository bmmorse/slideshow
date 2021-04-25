import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import TopNav from './TopNav';

const DIV_WRAPPER = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export default function Form() {
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
      <TopNav />
      <Banner />
      {/* <DIV_TEXT>
        <DIV_FIGURES>
          <ul>
            {figures.map((e) => {
              return (
                <li>
                  <h3>{e[0]}</h3>
                  <p>{e[1]}</p>
                </li>
              );
            })}
          </ul>
        </DIV_FIGURES>
        <DIV_PARA>
          <p>
            PS IT MATTERS partners with retailers to create profitable,
            mission-driven initiatives in which a portion of every business
            transaction gives back to a local, community non-profit.
          </p>
          <p>
            Our initiatives are currently successfully deployed in over 2,000+
            retail locations across the country. From reusable bags to floral
            bouquets, we are on a mission to change the world through everyday
            choices.
          </p>
        </DIV_PARA>
      </DIV_TEXT> */}
    </DIV_WRAPPER>
  );
}
