import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Example from "./Example";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Example />
  </React.StrictMode>
);
