import React from 'react';
import {
  Container,
  HomeIcon,
  ShopIcon,
  ProfileIcon,
  IconLabel,
  MenuItem,
  Dot,
} from './styles';
import botIcon from '../../assets/icon_liz.svg';

const Menu = ({ location }) => {
  return (
    <Container>
      <MenuItem selected={location === 'Home'} to='home'>
        <HomeIcon />
        {location !== 'Home' ? <IconLabel>Home</IconLabel> : <Dot />}
      </MenuItem>
      <MenuItem selected={location === 'Loja'} to='loja'>
        <ShopIcon />
        {location !== 'Loja' ? <IconLabel>Loja</IconLabel> : <Dot />}
      </MenuItem>
      <MenuItem selected={location === 'Meu Perfil'} to='perfil'>
        <ProfileIcon src={botIcon} alt='Bot' />
        {location !== 'Meu Perfil' ? (
          <IconLabel>Meu Perfil</IconLabel>
        ) : (
          <Dot />
        )}
      </MenuItem>
    </Container>
  );
};

export default Menu;
