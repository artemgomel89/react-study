import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.state.posts;
  let newPostText = props.state.newPostText;

  const postsElements = posts.map((p, pos) => (
    <Post
      content={p.message}
      btnName={`like`}
      likesCount={p.likesCount}
      key={pos}
    />
  ));

  const newPostElement = React.createRef();

  const addPost = () => props.addPost();

  const onPostChange = () => {
    const newChar = newPostElement.current.value;
    return props.updatePost(newChar);
  };

  return (
    <div>
      <h4>New post</h4>
      <div className={s.addPost}>
        <textarea
          onChange={onPostChange}
          className={s.textArea}
          ref={newPostElement}
          value={newPostText}
        />
        <div className="buttons">
          <button className={s.postBtn} onClick={addPost}>
            Add post
          </button>
          <button className={s.postBtn}>Remove</button>
        </div>
      </div>
      <h4>My posts</h4>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
