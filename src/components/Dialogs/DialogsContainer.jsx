import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        const updateTextArea = (text) => {
          store.dispatch(updateNewMessageBodyCreator(text));
        };

        return (
          <Dialogs
            addMessage={addMessage}
            updateTextArea={updateTextArea}
            dialogsState={store.getState().dialogsPage.dialogs}
            messagesState={store.getState().dialogsPage.messages}
            newMessageBody={store.getState().dialogsPage.newMessageBody}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
