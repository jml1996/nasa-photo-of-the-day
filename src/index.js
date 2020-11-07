import React from "react";
// import ReactDOM from "react-dom";
import { render } from 'react-dom';
import "./index.css";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
// import { render } from 'react-dom';

render(
    <ThemeProvider theme={theme}>,
        <App />,
    </ThemeProvider>,
    document.getElementById("root")
);
