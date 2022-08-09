import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const AdminRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const AdminRoomMain = styled.main`
  width: 100%;
  height: 100%;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 4rem auto;
  
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > h1 {
      line-height: 36px;

      font-weight: 700;
      font-size: 1.5rem;
      font-family: ${theme.fonts.fontFamily.heading};
    }

    & > span {
      height: 1.5rem;
      padding: 0 1rem;

      line-height: 1.5rem;
      font-size: .875rem;

      border-radius: 3.1875rem;

      background: ${theme.colors.green.medium};
      color: ${theme.colors.gray[200]};
    }
  }

  .questions-container {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > .no-question {
    height: 100%;
    flex: 1;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & > strong {
      display: block;
      margin-top: 1rem;

      font-family: ${theme.fonts.fontFamily.heading};
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 27px;
    }

    & > span {
      display: block;
      margin-top: .5rem;

      font-family: ${theme.fonts.fontFamily.body};
      font-size: .875rem;
      font-weight: 400;
      line-height: 21px;
    }
  }
`

export const HeaderContainer = styled.header`
  height: 5rem;
  padding: 0 1rem;

  border-bottom: 1px solid;
  border-color: ${theme.colors.gray[800]};

  .header-content {
    width: 100%;
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }

  .button-container {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ButtonCloseRoom = styled.button`
  height: 2.5rem;
  padding: 0 1rem;
  
  border: 1px solid;
  border-radius: .5rem;
  border-color: ${theme.colors.semantic.negative};

  color: ${theme.colors.semantic.negative};
  background: ${theme.colors.gray[900]};

  transition: background, color, .2s ease-in-out;

  &:hover {
    background: ${theme.colors.semantic.negative};
    color: ${theme.colors.gray[100]};
  }
`;

export const ButtonLogout = styled.button`
  height: 2.5rem;
  padding: 0 1rem;
  
  border-radius: .5rem;

  color: ${theme.colors.gray[100]};
  background: ${theme.colors.gray[800]};

  transition: filter, color, .2s ease-in-out;

  &:hover {
    filter: brightness(.9);
  }
`;

export const Question = styled.div`
  width: 100%;
  padding: 1.5rem;

  border-radius: .5rem;
  border: 1px solid;
  border-color: ${theme.colors.gray[800]};

  background: ${theme.colors.gray[800]};

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
  }

  & > footer {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;

      & > img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      & > span {
        display: block;
        color: ${theme.colors.gray[300]};
      }
    }

    & > div:last-child {
      margin-left: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;

      & > button {
        padding: .5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: .5rem;

        color: ${theme.colors.green.light};

        transition: background .2s ease-in-out;

        &:hover {
          background: ${theme.colors.gray[900]};
        }

        &.isDisabled {
          display: none;
        }
      }
    }
  }

  &.isAnswered {
    opacity: .5;
  }

  &.isHighlighted {
    border-color: ${theme.colors.green.medium};
  }
`;
