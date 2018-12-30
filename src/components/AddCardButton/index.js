import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './ui';

const AddCardButton = () => {
  const addCard = () => {
    console.log('hi');
  };

  return (
    <Link to={'/new'}>
      <Wrapper onClick={addCard}>+</Wrapper>
    </Link>
  );
};

export default AddCardButton;
