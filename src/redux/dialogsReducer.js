const ADD_MESSAGE = 'ADD_MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
      messages: [
        { id:2, message: 'Aliqua nostrud.' },
        { id:3, message: 'Aliqua nostrud.' },
        { id:1, message: 'Aliqua nostrud.' },
        { id:4, message: 'Aliqua nostrud.' },
        { id:5, message: 'Aliqua nostrud.' }
      ],
      dialogs: [
        { id:1, name: 'Alexey' },
        { id:2, name: 'Sergey' },
        { id:3, name: 'Stanislav' },
        { id:4, name: 'Dmitry' },
        { id:5, name: 'Andrew' }
      ],
      // newMessageText : ''
}

const dialogsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
  // case UPDATE_NEW_MESSAGE_TEXT:                       
  // return { ...state, newMsgBody: action.newMsgBody }    
  case ADD_MESSAGE :
  let newMsg = action.newMsgBody 
  return { ...state,
           messages: [ ...state.messages,{ id: 2,message: newMsg } ] } 
  default : return state
  }
}

export const addMessageCreator = newMsgBody => ( { type: ADD_MESSAGE, newMsgBody } )

// export const updateNewMessageCreator = newMsgBody  => 
//     ( { type : UPDATE_NEW_MESSAGE_TEXT, newMsgBody } )

export default dialogsReducer   