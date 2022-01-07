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

const dialogsData = [
  { id: 1, name: 'Sasha' },
  { id: 2, name: 'Ivan' },
  { id: 3, name: 'Grigory' },
  {
    id: 4,
    name: 'Stepan',
  },
  { id: 5, name: 'Katya' },
];

const messagesData = [
  { id: 1, message: 'How are you?' },
  { id: 2, message: 'The weather is great' },
  {
    id: 3,
    message: 'ok,i got you',
  },
  { id: 4, message: 'How are you?' },
  { id: 5, message: 'How are you?' },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div>
        <h3>Dialogs</h3>
        <div className={s.dialogItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
      </div>
    </div>
  );
};

export default Dialogs;
