import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from'./Dialog/DialogItem'
import Message from'./Message/Message'
import { Redirect } from 'react-router-dom'
import AuthRedirect from '../common/AuthRedirect/'
const Dialogs = ( props ) => {

  let newMessageText = React.createRef()

  let onChangeMessage = () => {
    let text = newMessageText.current.value
    props.changeMessageText( text )
  }

  let onAddMessage = () => props.addMessage()

  let dialogsElements = props.dialogsPage.dialogs.map( ( dialog,index ) => 
                                      <DialogItem 
                                        name = { dialog.name } 
                                        id = { dialog.id } 
                                        key = { index }
                                      />
                                    )
  let messagesElements = props.dialogsPage.messages.map( ( message,index ) =>
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
    </div>
    <div className = { style.messages }>
      { messagesElements }
      <div>
        <div>
          <textarea placeholder = 'new message text'
                    onChange = { onChangeMessage } 
                    ref = { newMessageText } 
                    value = { props.dialogsPage.newMessageText }
          />
        </div> 
        <button onClick = { onAddMessage }>add message</button>
      </div> 
    </div>
  </div>
  );
}

export default Dialogs;