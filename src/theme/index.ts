import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      moderateCyan: 'hsl(176, 50%, 47%)',
      darkCyan: 'hsl(176, 72%, 28%)',
    },
    neutral: {
      black: 'hsl(0, 0%, 0%)',
      darkGray: 'hsl(0, 0%, 48%)',
      lightGray: 'hsl(0, 5%, 89%)',
    },
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    large: 700,
  },
  pixelToRem: (px: number) => `${px / 16}rem`,
};
