import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContext } from './context/AppContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import 'react-awesome-slider/dist/styles.css';
import 'react-vertical-timeline-component/style.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
    <App />
  </AppContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
