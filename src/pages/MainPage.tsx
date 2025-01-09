import styled from 'styled-components';
import { Keyword } from '../components';
import { color } from '../theme';

export const MainPage = () => {
  return (
    <MainContainer>
      <MainContents>
        <TitleContainer>
          <Title>Hi there!!</Title>
          <Introduction>I am Jiyeon Park, a frontend developer.</Introduction>
        </TitleContainer>
        <KeywordContainer>
          <Keyword>Frontend Developer</Keyword>
          <Keyword>Daedeok Software Meister High School</Keyword>
        </KeywordContainer>
      </MainContents>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 240px;
  height: 100vh;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 64px;
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.05;
    }
    100% {
      opacity: 1;
    }
  }
  animation: blink 2.5s infinite;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 56px;
`;

const KeywordContainer = styled.div`
  display: flex;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 600;
  color: ${color.gray[50]};
`;

const Introduction = styled.div`
  font-size: 40px;
  font-weight: 300;
  color: ${color.gray[100]};
`;
