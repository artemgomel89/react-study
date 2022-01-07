import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p, pos) => (
    <Post
      content={p.message}
      btnName={`like`}
      likesCount={p.likesCount}
      key={pos}
    />
  ));

  return (
    <div>
      My post
      <div className={s.addPost}>
        <textarea />
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <h4>New post</h4>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
