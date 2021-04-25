import React, { useState } from 'react';
import styled from 'styled-components';

const DIV_WRAPPER = styled.div`
  align-items: center;
  background: blue;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FORM = styled.form`
  max-width: 1152px;
  width: 60%;

  input {
    font-size: 32px;
    height: 128px;
    padding-left: 4%;
    width: 100%;
  }
`;

export default function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <DIV_WRAPPER>
      <FORM onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          name='address'
        ></input>
      </FORM>
    </DIV_WRAPPER>
  );
}
