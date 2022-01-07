import React from 'react';
import s from './MyPosts.module.scss';
import Post from '../Post/Post';

const MyPosts = () => {
  const posts = [
    { id: 1, message: 'How are you?', likesCount: 12 },
    { id: 2, message: 'The weather is great', likesCount: 8 },
    { id: 2, message: 'Keep going man', likesCount: 8 },
  ];

  const postsElements = posts.map((p) => (
    <Post content={p.message} btnName={`like`} likesCount={p.likesCount} />
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
