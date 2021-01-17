import React from 'react';
import { Container, Title, BackButton, BackIcon } from './styles';

const Header = ({ color, title, backTo }) => {
  return (
    <Container color={color}>
      {!!backTo && (
        <BackButton to={`/${backTo}`}>
          <BackIcon />
        </BackButton>
      )}
      {!!title && <Title>{title}</Title>}
    </Container>
  );
};

export default Header;
