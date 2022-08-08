import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const UserRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const UserRoomMain = styled.main`
  width: 100%;
  height: 100%;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 4rem auto;
  
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
    line-height: 36px;

    font-weight: 700;
    font-size: 1.5rem;
    font-family: ${theme.fonts.fontFamily.heading};
  }

  .input-new-question {
    display: flex;
    flex-direction: column;

    & > textarea {
      width: 100%;
      height: 8rem;
      padding: 1rem;

      border: none;
      border-radius: .5rem;

      background: ${theme.colors.gray[800]};
      color: ${theme.colors.gray[100]};

      resize: none;
    }

    .input-new-question-footer {
      margin-top: 1rem;

      display: flex;
      align-items: center;
      gap: 1rem;

      & > p {
        font-size: .875rem;
        font-weight: 600;
        line-height: 21px;
        color: ${theme.colors.gray[300]};

        & > span {
          color: ${theme.colors.green.light};
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      & > button {
        width: auto;
        margin-left: auto;
      }
    }
  }

  .no-question {
    height: 100%;
    margin-top: 4rem;
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
`;

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
  }

  .button-container {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
