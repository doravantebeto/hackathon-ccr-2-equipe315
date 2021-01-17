import React from 'react';
import { Container, Spacer } from './styles';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Profile = () => {
  return (
    <Container>
      <Header title='Meu Perfil' />

      <Spacer />
      <Menu location='Meu Perfil' />
    </Container>
  );
};

export default Profile;
