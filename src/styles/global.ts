import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Trade+Winds&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: ${props => props.theme.font.family};
  }

  button {
    cursor: pointer;
  }
`;
