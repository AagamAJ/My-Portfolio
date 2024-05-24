/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./src/App.jsx";
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);
