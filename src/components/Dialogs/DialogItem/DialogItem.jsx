import React from 'react';
import s from '../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <NavLink to={`${props.id}`} className={`${s.dialog}`}>
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
