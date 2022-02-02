import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.dialogsState.map((d, pos) => (
    <DialogItem name={d.name} id={d.id} key={pos} />
  ));

  const messagesElements = props.messagesState.map((m, pos) => (
    <Message message={m.message} id={m.id} key={pos} />
  ));

  const addMessage = () => {
    if (props.newMessageBody.length !== 0) props.addMessage();
  };

  const updateTextArea = (e) => {
    const text = e.target.value;
    props.updateTextArea(text);
  };

  return (
    <div className={s.dialogs}>
      <div>
        <h3>Dialogs</h3>
        <div className={s.dialogItems}>{dialogsElements}</div>
        <div className={s.sendMessage}>
          <button onClick={addMessage}>Send</button>
          <textarea
            value={props.newMessageBody}
            onChange={updateTextArea}
            placeholder="Enter message"
          />
        </div>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
