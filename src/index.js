//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const root = document.getElementById("root");
const title = document.getElementById("title");

title.innerText = title.innerText + " - Home";

ReactDOM.render(<App/>, root);
