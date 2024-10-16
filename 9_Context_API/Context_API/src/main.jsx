import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext";

ReactDOM.render(
  <CounterContextProvider>
    <TitleColorContextProvider>
      <App />
    </TitleColorContextProvider>
  </CounterContextProvider>,
  document.getElementById("root")
);
