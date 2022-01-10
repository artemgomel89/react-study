import './Friends.module.scss';
import React from 'react';
import s from './Friends.module.scss';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
  const friendsItems = props.friends.map((el, pos) => {
    return <FriendsItem name={el.name} key={pos} />;
  });

  return (
    <div className={s.friends}>
      <h4>Friends</h4>
      <div className={s.friendsCards}>{friendsItems}</div>
    </div>
  );
};

export default Friends;
