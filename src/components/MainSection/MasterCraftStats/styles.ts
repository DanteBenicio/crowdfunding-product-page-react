import styled from 'styled-components';

export const Container = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FirstCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  gap: 2rem;
  padding: 3rem;
  margin-bottom: 1.5rem;

  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0,0,0,0.1);
`;

export const TitleWrapper = styled.div`
  width: 100%;

  > #title {
    margin-bottom: 1rem;

    font-weight: ${({ theme }) => theme.fontWeights.large};
    text-align: center;
  }

  > #application_description {
    display: block;

    width: 100%;

    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    text-align: center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const BookmarkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 10rem;
  width: 100%;

  background-color: hsl(0deg, 0%, 84%);
  border-radius: 2rem;

  cursor: pointer;

  > #bookmark {
    display: inline-block;
    margin-right: 1rem;

    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium}
  }
`;

export const BookmarkWrapper = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  height: auto;
  /* background-color: ${({ theme }) => theme.colors.neutral.darkGray}; */
`;

export const Bookmark = styled.img`
  width: 100%;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding: ${({ theme }) => theme.pixelToRem(32)};

  background-color: white;
  box-shadow: 0 0 1rem rgba(0,0,0,0.1);
  border-radius: 0.5rem;
`;
export const StatsInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .info_stats {
    padding-right: 2rem;
    margin-bottom: 2rem;
    width: 100%;

    > span, small {
      display: block;
    }

    > span {
      font-size: ${({ theme }) => theme.pixelToRem(32)};
      font-weight: ${({ theme }) => theme.fontWeights.large};
      margin-bottom: 0.5rem;
    }

    > small {
      color: ${({ theme }) => theme.colors.neutral.darkGray};
      font-size: 1rem;
      font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
  }

  .info_stats:not(:first-child) {
    padding: 0 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.pixelToRem(12)};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.neutral.lightGray};

  > span {
    display: block;
    height: 100%;
    width: 70%;
    background-color: ${({ theme }) => theme.colors.primary.moderateCyan};
    border-radius: 1rem;
  }
`;
