import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./components/App";

import "./styles.css";

console.log(store);

ReactDOM.render(<App />, document.getElementById("root"));
