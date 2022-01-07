import React from 'react';
import s from './MyPosts.module.scss';
import Post from '../Post/Post';

const MyPosts = () => {
  const postData = [
    { id: 1, message: 'How are you?', likesCount: 12 },
    { id: 2, message: 'The weather is great', likesCount: 8 },
    { id: 2, message: 'Keep going man', likesCount: 8 },
  ];
  return (
    <div>
      My post
      <div className={s.addPost}>
        <textarea />
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <h4>New post</h4>
      <div className={s.posts}>
        <Post
          content={postData[0].message}
          btnName={`like`}
          likesCount={postData[0].likesCount}
        />
        <Post
          content={postData[1].message}
          btnName={`like`}
          likesCount={postData[1].likesCount}
        />
        <Post
          content={postData[2].message}
          btnName={`like`}
          likesCount={postData[2].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
