import React from 'react';
import spinner from '../../assets/gear.svg';
import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
