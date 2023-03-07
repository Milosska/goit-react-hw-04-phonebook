import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: inside;
  /* margin: 0;
  padding-left: 0; */
}

a {
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

button {
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
}
`;
