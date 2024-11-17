import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/karla/200.css"; // Specify weight
import "@fontsource/karla/300.css"; // Specify weight
import "@fontsource/karla/400.css"; // Specify weight
import "@fontsource/karla/500.css"; // Specify weight
import "@fontsource/karla/600.css"; // Specify weight
import "@fontsource/karla/700.css"; // Specify weight
import "@fontsource/karla/800.css"; // Specify weight

import "@fontsource/markazi-text/400.css"; // Specify weight
import "@fontsource/markazi-text/500.css"; // Specify weight
import "@fontsource/markazi-text/600.css"; // Specify weight
import "@fontsource/markazi-text/700.css"; // Specify weight

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
