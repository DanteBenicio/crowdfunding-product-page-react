import styled, { css } from 'styled-components';

type DaysLeftElementProps = {
  fontSize: number
  smallFontSize: number
}

export const DaysLeftElement = styled('span')<DaysLeftElementProps>`
  display: flex;
  justify-content: center
  align-items: center;

  gap: ${({ theme }) => theme.pixelToRem(6)};

  ${({ fontSize, theme }) => css`
    font-size: clamp(${theme.pixelToRem(fontSize - 6)}, 5vw, ${theme.pixelToRem(fontSize)});
  `}
  font-weight: ${({ theme }) => theme.fontWeights.large};

  > small {
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    ${({ smallFontSize, theme }) => css`
      font-size: clamp(${theme.pixelToRem(smallFontSize - 4)}, 5vw, ${theme.pixelToRem(smallFontSize)});
    `}
  }
`;
