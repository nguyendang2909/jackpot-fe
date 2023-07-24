import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  #root > div {
    height: 100vh;
    width: 100% 
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .hide-scroll::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}
`;
