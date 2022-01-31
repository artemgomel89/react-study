import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/state';

export const renderDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
