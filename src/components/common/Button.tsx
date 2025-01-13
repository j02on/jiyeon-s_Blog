import styled from 'styled-components';

type BtnType = {
  width?: number;
  color?: string;
  children: string;
};

export const Button = ({ width = 160, color, children }: BtnType) => {
  return (
    <BtnContainer width={width} color={color} type="button">
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<BtnType>`
  width: ${({ width }) => width}px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  border-radius: 12px;
`;
