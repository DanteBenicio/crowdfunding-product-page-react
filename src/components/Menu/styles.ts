import styled from 'styled-components';

export const Overlay = styled.div`
  display: none;
  position: fixed;
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 85vw;
  width: 100%;

  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);

  background-color: #FFF;

  border-radius: 0.5rem;

  list-style: none;

  > li {
    width: 100%;
    padding: 1.5rem 1rem;
    height: ${({ theme }) => theme.pixelToRem(73)};

    cursor: pointer;

    &:not(:nth-child(3)) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
    }

    > a {
      color: black;
      font-size: clamp(0.9rem, 4vw, 1.2rem);
      font-weight: ${({ theme }) => theme.fontWeights.medium};

      transition: font-size 0.2s ease;

      &:hover {
        font-size: clamp(1rem, 4vw, 1.3rem);
      }
    }
  }
`;
