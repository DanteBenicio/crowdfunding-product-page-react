/* eslint-disable no-unused-vars */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        moderateCyan: string
        darkCyan: string
      },
      neutral: {
        black: string
        darkGray: string
        lightGray: string
      }
    },
    fontWeights: {
      normal: 400
      medium: 500
      large: 700
    },
    pixelToRem: (pixels: number) => string
  }
}
