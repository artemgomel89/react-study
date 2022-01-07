import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Sasha' },
  { id: 2, name: 'Ivan' },
  { id: 3, name: 'Grigory' },
  {
    id: 4,
    name: 'Stepan',
  },
  { id: 5, name: 'Katya' },
];
const messages = [
  { id: 1, message: 'How are you?' },
  { id: 2, message: 'The weather is great' },
  {
    id: 3,
    message: 'ok,i got you',
  },
  { id: 4, message: 'Keep going, man!' },
  { id: 5, message: 'See you soon' },
];
const posts = [
  { id: 1, message: 'How are you?', likesCount: 12 },
  { id: 2, message: 'The weather is great', likesCount: 8 },
  { id: 2, message: 'Keep going man', likesCount: 8 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} posts={posts} messages={messages} />
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
