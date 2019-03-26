//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { index } from "./component/reactLander.jsx";

//render your react application
ReactDOM.render(
        <reactLander />, document.querySelector("#app"));
