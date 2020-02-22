import { profileAPI } from '../api/'

const ADD_POST = 'ADD_POST'
const GET_USER_PROFILE = 'GET_USER_PROFILE'
const SET_STATUS = 'GET_STATUS'

let initialState = {
      posts: [
        { id:1, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:2, message:'Id voluptate commodo incididunt', likesCount:2 },
        { id:3, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:4, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:5, message:'Id voluptate commodo incididunt', likesCount:5 }
      ],
      profile : undefined,
      status : undefined
}

const profileReducer = ( state = initialState , action ) => {
  switch ( action.type ) {
    case ADD_POST:
    let newPost = action.postBody
    return { ...state, 
                posts: [...state.posts, { id: 6, message: newPost } ] } 
    case GET_USER_PROFILE: 
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status }
    default : return state  
  }
}


export const addPostCreator = ( postBody ) => ({ type: ADD_POST, postBody })

const setStatusCreator = ( status ) => ({ type: SET_STATUS, status })

export const getStatus = userId =>  dispatch => {
  profileAPI.getProfileStatus( userId )
  .then( res => { 
    dispatch( setStatusCreator( res.data )) 
  }).catch( err => console.log( err ))
}

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus( status )
  .then( res => {
    if ( res.data.resultCode === 0 )
      dispatch( setStatusCreator( status ))
  }).catch( err => console.log( err )) 
}

const getUserProfileCreator = ( profile ) => ({ type: GET_USER_PROFILE, profile })

export const getProfile = ( userId ) => {
  return ( dispatch ) => {
    profileAPI.getProfile( userId )
    .then( res => dispatch( getUserProfileCreator( res.data ) ))
    .catch( err => console.log( err )) }
}
// export const getProfile = ( userId ) => dispatch => {
//   usersAPI.getProfile( userId ).then( res => dispatch(getUserProfileCreator(res.data)))
// }

export default profileReducer