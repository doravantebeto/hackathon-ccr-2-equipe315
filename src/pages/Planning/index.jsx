import React from 'react';
import {
  Container,
  ExamplesContainer,
  ExamplesInfo,
  ExamplesName,
  ExamplesPhoto,
  ExamplesTitle,
  VocationDescription,
  VocationLogo,
  VocationTitle,
  ExamplesItem,
  ExamplesPhotoContainer,
  PlanningTitle,
  StepperCircle,
  StepperItem,
  StepperItemBody,
  StepperItemContent,
  StepperItemHeader,
  StepperItemLine,
  StepperTitle,
  StepperItemCoursesAdvisor,
  StepperItemCoursesLink,
  StepperItemText,
  StepperItemLineSeparator,
  StepperItemLineSeparatorContainer,
  Spacer,
} from './styles';

import Header from '../../components/Header';

import cinemaCamera from '../../assets/cinemaCamera.svg';
import steven from '../../assets/steven.jpg';
import jordan from '../../assets/jordan.jpg';
import sofia from '../../assets/sofia.jpg';

const Home = () => {
  return (
    <Container>
      <Header title='Planejamento' backTo='home' color='#FF5A5A' />

      <VocationLogo src={cinemaCamera} alt='Camera' />
      <VocationTitle>CINEASTA</VocationTitle>
      <VocationDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        vestibulum ligula sed porttitor mollis. Morbi tortor urna, sodales sed
        mi et, maximus eleifend risus. Vestibulum eget condimentum ipsum.
        Pellentesque non elit nec diam convallis malesuada. Mauris id rhoncus
        lectus. Praesent ac sem metus. Praesent hendrerit vehicula ante et
        lacinia. Nam sagittis lectus quis nisi pellentesque vehicula sit amet id
        est. Proin in rhoncus est, rhoncus volutpat purus. Cras risus erat,
        congue id nisi eu, consequat placerat est. Quisque sit amet neque enim.
      </VocationDescription>

      <ExamplesTitle>
        Aqui estão alguns cinestas famosos que você talvez conheça
      </ExamplesTitle>

      <ExamplesContainer>
        <ExamplesItem>
          <ExamplesPhotoContainer>
            <ExamplesPhoto src={steven} />
          </ExamplesPhotoContainer>
          <ExamplesName>Steven Spilberg</ExamplesName>
          <ExamplesInfo>
            Tubarão, Jurassic Park, E.T.: O extraterrestre
          </ExamplesInfo>
        </ExamplesItem>
        <ExamplesItem>
          <ExamplesPhotoContainer>
            <ExamplesPhoto src={jordan} />
          </ExamplesPhotoContainer>
          <ExamplesName>Jordan Peele</ExamplesName>
          <ExamplesInfo>Corra!, Nós</ExamplesInfo>
        </ExamplesItem>
        <ExamplesItem>
          <ExamplesPhotoContainer>
            <ExamplesPhoto src={sofia} />
          </ExamplesPhotoContainer>
          <ExamplesName>Sofia Coppola</ExamplesName>
          <ExamplesInfo>
            Encontros e Desencontros, Bling Ring: A Gangue de Hollywood
          </ExamplesInfo>
        </ExamplesItem>
      </ExamplesContainer>

      <PlanningTitle>
        “Legal! Quero seguir essa carreira, como posso começar?”
      </PlanningTitle>

      <StepperItem>
        <StepperItemHeader>
          <StepperCircle />
          <StepperTitle>
            Estudar os fundamentos da comunicação visual
          </StepperTitle>
        </StepperItemHeader>
        <StepperItemBody>
          <StepperItemLine />
          <StepperItemContent>
            <StepperItemText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vestibulum ligula sed porttitor mollis.
            </StepperItemText>
            <StepperItemCoursesAdvisor>
              Abaixo estão alguns cursos e livros que estão disponiveis no
              ducoin:
            </StepperItemCoursesAdvisor>
            <StepperItemCoursesLink>
              Fundamentos da comunicação
            </StepperItemCoursesLink>
            <StepperItemCoursesLink>
              Teoria da comunicação: Ideias, conceitos e métodos
            </StepperItemCoursesLink>
            <StepperItemCoursesLink>Comunicação Social</StepperItemCoursesLink>
          </StepperItemContent>
        </StepperItemBody>
      </StepperItem>

      <StepperItem>
        <StepperItemHeader>
          <StepperCircle disabled />
          <StepperTitle>Estudar os fundamentos do cinema</StepperTitle>
        </StepperItemHeader>
      </StepperItem>
      <StepperItemLineSeparatorContainer>
        <StepperItemLineSeparator />
      </StepperItemLineSeparatorContainer>
      <StepperItem>
        <StepperItemHeader>
          <StepperCircle disabled />
          <StepperTitle>Cursos praticos de fotografia</StepperTitle>
        </StepperItemHeader>
      </StepperItem>
      <StepperItemLineSeparatorContainer>
        <StepperItemLineSeparator />
      </StepperItemLineSeparatorContainer>
      <StepperItem>
        <StepperItemHeader>
          <StepperCircle disabled />
          <StepperTitle>Cursos práticos de storytelling</StepperTitle>
        </StepperItemHeader>
      </StepperItem>
      <Spacer />
    </Container>
  );
};

export default Home;
