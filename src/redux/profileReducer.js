import { profileAPI } from '../api/'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const GET_USER_PROFILE = 'GET-USER-PROFILE'
const SET_STATUS = 'GET-STATUS'
const EDIT_STATUS = 'EDIT-STATUS'

let initialState = {
      posts: [
        { id:1, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:2, message:'Id voluptate commodo incididunt', likesCount:2 },
        { id:3, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:4, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:5, message:'Id voluptate commodo incididunt', likesCount:5 }
      ],
      newPostText: undefined,
      profile : undefined,
      status : undefined

}

const profileReducer = ( state = initialState , action ) => {
  switch ( action.type ) {
    case UPDATE_NEW_POST_TEXT: 
      return { ...state,newPostText: action.newText }
    case ADD_POST: {
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      let newPost = {
        id: 6,
        message: stateCopy.newPostText ,
        likesCount: 5
      }
      stateCopy.posts.push( newPost )
      stateCopy.newPostText = ''
    return stateCopy 
    }
    case GET_USER_PROFILE: 
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status }
    default : return state  
  }
}
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