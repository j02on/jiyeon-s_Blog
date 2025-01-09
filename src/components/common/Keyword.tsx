import styled from 'styled-components';
import { color } from '../../theme';

type KeywordType = {
  children: string;
};

export const Keyword = ({ children }: KeywordType) => {
  return <KeywordContainer>{children}</KeywordContainer>;
};

const KeywordContainer = styled.div`
  padding: 19px 46px;
  border-radius: 34px;
  font-size: 24px;
  font-weight: 300;
  color: ${color.blue[200]};
  background-color: ${color.blue[300]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.blue[200]};
`;
