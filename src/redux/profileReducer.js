const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const GET_USER_PROFILE = 'GET-USER-PROFILE'

let initialState = {
      posts: [
        { id:1, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:2, message:'Id voluptate commodo incididunt', likesCount:2 },
        { id:3, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:4, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:5, message:'Id voluptate commodo incididunt', likesCount:5 }
      ],
      newPostText: undefined,
      profile : undefined

}

const profileReducer = ( state = initialState , action ) => {
  switch ( action.type ) {
    case UPDATE_NEW_POST_TEXT : 
      return { ...state,newPostText: action.newText }
    case ADD_POST : {
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
    case GET_USER_PROFILE : 
      return {...state, profile: action.profile}
    
    default : return state  
  }
}

export const getUserProfileCreator = ( profile ) => 
  ({ type: GET_USER_PROFILE, profile })

export default profileReducer