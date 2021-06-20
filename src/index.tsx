import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BasketContextProvider from "./contexts/basketContext";
import DependanciesProvider from "./contexts/dependanciesContext";
import currencySvc from "./services/currency";
import optionsDataSvc from "./services/optionsData";

ReactDOM.render(
  <React.StrictMode>
    <DependanciesProvider
      currencySvc={currencySvc}
      optionsDataSvc={optionsDataSvc}
    >
      <BasketContextProvider>
        <App />
      </BasketContextProvider>
    </DependanciesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
