import { combineReducers, createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import profileReducer  from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'


const rootReducer = combineReducers( {
  profilePage : profileReducer,
  dialogsPage : dialogsReducer,
  usersPage : usersReducer,
  auth: authReducer,
} )

const store = createStore( rootReducer, applyMiddleware(logger ,thunkMiddleware ))

window.store = store

export default store