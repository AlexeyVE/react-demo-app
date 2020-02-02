const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
      newMessageText : ''
}

const dialogsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
  case UPDATE_NEW_MESSAGE_TEXT : 
      state.newMessageText = action.newText
  return state     
  case ADD_MESSAGE : 
      let newMessage = {
        id: 2,
        message: state.newMessageText
      }
      state.messages.push( newMessage )
      state.newMessageText = ''
  return state  
  default : return state
  }
  return state 
}
export default dialogsReducer   