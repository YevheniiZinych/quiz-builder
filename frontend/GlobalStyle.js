import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
   
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: #1C1B1F;
    background-color: #ffffff;
    font-size: 14px;
    margin: 0;

    padding: 0;
    overflow-x: hidden;
   
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  input {
  border: none;
  outline: none;
  }

`;
