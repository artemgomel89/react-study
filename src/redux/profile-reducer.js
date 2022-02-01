import { CONSTANTS } from './state';

const initialState = {
  posts: [
    { id: 1, message: 'How are you?', likesCount: 12 },
    { id: 2, message: 'The weather is great', likesCount: 8 },
    { id: 2, message: 'Keep going man', likesCount: 8 },
  ],
  newPostText: 'IT-KAMASUTRA',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_POST:
      const actualMessage = state.newPostText;
      const newPost = {
        id: 2,
        message: actualMessage,
        likesCount: 8,
      };
      state.posts.push(newPost);
      return state;

    case CONSTANTS.UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: CONSTANTS.ADD_POST });

export const updateNewPostCreator = (newChar) => ({
  type: CONSTANTS.UPDATE_NEW_POST_TEXT,
  newText: newChar,
});

export const clearTextAreaCreator = () => ({
  type: CONSTANTS.UPDATE_NEW_POST_TEXT,
  newText: '',
});

export default profileReducer;
