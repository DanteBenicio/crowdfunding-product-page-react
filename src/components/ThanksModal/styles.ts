import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  padding: 0 1rem;

  max-width: 100vw;
  min-height: 100vh;
  width: 100%;

  z-index: 10;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: ${({ theme }) => theme.pixelToRem(600)};
  width: 100%;

  padding: 2rem;
  gap: 1.5rem;

  background-color: white;
  border-radius: 0.5rem;
`;

export const CheckWrapper = styled.div`

`;

export const Check = styled.img`

`;

export const Message = styled.span`
  display: block;
  width: 100%;
  text-align: center;

  font-size: clamp(1.2rem, 5vw, 1.6rem);
  font-weight: ${({ theme }) => theme.fontWeights.large};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-size: clamp(0.8rem, 5vw, 1rem);
  text-align: center;
`;
