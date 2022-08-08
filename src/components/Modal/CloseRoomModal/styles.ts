import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const CloseRoomModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .close-icon {
    color: ${theme.colors.semantic.negative};
  }

  & > strong {
    display: block;
    margin-top: 1.5rem;

    font-size: 1.5rem;
    font-weight: bold;
    font-family: ${theme.fonts.fontFamily.heading};
  }

  & > span {
    display: block;
    margin-top: .75rem;

    font-size: 1rem;
    color: ${theme.colors.gray[300]};
  }

  & > div {
    width: 100%;
    margin-top: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }
`;

export const Button = styled.button`
  height: 3.125rem;
  padding: 0 2.125rem;
  
  background: ${theme.colors.gray[800]};
  color: ${theme.colors.gray[100]};
  font-weight: bold;

  border-radius: .5rem;

  transition: filter .2s ease-in-out;

  &.close-room {
    background: ${theme.colors.semantic.negative};
    color: ${theme.colors.gray[900]};
  }

  &:hover {
    filter: brightness(.8);
  }
`;
