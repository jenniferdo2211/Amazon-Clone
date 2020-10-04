import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';
import { StateProvider } from "./context/StateProvider";
import { initialContext, reducer } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialContext={initialContext} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
