import React from 'react';
import {
  Container,
  InfoDescription,
  InfoItem,
  InfoSection,
  InfoStatus,
  Name,
  PersonalCardContainer,
  ProfileSection,
  School,
  Since,
  ProfilePicture,
  ProfileSectionLeft,
  ProfileSectionRight,
  SectionTitle,
  Balance,
  BalanceLabel,
  CoinHistoryCardContainer,
  CoinsIcon,
  HistoryAction,
  HistoryBalance,
  HistoryCoinIcon,
  HistoryContainer,
  HistoryDate,
  HistoryItem,
  HistoryLabel,
  Number,
  Spacer,
} from './styles';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import botIcon from '../../assets/icon_liz.svg';
import coins from '../../assets/coins.svg';

const Profile = () => {
  return (
    <Container>
      <Header title='Meu Perfil' />

      <Card>
        <PersonalCardContainer>
          <ProfileSection>
            <ProfileSectionLeft>
              <ProfilePicture src={botIcon} />
            </ProfileSectionLeft>
            <ProfileSectionRight>
              <Name>Liz</Name>
              <School>E. E. Escola Sem Nome - 1 ano E.M.</School>
              <Since>No ducoin desde 2021</Since>
            </ProfileSectionRight>
          </ProfileSection>
          <InfoSection>
            <InfoItem>
              <InfoStatus>10</InfoStatus>
              <InfoDescription>cursos concluidos na plataforma</InfoDescription>
            </InfoItem>
            <InfoItem>
              <InfoStatus>Ótimo</InfoStatus>
              <InfoDescription>desempenho escolar</InfoDescription>
            </InfoItem>
            <InfoItem>
              <InfoStatus>2</InfoStatus>
              <InfoDescription>amigos indicados</InfoDescription>
            </InfoItem>
          </InfoSection>
        </PersonalCardContainer>
      </Card>

      <SectionTitle>Suas movimentações de moeda</SectionTitle>

      <Card>
        <CoinHistoryCardContainer>
          <Balance>
            <Number>120</Number>
            <CoinsIcon src={coins} />
          </Balance>
          <BalanceLabel>saldo atual</BalanceLabel>

          <HistoryContainer>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Concluiu um curso</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>+4</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Compra “Caderno BTS 10 matérias”</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>-20</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Concluiu um curso</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>+4</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Concluiu um curso</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>+4</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Concluiu um curso</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>+4</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Concluiu um curso</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>+2</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
            <HistoryItem>
              <HistoryDate>10/01/2021 </HistoryDate>
              <HistoryLabel>Entrou no ducoin!</HistoryLabel>
              <HistoryAction>
                <HistoryBalance>+100</HistoryBalance>
                <HistoryCoinIcon src={coins} />
              </HistoryAction>
            </HistoryItem>
          </HistoryContainer>
        </CoinHistoryCardContainer>
      </Card>
      <Spacer />
      <Menu location='Meu Perfil' />
    </Container>
  );
};

export default Profile;
