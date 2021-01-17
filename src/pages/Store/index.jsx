import React from 'react';
import {
  Container,
  HorizontalSection,
  HorizontalSectionTitle,
  HorizontalSectionCardBody,
  HorizontalSectionCardTitle,
  HorizontalSectionCardHeaderImage,
  HorizontalSectionCardHeaderImageContainer,
  HorizontalSectionCardCoinIcon,
  HorizontalSectionCardCoinNumber,
  HorizontalSectionCardCoins,
  HorizontalSectionCardHeaderImageFull,
  HorizontalSectionCardBodyImageFull,
  Spacer,
} from './styles';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Card from '../../components/Card';

import coins from '../../assets/coins.svg';
import fotografia from '../../assets/fotografia.png';
import oratoria from '../../assets/oratoria.png';
import metro from '../../assets/metro.png';
import almoco from '../../assets/almoco.png';

const Store = () => {
  return (
    <Container>
      <Header title='Loja' color='#FF5A5A' />

      <HorizontalSectionTitle>Papelaria</HorizontalSectionTitle>

      <HorizontalSection>
        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImage src='https://images.tcdn.com.br/img/img_prod/745319/caderno_bts_mascote_espiral_bt21_200_folhas_10_materias_21_1_20201215111135.jpg' />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Caderno Bts Mascote <br /> 10 Matérias
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                20
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBody>
        </Card>
        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImage src='https://images-americanas.b2w.io/produtos/01/00/img/1446644/9/1446644935_1GG.jpg' />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Lápis de Cor Faber-Castell 12 Cores
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                12
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBody>
        </Card>
        <Card>
          <HorizontalSectionCardBody>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImage src='https://http2.mlstatic.com/D_NQ_NP_846969-MLB44251375319_122020-O.webp' />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Caneta Microline Compactor 0.4 mm
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                15
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBody>
        </Card>
      </HorizontalSection>

      <HorizontalSectionTitle>
        Cursos recomendados para você
      </HorizontalSectionTitle>

      <HorizontalSection>
        <Card>
          <HorizontalSectionCardBodyImageFull>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImageFull src={fotografia} />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Fotografia Iniciante
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                20
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBodyImageFull>
        </Card>
        <Card>
          <HorizontalSectionCardBodyImageFull>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImageFull src={oratoria} />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Oratória: compartilhando ideias e histórias
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                12
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBodyImageFull>
        </Card>
        <Card>
          <HorizontalSectionCardBodyImageFull>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImageFull src={fotografia} />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Fotografia Iniciante
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                20
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBodyImageFull>
        </Card>
      </HorizontalSection>

      <HorizontalSectionTitle>Utilidades</HorizontalSectionTitle>

      <HorizontalSection>
        <Card>
          <HorizontalSectionCardBodyImageFull>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImageFull src={metro} />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Passagem de metrô (unitario)
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                20
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBodyImageFull>
        </Card>
        <Card>
          <HorizontalSectionCardBodyImageFull>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImageFull src={almoco} />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Almoço no Restaurante Mais Gostoso Da Cidade
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                12
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBodyImageFull>
        </Card>
        <Card>
          <HorizontalSectionCardBodyImageFull>
            <HorizontalSectionCardHeaderImageContainer>
              <HorizontalSectionCardHeaderImageFull src={fotografia} />
            </HorizontalSectionCardHeaderImageContainer>
            <HorizontalSectionCardTitle theme='#FF5A5A'>
              Fotografia Iniciante
            </HorizontalSectionCardTitle>
            <HorizontalSectionCardCoins>
              <HorizontalSectionCardCoinNumber>
                20
              </HorizontalSectionCardCoinNumber>
              <HorizontalSectionCardCoinIcon src={coins} />
            </HorizontalSectionCardCoins>
          </HorizontalSectionCardBodyImageFull>
        </Card>
      </HorizontalSection>

      <Spacer />

      <Menu location='Loja' />
    </Container>
  );
};

export default Store;
