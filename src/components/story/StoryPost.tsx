import styled from 'styled-components';
import { color } from '../../theme';
import { postLogo } from '../../assets';

interface StoryPost {
  title?: string;
  date?: string;
}

export const StoryPost = ({ title, date }: StoryPost) => {
  return (
    <PostContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <InformationContainer>
          <Date>{date}</Date>
          <InformationLine />
          <Name>박지연</Name>
        </InformationContainer>
      </TitleContainer>
      <ContentLine />
      <ImgContainer>
        <img src={postLogo} alt="postLogo" />
      </ImgContainer>
    </PostContainer>
  );
};

const TitleContainer = styled.div`
  width: 354px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const PostContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  height: 252px;
  border-radius: 20px;
  border: 1px solid ${color.gray[500]};
  background-color: ${color.gray[700]};
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 300;
  color: ${color.gray[50]};
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${color.gray[200]};
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${color.gray[200]};
`;

const InformationLine = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${color.gray[200]};
`;

const InformationContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ContentLine = styled.div`
  width: 354px;
  height: 1px;
  background-color: ${color.gray[50]};
`;

const ImgContainer = styled.div`
  width: 354px;
  height: 112px;
  border-radius: 10px;
  border: 1px solid ${color.blue[200]};
  background-color: ${color.blue[300]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
