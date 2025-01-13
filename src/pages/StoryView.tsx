import styled from 'styled-components';
import { FooterBar } from '../components';
import { color } from '../theme';

export const StoryView = () => {
  return (
    <>
      <ViewContainer>
        <ContentsContainer>
          <TitleContainer>
            <Title>Hello</Title>
            <TitleLine />
          </TitleContainer>
          <Content>Hi, My name is Jiyeon</Content>
        </ContentsContainer>
        {true && <FooterBar btnValue1="수정" btnValue2="삭제" isBtn={true} />}
      </ViewContainer>
    </>
  );
};

const ViewContainer = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  width: 692px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: start;
`;

const Content = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  color: ${color.gray[50]};
  &::placeholder {
    font-size: 16px;
    font-weight: 300;
    color: ${color.gray[50]};
  }
  background-color: transparent;
  resize: none;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 300;
  color: ${color.gray[50]};
  &::placeholder {
    font-size: 40px;
    font-weight: 300;
    color: ${color.gray[50]};
  }
  background-color: transparent;
  width: 100%;
`;

const TitleLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray[50]};
`;
