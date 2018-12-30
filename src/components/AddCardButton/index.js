import React from 'react';
import { Wrapper } from './ui';

const AddCardButton = () => {
  const addCard = () => {
    console.log('hi');
  };

  return <Wrapper onClick={addCard}>+</Wrapper>;
};

export default AddCardButton;
