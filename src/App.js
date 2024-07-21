import * as React from "react";
import { createRoot } from 'react-dom/client';

import "./styles/App.scss";

import CV from "./cv/CV";

const container = document.getElementById('app');
const root = createRoot(container);


root.render(<CV/>);