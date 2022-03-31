import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Commissioner', sans-serif;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
