import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/stable";
import App from "./App";
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";

ReactDOM.render(<App />, document.getElementById("root"));
