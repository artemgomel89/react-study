import React from 'react';
import s from '../Friends.module.scss';

const FriendsItem = (props) => {
  return (
    <div className={s.friendsItem}>
      <img
        src="https://miro.medium.com/fit/c/1360/1360/1*aHkiCy29-OUFYmut2Mjabg.png"
        alt="avatar-logo"
      />
      <div>{props.name}</div>
    </div>
  );
};

export default FriendsItem;
