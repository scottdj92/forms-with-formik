import React from "react";
import { render } from "react-dom";
import App from "../app";

const Root: React.SFC = () => (
    <App/>
);

render(<Root/>, document.getElementById("app"));
