import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${theme.colors.gray["900"]};
    color: ${theme.colors.gray["100"]};
  }

  body, input, textarea, button {
    font-family: ${theme.fonts.fontFamily.body};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: .5;
  }
`;
