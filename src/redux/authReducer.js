import { authAPI } from '../api/'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: undefined,
  email: undefined,
  login: undefined,
  isAuth: false
}

const authReducer = ( state = initialState ,action ) => {
  switch ( action.type ) {
    case SET_USER_DATA :
     return { ...state,
              ...action.payload,
              isAuth: true
            }
    default: return state        
  }
}

export const isAuth =() => dispatch => {
  authAPI.isAuth().then( res => {
    if ( res.resultCode === 0 ) {
      let { id, email, login } = res.data
      dispatch( authCreator( id, email, login ) )
    }
  })
} 
const authCreator = ( userId, email, login ) =>  
                            ({ type: SET_USER_DATA, payload :{ userId,email,login} })
export default authReducer
