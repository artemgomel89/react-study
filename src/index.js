import './index.scss';

import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
