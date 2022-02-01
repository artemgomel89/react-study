import React from 'react';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
