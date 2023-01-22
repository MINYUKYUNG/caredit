import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 18px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  };

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
  };

  ol,
  ul,
  li {
    list-style: none;
  };

  textarea {
    resize: none;
    outline: none;
  };

  input,
  select,
  button {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
    cursor: pointer;
  };

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
