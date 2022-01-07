import React from 'react';
import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <NavLink to={`${props.id}`} className={`${s.dialog}`}>
      {props.name}
    </NavLink>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

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

const dialogsElements = dialogs.map((d) => (
  <DialogItem name={d.name} id={d.id} />
));
const messagesElements = messages.map((m) => (
  <Message message={m.message} id={m.id} />
));

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div>
        <h3>Dialogs</h3>
        <div className={s.dialogItems}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
