import './index.scss';
import reportWebVitals from './reportWebVitals';
import { renderDom } from './render';
import { store } from './redux/state';

renderDom(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
