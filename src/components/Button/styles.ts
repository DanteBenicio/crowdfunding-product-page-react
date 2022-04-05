import styled, { css } from 'styled-components';

type ButtonElementProps = {
  width: number
  notResize: boolean
  fixedWidth: number
}

export const ButtonElement = styled('button')<ButtonElementProps>`
  ${({ theme, width, fixedWidth }) => css`
    min-width: ${width ? theme.pixelToRem(width) : theme.pixelToRem(150)};
    max-width: ${width ? theme.pixelToRem(width) : theme.pixelToRem(200)};
    width: 100%;

    padding: 1.1rem 1rem;

    color: white;
    font-size: clamp(0.8rem, 5vw, 1rem);
    font-weight: ${theme.fontWeights.medium};

    background-color: ${theme.colors.primary.moderateCyan};
    border-radius: 5rem;
    border: none;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${theme.colors.primary.darkCyan};
    }

    @media screen and (max-width: 580px) {
      min-width: ${fixedWidth && theme.pixelToRem(fixedWidth)};

      /* ${fixedWidth && css`
      `} */
    }

    @media screen and (max-width: 480px) {
      padding: 1.1rem 0.8rem;
    }
  `}
`;
