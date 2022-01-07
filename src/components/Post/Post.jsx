import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://miro.medium.com/fit/c/1360/1360/1*aHkiCy29-OUFYmut2Mjabg.png"
          alt="user-avatar"
        />
        <div>{props.content}</div>
        <div className={s.likesCount}>{props.likesCount}</div>
        <button className={s.like}>{props.btnName}</button>
      </div>
    </div>
  );
};
export default Post;
