import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import './Style/Index.scss'
import './Style/Animation.scss'
import { Store } from './Store/Store';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <HashRouter>
        <App />
      </HashRouter>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
