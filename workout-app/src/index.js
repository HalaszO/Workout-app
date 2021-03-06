import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import * as serviceWorker from './Util/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
