import React from 'react';
import './ProfileInfo.module.scss';
import s from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        src="https://i.pinimg.com/550x/56/e5/3b/56e53bd754deedf4254a8172e0f7d580.jpg"
        alt="dog"
        className={s.dog}
      />
      <div> ava + description</div>
    </div>
  );
};

export default ProfileInfo;
