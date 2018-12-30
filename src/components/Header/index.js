import React from 'react';
import { Wrapper, CurrentPage, Title } from './ui';

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Title>Cards</Title>
      <CurrentPage>/ {children}</CurrentPage>
    </Wrapper>
  );
};

export default Header;
