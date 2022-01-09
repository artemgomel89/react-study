import './Friends.module.scss';
import React from 'react';
import s from './Friends.module.scss';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
  return (
    <div className={s.friends}>
      <h4>Friends</h4>
      <div className={s.friendsCards}>
        <FriendsItem name={props.friends[0].name} />
        <FriendsItem name={props.friends[1].name} />
        <FriendsItem name={props.friends[2].name} />
      </div>
    </div>
  );
};

export default Friends;
