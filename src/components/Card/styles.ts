import styled from 'styled-components';

type ContainerProps = {
  outOfStock: boolean
}

export const Container = styled('div')<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.pixelToRem(8)};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1.5rem;

  > p {
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: clamp(0.8rem, 5vw, 1rem);
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }

  > .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > #pledge_price {
      color: ${({ theme }) => theme.colors.primary.moderateCyan};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      font-size: clamp(0.8rem, 10vw, 1rem);

      cursor: pointer;

      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.darkCyan};
      }
    }
  }

  @media screen and (max-width: 480px) {
    > .wrapper {
      align-items: flex-start;
      flex-direction: column;

      > h3 {
        margin-bottom: 0.5rem;
      }

      > span:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;
