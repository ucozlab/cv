import * as React from "react";
import { createRoot } from 'react-dom/client';

import "./styles/App.scss";

import Main from "./cv/Main";

const container = document.getElementById('app');
const root = createRoot(container);


root.render(<Main/>);