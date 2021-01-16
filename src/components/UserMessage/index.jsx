import React from 'react';
import {Container,Message,Icon} from './styles'
import botIcon from '../../assets/icon_liz.svg'

const BotMessage = ({children}) => {
  return (
    <Container>
      <Icon src={botIcon} alt="Bot"/>
      <Message>
        {children}
      </Message>
    </Container>
  );
};

export default BotMessage;