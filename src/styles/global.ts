import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Criando animação de Spinner */
  @-webkit-keyframes spinnerLoading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinnerLoading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
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

  .react-modal-overlay {
    background: rgba(18, 18, 20, .9);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: ${theme.colors.gray[800]};
    padding: 3rem;
    position: relative;
    border-radius: .5rem;
    outline: none;
  }
`;
