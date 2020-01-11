//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const root = document.getElementById("root");
const title = document.getElementById("title");

title.innerText = title.innerText + " - Home";

console.log("TCL: -----------------");
console.log("TCL: title", title);
console.log("TCL: -----------------");

ReactDOM.render(<App/>, root);
