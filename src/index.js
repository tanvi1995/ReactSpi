import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from "react-router-dom";

import App from './rootComponent/app';

ReactDOM.render(
    <HashRouter><App></App></HashRouter>,document.getElementById("root"))
