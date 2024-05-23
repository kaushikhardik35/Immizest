import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BasicSpeedDial from "./Components/Universal/SpeedDial.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasicSpeedDial />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
