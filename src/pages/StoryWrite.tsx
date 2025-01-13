import styled from 'styled-components';
import { FooterBar } from '../components/story/FooterBar';
import { color } from '../theme';

export const StoryWrite = () => {
  return (
    <WriteContainer>
      <ContentsContainer>
        <TitleContainer>
          <TitleInput type="text" placeholder="제목을 입력하세요" />
          <TitleLine />
        </TitleContainer>
        <ContentInput placeholder="내용을 입력하세요" />
      </ContentsContainer>
      <FooterBar btnValue1="올리기" btnValue2="삭제" isBtn={true} />
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
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

const ContentInput = styled.textarea`
  width: 100%;
  height: 420px;
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

const TitleInput = styled.input`
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
