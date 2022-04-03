import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 3rem;

  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0,0,0,0.1);
`;

export const ProjectInfo = styled.div`
  width: 100%;

  > #about_this_project {
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeights.large};

    margin-bottom: 2rem;
  }

  > .description {
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: clamp(0.8rem, 5vw, 1rem);
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;
