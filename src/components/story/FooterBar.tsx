import styled from 'styled-components';
import { Button } from '../common';
import { color } from '../../theme';

type FooterType = {
  btnValue1?: string;
  btnValue2?: string;
  isBtn?: boolean;
};

export const FooterBar = ({ btnValue1, btnValue2, isBtn }: FooterType) => {
  return (
    <BarContainer>
      <BtnContainer>
        <Button color={color.blue[200]}>{btnValue1}</Button>
        {isBtn && <Button color={color.red[100]}>{btnValue2}</Button>}
      </BtnContainer>
    </BarContainer>
  );
};

const BarContainer = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: end;
  padding-right: 70px;
  border-top: 1px solid ${color.gray[200]};
  background-color: ${color.gray[800]};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 32px;
`;
