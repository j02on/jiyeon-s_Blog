import styled from 'styled-components';
import { FooterBar, Keyword, StoryPost } from '../components';

export const Story = () => {
  const datas = [
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
    { title: 'Hello', date: '2024.01.01' },
  ];
  return (
    <StoryContainer>
      <ContentsContainer>
        <Keyword>Story</Keyword>
        <PostContainer>
          {datas.map((data) => {
            return <StoryPost title={data.title} date={data.date} />;
          })}
        </PostContainer>
      </ContentsContainer>
      {true && <FooterBar btnValue1="올리기" />}
    </StoryContainer>
  );
};
const StoryContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ContentsContainer = styled.div`
  width: 1400px;
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 84px;
  margin-bottom: 80px;
`;

const PostContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 100px 100px;
`;
