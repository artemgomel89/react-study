import React from 'react';

import {
  addPostCreator,
  clearTextAreaCreator,
  updateNewPostCreator,
} from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostCreator());
          store.dispatch(clearTextAreaCreator());
        };

        const updatePost = (newChar) => {
          store.dispatch(updateNewPostCreator(newChar));
        };
        return (
          <MyPosts
            addPost={addPost}
            updatePost={updatePost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
