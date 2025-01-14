import styled from 'styled-components';
import { color } from '../theme';
import { profile, instagram, github, linkedIn } from '../assets';

export const Introduction = () => {
  const stackDatas = [
    { stack: 'javascript' },
    { stack: 'React' },
    { stack: 'HTML' },
    { stack: 'CSS' },
    { stack: 'Vite' },
    { stack: 'Figma' },
    { stack: 'Typescript' },
    { stack: 'Next JS' },
  ];

  const projectDatas = [
    {
      title: 'PhotoIt',
      content:
        'PhotoIt은 기존의 네컷부스를 디지털화하여, 시공간의 제약없이 어디서든 이용할 수 있는 네컷사진 서비스 입니다.',
    },
  ];
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <ProfileContainer>
          <Profile />
          <ContentContainer>
            <ContentSubContainer>
              <Name>박지연</Name>
              <Major>Frontend Developer</Major>
            </ContentSubContainer>
            <ContactContainer>
              <a href="https://www.instagram.com/j_ye.on_/" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://github.com/j02on" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/%EC%A7%80%EC%97%B0-%EB%B0%95-b45530321/"
                target="_blank"
              >
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </ContactContainer>
          </ContentContainer>
        </ProfileContainer>
        <Line />
        <IntroContainer>
          <IntroContent>
            <Keyword>Stack</Keyword>
            <StackContainer>
              {stackDatas.map((data) => (
                <Stack>{data.stack}</Stack>
              ))}
            </StackContainer>
          </IntroContent>
          <IntroContent>
            <Keyword>Project</Keyword>
            {projectDatas.map((data) => (
              <ProjectContainer>
                <ProjectTitle>{data.title}</ProjectTitle>
                <ProjectContent>{data.content}</ProjectContent>
              </ProjectContainer>
            ))}
          </IntroContent>
        </IntroContainer>
        {true && (
          <BtnContainer>
            <Btn>수정하기</Btn>
            <Btn>로그아웃</Btn>
          </BtnContainer>
        )}
      </IntroductionContent>
    </IntroductionContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Btn = styled.button`
  color: ${color.gray[50]};
  font-size: 16px;
  font-weight: 300;
  background-color: transparent;
`;

const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 132px;
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${color.gray[50]};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: start;
`;

const ContentSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

const Major = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: ${color.gray[200]};
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Profile = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid ${color.gray[400]};
  background-color: transparent;
  background-image: url(${profile});
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 92px;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 700px;
  height: 1px;
  background-color: ${color.gray[300]};
`;

const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const IntroductionContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 110px 0;
`;

const Keyword = styled.div`
  padding: 12px 35px;
  border-radius: 34px;
  font-size: 20px;
  font-weight: 300;
  color: ${color.blue[200]};
  background-color: ${color.blue[300]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.blue[200]};
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: start;
`;

const Stack = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${color.gray[50]};
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
`;

const ProjectTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${color.gray[50]};
`;

const ProjectContent = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${color.gray[50]};
`;
