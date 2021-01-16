import React from 'react';
import {Container,Input,SendButton,SendIcon} from './styles'

const SendMessage = () => {
  return (
    <Container>

      <Input type='text'/>

      <SendButton type='button'>
        <SendIcon/>
      </SendButton>
      
    </Container>
  );
};

export default SendMessage;