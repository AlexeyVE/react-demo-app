import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from'./Dialog/DialogItem';
import Message from'./Message/Message';

const Dialogs = ( props ) => {
  let dialogsElements = props.state.dialogs.map( dialog => 
                                      <DialogItem 
                                        name = { dialog.name } 
                                        id = { dialog.id } 
                                        key = { dialog.id }
                                      />
                                    )
  let messagesElements = props.state.messages.map( message =>
                                        <Message 
                                          text= { message.message } 
                                          id = { message.id } 
                                          key={ message.id }
                                        />
                                      )
  return (    
  <div className = { style.dialogs }>
    <div className = { style.dialogs_items }>
      { dialogsElements }
    </div>
    <div className = { style.messages }>
      { messagesElements }
    </div> 
  </div>
  );
}

export default Dialogs;