import styled from 'styled-components';

export const ButtonElement = styled.button`
  max-width: ${({ theme }) => theme.pixelToRem(200)};;
  width: 100%;

  padding: 1.1rem 1rem;

  border-radius: 5rem;
  border: none;

  color: white;
  font-size: clamp(0.8rem, 5vw, 1rem);
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  background-color: ${({ theme }) => theme.colors.primary.moderateCyan};

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.darkCyan};
  }
`;
