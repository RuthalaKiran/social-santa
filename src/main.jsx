import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter,HashRouter } from "react-router-dom";
import SmoothScrolling from "./Utils/SmoothScrolling.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SmoothScrolling>   
      <App />
    </SmoothScrolling>
  </BrowserRouter>
);
