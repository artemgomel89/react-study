import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img
          src="https://i.pinimg.com/550x/56/e5/3b/56e53bd754deedf4254a8172e0f7d580.jpg"
          alt="dog"
          className={s.dog}
        />
        <div> ava + description</div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
