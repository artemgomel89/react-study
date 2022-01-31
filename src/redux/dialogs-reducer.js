const CONSTANTS = {
  ADD_POST: 'ADD-POST',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
  UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
  SEND_MESSAGE: 'SEND-MESSAGE',
};
export const sendMessageCreator = () => ({ type: CONSTANTS.SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: CONSTANTS.UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case CONSTANTS.SEND_MESSAGE:
      const messageBody = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({
        id: 6,
        message: messageBody,
      });
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
