import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Mitr', sans-serif;
    font-weight: 500;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: 4px;
        height: 40px;
        font-size: 16px;
        align-items: center;
        &:hover , &:active, &:focus {
            border-color: rgb(230, 111, 15);
        }
    }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
