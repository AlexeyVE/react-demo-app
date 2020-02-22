import { authAPI } from '../api/'

const SET_USER_DATA = 'SET_USER_DATA'
const LOGOUT = 'LOGOUT'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = ( state = initialState ,action ) => {
  switch ( action.type ) {
    case SET_USER_DATA :
     return { ...state,
              ...action.payload
            } 
    default: return state        
  }
}

export const login = ( email, password, reMe ) => dispatch => {
  authAPI.login( email, password, reMe )
  .then( res => {
    if ( res.data.resultCode === 0 ) {
      dispatch( isAuth() )
    }
  }).catch( err => console.log( err ) )
}

export const logout = () => dispatch => {
  authAPI.logout()
  .then( res => {
    if ( res.data.resultCode === 0) {
      dispatch( authCreator( {...initialState} ))
    }
  })
}

export const isAuth = () => dispatch => {
  authAPI.me().then( res => {
    if ( res.data.resultCode === 0 ) {
      let { id, email, login } = res.data.data
      dispatch( authCreator( id, email, login, true ) )
    }
  }).catch( err => console.log( err ) )
} 
const authCreator = ( userId, email, login, isAuth ) =>  
                            ({ type: SET_USER_DATA, 
                               payload :{ userId, email, login, isAuth } })
export default authReducer
