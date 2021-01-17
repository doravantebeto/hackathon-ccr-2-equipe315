import React from 'react';
import { Container, MessagesContainer } from './styles';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import BotMessage from '../../components/BotMessage';
import UserMessage from '../../components/UserMessage';
import SendMessage from '../../components/SendMessage';

const Chatbot = () => {
  return (
    <Container>
      <Header color='#B09FFF' title='Análise de Perfil' />

      <MessagesContainer>
        <BotMessage>
          Seja bem-vinde! Sou assistente virtual da NOMEINDEFINIDO. Para começar
          precisaremos de algumas informações.
          <br />
          <br />
          Não se preocupe, todas as suas informações estarão seguras conosco!
          <br />
          <br />
          Que tal começarmos com o seu nome?
        </BotMessage>

        <UserMessage>Meu nome é Liz</UserMessage>

        <BotMessage>
          Legal, Liz. Poderia falar um pouco mais sobre seus interesses?
        </BotMessage>

        <UserMessage>Meu nome é Liz</UserMessage>

        <BotMessage>
          Estamos gerando seu plano personalizado de estudos. Aguarde um
          momento.
        </BotMessage>

        <BotMessage>
          A analise do seu perfil foi concluida com sucesso.
          <br />
          <br />
          <Link to='home'>Clique aqui para prosseguir.</Link>
        </BotMessage>
      </MessagesContainer>

      <SendMessage />
    </Container>
  );
};

export default Chatbot;
