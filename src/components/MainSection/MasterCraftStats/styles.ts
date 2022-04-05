import styled, { css } from 'styled-components';

type BookmarkContainerProps = {
  isMarked: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const FirstCard = styled.div`
  position: absolute;
  top: -16.5%;
  transform: translateY(-16.5%);
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

  &::before {
    content: url(assets/logo-mastercraft.svg);
    position: absolute;
    width: 25px;
    height: 25px;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 580px) {
    padding: 3rem 1.5rem 1.5rem;
    gap: 1.5rem;
    top: -12.5%;
    transform: translateY(-12.5%);
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;

  > #title {
    margin-bottom: 1rem;

    font-weight: ${({ theme }) => theme.fontWeights.large};
    text-align: center;
    font-size: clamp(1.2rem, 5vw, 1.5rem);
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
  gap: 1rem;

  width: 100%;
`;

export const BookmarkContainer = styled('div')<BookmarkContainerProps>`
 ${({ theme, isMarked }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  min-width: ${theme.pixelToRem(60)};
  max-width: ${isMarked ? theme.pixelToRem(175) : theme.pixelToRem(170)};
  width: 100%;

  background-color: ${isMarked ? 'hsl(176, 50%, 47%, 0.21)' : 'hsl(0deg, 0%, 84%)'};
  border-radius: 2rem;

  cursor: pointer;

  > #bookmark {
    display: inline-block;
    margin-right: 1rem;

    color: ${isMarked ? theme.colors.primary.darkCyan : theme.colors.neutral.darkGray};
    font-size: 1rem;
    font-weight: ${theme.fontWeights.large}
  }

  @media screen and (max-width: 580px) {
    position: relative;
    overflow: hidden;
    min-width: ${theme.pixelToRem(55)};
    width: ${theme.pixelToRem(55)};

    #bookmark {
      position: absolute;
      left: 85%;
      transform: translateX(-85%);
      margin: 0;
    }
  }
 `};
`;

export const BookmarkWrapper = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary.darkCyan};

  @media screen and (max-width: 580px) {
    position: relative;
    z-index: 1;
  }
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

  padding: 3rem;

  background-color: white;
  box-shadow: 0 0 1rem rgba(0,0,0,0.1);
  border-radius: 0.5rem;

  @media screen and (max-width: 580px) {
    padding: 2rem;
  }
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

    &:not(:first-child) {
      padding: 0 2rem;
      border-left: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
    }
  }

  @media screen and (max-width: 528px) {
    flex-direction: column;
    align-items: center;

    .info_stats {
      position: relative;
      padding: 0 0 1rem;;
      text-align: center;

      &:not(:first-child) {
        padding: 0 0 1rem;;
        border-left: none;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.neutral.lightGray};
      }
    }

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
