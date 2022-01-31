const CONSTANTS = {
  ADD_POST: 'ADD-POST',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
  UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
  SEND_MESSAGE: 'SEND-MESSAGE',
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

const profileReducer = (state, action) => {
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

export default profileReducer;
