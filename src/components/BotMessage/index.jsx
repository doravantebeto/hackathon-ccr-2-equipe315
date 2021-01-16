import React from 'react';
import {Container,Message,Icon} from './styles'
import botIcon from '../../assets/icon_robot.svg'

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