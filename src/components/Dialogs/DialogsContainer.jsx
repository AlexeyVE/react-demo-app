import React from 'react';
import style from './Dialogs.module.css';
import Dialogs from './Dialogs'

const DialogsContainer = ( props ) => {
  let state = props.store.getState()

  let updateNewMessageCreator = ( text ) => 
    ( { type : 'UPDATE-NEW-MESSAGE-TEXT', newText : text } )

  let addMessageCreator = () => ( { type:'ADD-MESSAGE' } )

  let updateNewMessage = ( text ) => {
    let action = updateNewMessageCreator( text )
    props.store.dispatch (action)
  }       
  let addMessage = () => {
    let action = addMessageCreator ()
    props.store.dispatch( action )
  }

  return ( 
    <Dialogs dialogs = { state.dialogsPage.dialogs } 
             messages = { state.dialogsPage.messages }
             newMessageText = { state.dialogsPage.newMessageText } 
             changeMessageText = { updateNewMessage }
             addMessage = { addMessage } />
  ) 
}

export default DialogsContainer;