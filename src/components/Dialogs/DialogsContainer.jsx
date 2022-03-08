import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsState: state.dialogsPage.dialogs,
    messagesState: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateTextArea: (text) => {
      dispatch(updateNewMessageBodyCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
