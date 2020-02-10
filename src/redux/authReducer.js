const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: undefined,
  email: undefined,
  login: undefined,
  isAuth: false
}

const authReducer = (state = initialState ,action) => {
  switch ( action.type ) {
    case SET_USER_DATA :
     return { ...state,
              ...action.data 
            }
    default: return state        
  }
}

export const authCreator = ( userId,email,login ) =>  
                            ({ type:SET_USER_DATA, payload :{ userId,email,login} })

export default authReducer
