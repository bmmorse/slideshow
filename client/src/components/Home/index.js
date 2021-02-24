import React from 'react';
import Sidebar from '../Sidebar';
import Content from './Content';
import styled from 'styled-components';

const DIV_HOME = styled.div`
  display: grid;
  grid-template-areas: '. content';
  grid-template-columns: 640px 1fr;
  width: 100%;
`;

export default class Home extends React.Component {
  render() {
    return (
      <DIV_HOME>
        <Sidebar />
        <Content />
      </DIV_HOME>
    );
  }
}
