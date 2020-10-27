import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  max-width:100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Dosis', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen','Segoe UI',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: 'Dosis', antialiased;
  -moz-osx-font-smoothing: 'Dosis', grayscale;
  font-weight:300;
  line-height: calc(1.5rem + 0.8vw);
  font-size: calc(0.8rem + 0.5vw);
  div{
    box-sizing:border-box;
  }
  svg {
    cursor: pointer;
  }
}
`;

export default GlobalStyle;
