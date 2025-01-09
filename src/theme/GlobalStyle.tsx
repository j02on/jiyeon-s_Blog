import { createGlobalStyle } from 'styled-components';
import { color } from './color';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PretendardVariable';
    src: url('./fonts');
    font-weight: 100 900;
  }

  * {
    font-family: 'PretendardVariable';
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${color.gray[800]};
  }

  button {
    &:hover {
      outline: none;
      border: none;
    }
    &:active {
      outline: none;
      border: none;
    }
    cursor: pointer;
  }
`;
