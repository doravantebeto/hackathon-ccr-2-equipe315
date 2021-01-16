import React from 'react';
import { Container, Title } from './styles';

const Header = ({ color, title }) => {
  return (
    <Container color={color}>{!!title && <Title>{title}</Title>}</Container>
  );
};

export default Header;
