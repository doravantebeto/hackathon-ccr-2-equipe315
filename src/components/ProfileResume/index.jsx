import React from 'react';
import {
  Container,
  Picture,
  Info,
  CoinsIcon,
  Coins,
  Level,
  LevelBar,
  LevelBarFill,
  Name,
  Number,
} from './styles';
import botIcon from '../../assets/icon_liz.svg';
import coinsMultiple from '../../assets/coinsMultiple.svg';

const ProfileResume = () => {
  return (
    <Container>
      <Picture src={botIcon} alt='Liz' />

      <Info>
        <Name>Liz</Name>

        <Coins>
          <Number>120</Number>
          <CoinsIcon src={coinsMultiple} />
        </Coins>

        <Level>Nível 1</Level>

        <LevelBar>
          <LevelBarFill />
        </LevelBar>
      </Info>
    </Container>
  );
};

export default ProfileResume;
