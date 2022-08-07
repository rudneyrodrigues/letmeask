import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.button`
  width: 100%;
  height: 3.125rem;
  padding: 1rem 2.875rem;
  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  font-weight: 500;

  background: ${theme.colors.green.medium};
  color: ${theme.colors.gray[100]};

  transition: filter .2s ease-in-out;

  .spinner {
    -webkit-animation: load8 1.1s infinite linear;
    animation: spinnerLoading 1.1s infinite linear;
  }

  &:hover {
    filter: brightness(.8);
  }
`;
