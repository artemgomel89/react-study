import React from 'react';
import s from '../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <NavLink to={`${props.id}`} className={`${s.dialog}`}>
      <img
        src="https://miro.medium.com/fit/c/1360/1360/1*aHkiCy29-OUFYmut2Mjabg.png"
        alt="user-avatar"
      />
      <div>{props.name}</div>
    </NavLink>
  );
};

export default DialogItem;
