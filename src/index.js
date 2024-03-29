import React from "react";
import { Route } from "wouter";

import ReactDOM from "react-dom/client";

import "./index.css";
import "@fontsource-variable/space-grotesk";

import App from "./App";
import Impressum from "./Impressum";

import reportWebVitals from "./reportWebVitals";
import Datenschutzerklaerung from "./Datenschutz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Route path="/" component={App} />
    <Route path="/impressum" component={Impressum} />
    <Route path="/datenschutz" component={Datenschutzerklaerung} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
