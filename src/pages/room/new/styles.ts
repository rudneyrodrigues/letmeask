import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const NewRoomContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const IllustrationContainer = styled.div`
  max-width: 50%;

  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 3rem;

  background: ${theme.colors.green.medium};

  & > strong {
    max-width: 440px;
    margin-top: .5rem;
    display: block;

    font-family: ${theme.fonts.fontFamily.heading};
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;

    color: ${theme.colors.white};
  }

  & > span {
    max-width: 460px;
    margin-top: 1rem;
    display: block;

    font-family: ${theme.fonts.fontFamily.body};
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;

    color: ${theme.colors.gray[200]};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem;

    & > strong {
    max-width: 100%;

    font-size: 2rem;
  }

  & > span {
    max-width: 100%;

    font-size: 1.25rem;
  }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 1rem;

  & > div {
    width: 100%;
    max-width: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & > strong {
      display: block;
      margin-top: 3.5rem;
      margin-bottom: 1.5rem;

      font-family: ${theme.fonts.fontFamily.heading};
      font-size: 1.5rem;
      font-weight: 700;
    }

    & > form {
      width: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      & > input {
        width: 100%;
        height: 3.125rem;
        border-radius: .5rem;
        padding: 0 1rem;
        
        border: none;
        background: ${theme.colors.gray[800]};
        color: ${theme.colors.gray[200]};
      }
    }

    & > span {
      display: block;
      margin-top: 1rem;

      font-size: .875rem;

      color: ${theme.colors.gray[300]};

      & > a {
        margin-left: .25rem;
        color: ${theme.colors.green.light};

        transition: color .2s ease-in-out;

        &:hover {
          color: ${theme.colors.green.medium};
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;
