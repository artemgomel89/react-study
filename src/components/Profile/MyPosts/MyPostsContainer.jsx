import React from 'react';

import {
  addPostCreator,
  clearTextAreaCreator,
  updateNewPostCreator,
} from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostCreator());
    props.dispatch(clearTextAreaCreator());
  };

  const updatePost = (newChar) => {
    props.dispatch(updateNewPostCreator(newChar));
  };

  return (
    <MyPosts addPost={addPost} updatePost={updatePost} state={props.state} />
  );
};

export default MyPostsContainer;
