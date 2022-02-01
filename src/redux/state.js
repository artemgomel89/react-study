import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';

export const CONSTANTS = {
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.profilePage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sideBarReducer(this._state.sidebar, action);
  },
};
