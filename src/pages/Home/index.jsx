import React from 'react';
import {
  Container,
  VocationIcon,
  VocationTitle,
  VocationDescription,
  VocationLink,
  HorizontalSection,
  HorizontalSectionTitle,
  HorizontalSectionCardBody,
  HorizontalSectionCardInfoContainer,
  HorizontalSectionCardInfoDescription,
  HorizontalSectionCardInfoItem,
  HorizontalSectionCardInfoTitle,
  HorizontalSectionCardTitle,
  Separator,
  VocationContainer,
  HorizontalSectionCardSubTitle,
} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';

import cinemaCamera from '../../assets/cinemaCamera.svg';
import coins from '../../assets/coins.svg';

const Home = () => {
  return (
    <Container>
      <Header title='Home' />
      <Card>
        <VocationContainer>
          <VocationIcon src={cinemaCamera} alt='Vocação' />
          <VocationTitle>CINEASTA</VocationTitle>
          <VocationDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </VocationDescription>
          <VocationLink>Lorem ipsum dolor si?</VocationLink>
        </VocationContainer>
      </Card>

      <HorizontalSectionTitle>
        Cursos recomendados para você
      </HorizontalSectionTitle>

      <HorizontalSection>
        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardTitle>
              Conceitos de Aprendizagem Criativa
            </HorizontalSectionCardTitle>

            <HorizontalSectionCardInfoContainer>
              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Carga horária
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  40h
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>

              <Separator />

              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Nível
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  Iniciante
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>

              <Separator />

              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Moedas Ganhas
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  2 <img src={coins} alt='' />
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>
            </HorizontalSectionCardInfoContainer>
          </HorizontalSectionCardBody>
        </Card>

        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Design Thinking
            </HorizontalSectionCardTitle>

            <HorizontalSectionCardInfoContainer>
              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Carga horária
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  40h
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>

              <Separator theme='#FF5A5A' />

              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Nível
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  Iniciante
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>

              <Separator theme='#FF5A5A' />

              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Moedas Ganhas
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  2 <img src={coins} alt='' />
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>
            </HorizontalSectionCardInfoContainer>
          </HorizontalSectionCardBody>
        </Card>
      </HorizontalSection>

      <HorizontalSectionTitle>
        Vagas abertas com o seu perfil
      </HorizontalSectionTitle>

      <HorizontalSection>
        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardTitle>
              Assistente de gravação
              <HorizontalSectionCardSubTitle>
                na Empresa Secreta
              </HorizontalSectionCardSubTitle>
            </HorizontalSectionCardTitle>

            <HorizontalSectionCardInfoContainer>
              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Carga horária
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  6h/dia
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>

              <Separator />

              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Nível
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  Estágio
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>
            </HorizontalSectionCardInfoContainer>
          </HorizontalSectionCardBody>
        </Card>

        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Roteirista
              <HorizontalSectionCardSubTitle>
                na Empresa Secreta
              </HorizontalSectionCardSubTitle>
            </HorizontalSectionCardTitle>

            <HorizontalSectionCardInfoContainer>
              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Carga horária
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  6h/dia
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>

              <Separator theme='#FF5A5A' />

              <HorizontalSectionCardInfoItem>
                <HorizontalSectionCardInfoTitle>
                  Nível
                </HorizontalSectionCardInfoTitle>
                <HorizontalSectionCardInfoDescription>
                  Jovem Aprendiz
                </HorizontalSectionCardInfoDescription>
              </HorizontalSectionCardInfoItem>
            </HorizontalSectionCardInfoContainer>
          </HorizontalSectionCardBody>
        </Card>
      </HorizontalSection>
    </Container>
  );
};

export default Home;
