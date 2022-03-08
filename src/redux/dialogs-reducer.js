import { CONSTANTS } from './state';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case CONSTANTS.SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 6,
            message: state.newMessageBody,
          },
        ],
        newMessageBody: '',
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: CONSTANTS.SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: CONSTANTS.UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialogsReducer;
