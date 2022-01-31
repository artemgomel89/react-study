import { renderDom } from '../render';

const CONSTANTS = {
  ADD_POST: 'ADD-POST',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
  UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
  SEND_MESSAGE: 'SEND-MESSAGE',
};

export const store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Grigory' },
        { id: 4, name: 'Stepan' },
        { id: 5, name: 'Katya' },
      ],
      messages: [
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'The weather is great' },
        { id: 3, message: 'ok,i got you' },
        { id: 4, message: 'Keep going, man!' },
        { id: 5, message: 'See you soon' },
      ],
      newMessageBody: '',
    },
    profilePage: {
      posts: [
        { id: 1, message: 'How are you?', likesCount: 12 },
        { id: 2, message: 'The weather is great', likesCount: 8 },
        { id: 2, message: 'Keep going man', likesCount: 8 },
      ],
      newPostText: 'IT-KAMASUTRA',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Kate' },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {},
  dispatch(action) {
    if (action.type === CONSTANTS.ADD_POST) {
      const actualMessage = this.getState().profilePage.newPostText;
      const newPost = {
        id: 2,
        message: actualMessage,
        likesCount: 8,
      };
      this._state.profilePage.posts.push(newPost);
      renderDom(this._state);
    } else if (action.type === CONSTANTS.UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      renderDom(this._state);
    } else if (action.type === CONSTANTS.UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      renderDom(this._state);
    } else if (action.type === CONSTANTS.SEND_MESSAGE) {
      const messageBody = (this._state.dialogsPage.newMessageBody =
        action.body);
      this._state.dialogsPage.messages.push({ id: 6, message: messageBody });
      renderDom(this._state);
    }
  },
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
