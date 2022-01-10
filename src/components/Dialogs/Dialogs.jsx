import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d, pos) => (
    <DialogItem name={d.name} id={d.id} key={pos} />
  ));

  const messagesElements = props.state.messages.map((m, pos) => (
    <Message message={m.message} id={m.id} key={pos} />
  ));

  const newMessage = React.createRef();

  const addMessage = () => {
    const text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div>
        <h3>Dialogs</h3>
        <div className={s.dialogItems}>{dialogsElements}</div>
        <button onClick={addMessage}>Add message</button>
        <textarea ref={newMessage} />
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
