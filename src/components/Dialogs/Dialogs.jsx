import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from'./Dialog/DialogItem';
import Message from'./Message/Message';

const Dialogs = ( props ) => {

  let newMessageText = React.createRef()

  let updateNewMessage = () => 
      props.dispatch ( { type: 'UPDATE-NEW-MESSAGE-TEXT',
                                    newText: newMessageText.current.value } )

  let addMessage = () => props.dispatch( { type: 'ADD-MESSAGE' } )

  let dialogsElements = props.state.dialogs.map( ( dialog,index ) => 
                                      <DialogItem 
                                        name = { dialog.name } 
                                        id = { dialog.id } 
                                        key = { index }
                                      />
                                    )
  let messagesElements = props.state.messages.map( ( message,index ) =>
                                        <Message 
                                          text= { message.message } 
                                          id = { message.id } 
                                          key = { index }
                                        />
                                      )
  return (    
  <div className = { style.dialogs }>
    <div className = { style.dialogs_items }>
      { dialogsElements }
      <div>
        <textarea placeholder = 'new message text'
                  onChange = { updateNewMessage } 
                  ref = { newMessageText } 
                  value = { props.state.newMessageText }
        />
       </div> 
      <div>
        <button onClick = { addMessage }>add message</button>
      </div>    
    </div>
    <div className = { style.messages }>
      { messagesElements }
    </div> 
  </div>
  );
}

export default Dialogs;