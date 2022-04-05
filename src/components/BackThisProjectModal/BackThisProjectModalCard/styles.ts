import styled, { css } from 'styled-components';

type CardProps = {
  outOfStock: boolean
  activeCard: boolean
}

export const Card = styled('div')<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 150px;
  gap: 0.5rem;

  transition: border 0.2s ease;

  ${({ theme, activeCard }) => (activeCard ? css`
    border: 2px solid ${theme.colors.primary.moderateCyan};
  ` : css`
    border: 2px solid ${theme.colors.neutral.lightGray};
  `)}

  border-radius: 0.5rem;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 1.4rem;
  gap: 1.5rem;

  > p {
    padding-left: 2rem;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: clamp(0.8rem, 5vw, 1rem);
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  > .days_left_wrapper {
    display: none;
  }

  @media screen and (max-width: 580px) {
    > p {
      padding-left: 0;
    }

    > .days_left_wrapper {
      display: block;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card_name_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    > input[type="radio"] {
      width: 20px;
      height: 20px;
      outline: red;
      border: 2px solid ${({ theme }) => theme.colors.primary.moderateCyan};
      border-radius: 50%;
      cursor: pointer;

      &[type="radio"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${({ theme }) => theme.colors.primary.moderateCyan};;
      }

      &[type="radio"]:checked::before {
        transform: scale(1)
      }
    }
  }

  @media screen and (max-width: 580px) {
    > span {
      display: none;
    }

    > .card_name_wrapper {
      gap: 1rem;
    }
  }
`;

export const NamePledgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  > span {
    color: ${({ theme }) => theme.colors.primary.moderateCyan};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  label {
    font-size: clamp(0.7rem, 5vw, 1rem);
    font-weight: ${({ theme }) => theme.fontWeights.large};

    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.moderateCyan};
    }
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const ActionButtons = styled.div`
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  padding: ${({ theme }) => theme.pixelToRem(22)};

  > span {
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    font-size: clamp(0.8rem, 5vw, 1rem);
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ActionButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  > #pledge_input {
    position: relative;
    width: 100px;
    padding: 1rem;
    border-radius: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral.darkGray};

    caret-color: ${({ theme }) => theme.colors.primary.moderateCyan};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.large};
    text-align: center;

    transition: border-color, outline 0.2s ease;

    &::before {
      content: 'asd';
      position: absolute;
      left: 10%;
      top: 10%;
      width: 20px;
      height:20px;
      color: black;
      font-weight: ${({ theme }) => theme.fontWeights.large};
      font-size: 1rem;
      background: red;

      filter: brightness(120%);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.moderateCyan};
    }

    &:focus {
      border-color: transparent;
      outline: 1px solid ${({ theme }) => theme.colors.primary.darkCyan};
    }
  }

  @media screen and (max-width: 580px) {
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;

    > #pledge_input {
      width: 150px;
    }
  }
`;
