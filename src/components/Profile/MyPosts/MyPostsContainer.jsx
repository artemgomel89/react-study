import {
  addPostCreator,
  clearTextAreaCreator,
  updateNewPostCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
      dispatch(clearTextAreaCreator());
    },
    updatePost: (newChar) => {
      dispatch(updateNewPostCreator(newChar));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
