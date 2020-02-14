import React from 'react';
import style from './Dialogs.module.css';
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

// const DialogsContainer = ( props ) => {
//   let state = props.store.getState()

//   let updateNewMessageCreator = ( text ) => 
//     ( { type : 'UPDATE-NEW-MESSAGE-TEXT', newText : text } )

//   let addMessageCreator = () => ( { type:'ADD-MESSAGE' } )

//   let updateNewMessage = ( text ) => {
//     let action = updateNewMessageCreator( text )
//     props.store.dispatch (action)
//   }       
//   let addMessage = () => {
//     let action = addMessageCreator ()
//     props.store.dispatch( action )
//   }

//   return ( 
//     <Dialogs dialogs = { state.dialogsPage.dialogs } 
//              messages = { state.dialogsPage.messages }
//              newMessageText = { state.dialogsPage.newMessageText } 
//              changeMessageText = { updateNewMessage }
//              addMessage = { addMessage } />
//   ) 
// }
let addMessageCreator = () => ( { type:'ADD-MESSAGE' } )

let updateNewMessageCreator = ( text ) => 
    ( { type : 'UPDATE-NEW-MESSAGE-TEXT', newText : text } )


let mapStateToProps = ( state ) => {
  return {
    dialogsPage : state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = ( dispatch ) => {
  return {
    addMessage : () => {
      let action = addMessageCreator ()
      dispatch( action )
   },
    changeMessageText : ( text ) => {
      let action = updateNewMessageCreator( text )
      dispatch (action)
    }       
  }
}

let DialogsContainer = connect( mapStateToProps,mapDispatchToProps )( Dialogs )

export default DialogsContainer;