import styled from 'styled-components';
import { color } from '../theme';
import { profile, instagram, github, linkedIn, del } from '../assets';
import { Button } from '../components';
import { useRef, useState } from 'react';

export const IntroductionEdit = () => {
  const fileRef = useRef();
  const [imgUrl, setImgUrl] = useState<string | null>('');
  const [stackItems, setStackItems] = useState<string[]>([]);
  const [stackInput, setStackInput] = useState<string>('');
  const [projectItems, setProjectItems] = useState<
    { title: string; content: string }[]
  >([]);
  const [projectTitleInput, setProjectTitleInput] = useState<string>('');
  const [projectContentInput, setProjectContentInput] = useState<string>('');

  const profileClick = () => {
    fileRef.current?.showPicker();
  };

  const handleChange = () => {
    const file = fileRef.current?.files?.[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setImgUrl(newUrl);
    }
  };

  const stackAddClick = () => {
    if (stackInput.trim()) {
      setStackItems((prev) => [...prev, stackInput.trim()]);
      setStackInput('');
    }
  };

  const stackDelClick = (index: number) => {
    setStackItems((prev) => prev.filter((_, i) => i !== index));
  };

  const projectAddClick = () => {
    if (projectTitleInput.trim() && projectContentInput.trim()) {
      setProjectItems((prev) => [
        ...prev,
        {
          title: projectTitleInput.trim(),
          content: projectContentInput.trim(),
        },
      ]);
      setProjectContentInput('');
      setProjectTitleInput('');
    }
  };

  const projectDelClick = (index: number) => {
    setProjectItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <IntroductionContainer>
      <IntroductionContent>
        <ProfileContainer>
          <Profile onClick={profileClick} imgUrl={imgUrl} />
          <FileInput type="file" ref={fileRef} onChange={handleChange} />
          <ContentContainer>
            <ContentSubContainer>
              <Name placeholder="이름을 입력하세요..." />
              <Major placeholder="전공을 입력하세요..." />
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
              {stackItems.map((stack, index) => (
                <TitleContainer>
                  <Stack placeholder="스택을 입력하세요..." value={stack} />
                  <Img
                    src={del}
                    alt="del"
                    onClick={() => stackDelClick(index)}
                  />
                </TitleContainer>
              ))}
              <TitleContainer>
                <Stack
                  value={stackInput}
                  onChange={(e) => setStackInput(e.target.value)}
                  placeholder="스택을 입력하세요..."
                />
                <Img src={del} alt="del" onClick={() => stackDelClick(index)} />
              </TitleContainer>
            </StackContainer>
            <Button
              width={120}
              color={color.gray[400]}
              fontSize={28}
              onClick={stackAddClick}
            >
              +
            </Button>
          </IntroContent>
          <IntroContent>
            <Keyword>Project</Keyword>
            {projectItems.map((project, index) => (
              <ProjectContainer>
                <TitleContainer>
                  <ProjectTitle
                    placeholder="제목을 입력하세요..."
                    value={project.title}
                  />
                  <Img
                    src={del}
                    alt="del"
                    onClick={() => projectDelClick(index)}
                  />
                </TitleContainer>
                <ProjectContent
                  placeholder="내용을 입력하세요..."
                  value={project.content}
                />
              </ProjectContainer>
            ))}
            <ProjectContainer>
              <TitleContainer>
                <ProjectTitle
                  placeholder="제목을 입력하세요..."
                  value={projectTitleInput}
                  onChange={(e) => setProjectTitleInput(e.target.value)}
                />
                <Img
                  src={del}
                  alt="del"
                  onClick={() => projectDelClick(index)}
                />
              </TitleContainer>
              <ProjectContent
                placeholder="내용을 입력하세요..."
                value={projectContentInput}
                onChange={(e) => setProjectContentInput(e.target.value)}
              />
            </ProjectContainer>
            <Button
              width={724}
              color={color.gray[400]}
              fontSize={28}
              onClick={projectAddClick}
            >
              +
            </Button>
          </IntroContent>
        </IntroContainer>
        <EditBtn type="button">edit</EditBtn>
      </IntroductionContent>
    </IntroductionContainer>
  );
};

const FileInput = styled.input`
  display: none;
`;

const Img = styled.img`
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 28px;
`;

const EditBtn = styled.button`
  border: 1px solid ${color.blue[200]};
  color: ${color.blue[200]};
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  border-radius: 24px;
  width: 139px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 132px;
`;

const Name = styled.input`
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

const Major = styled.input`
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
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
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

const Stack = styled.input`
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

const ProjectTitle = styled.input`
  font-size: 20px;
  font-weight: 600;
  color: ${color.gray[50]};
`;

const ProjectContent = styled.input`
  font-size: 16px;
  font-weight: 300;
  color: ${color.gray[50]};
`;
