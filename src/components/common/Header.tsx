import styled from 'styled-components';
import { color } from '../../theme';
import { logo } from '../../assets';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { pathname } = useLocation();
  const [isIntro, setIsIntro] = useState<boolean>(false);
  const [isStory, setIsStory] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === '/introduction') {
      setIsIntro(true);
      setIsStory(false);
    } else if (pathname === '/story') {
      setIsIntro(false);
      setIsStory(true);
    } else {
      setIsIntro(false);
      setIsStory(false);
    }
  }, [pathname]);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <Contents>
        <NavContainer>
          <NavBtn isColor={isIntro}>introduction</NavBtn>
          <NavBtn isColor={isStory}>story</NavBtn>
        </NavContainer>
        <Btn>Login</Btn>
      </Contents>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
`;

const Contents = styled.div`
  display: flex;
  gap: 56px;
  align-items: center;
`;

const NavBtn = styled.div<{ isColor: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ isColor }) => (isColor ? color.blue[200] : color.gray[50])};
  &:hover {
    color: ${color.blue[200]};
  }
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 54px;
  border-radius: 24px;
  color: ${color.gray[50]};
  border: 1px solid ${color.gray[50]};
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  &:hover {
    color: ${color.blue[200]};
    border: 1px solid ${color.blue[200]};
  }
`;
