import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const ButtonCodeRoom = styled.button`
  height: 2.5rem;
  border-radius: .5rem;
  overflow: hidden;

  display: flex;
  
  border: 1px solid;
  border-color: ${theme.colors.green.medium};

  color: ${theme.colors.gray[100]};
  background: ${theme.colors.gray[900]};

  transition: background .2s ease-in-out;

  & > div {
    height: 2.5rem;
    padding: 0 .75rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.green.medium};
  }

  & > span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 .75rem;
    font-size: .875rem;
    font-weight: 500;
  }

  &:hover {
    background: ${theme.colors.green.medium};
  }
`;
