const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
      posts: [
        { id:1, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:2, message:'Id voluptate commodo incididunt', likesCount:2 },
        { id:3, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:4, message:'Id voluptate commodo incididunt', likesCount:5 },
        { id:5, message:'Id voluptate commodo incididunt', likesCount:5 }
      ],
      newPostText: ''
}

const profileReducer = ( state = initialState , action ) => {
  switch ( action.type ) {
    case ADD_POST :
      let newPost = {
        id: 6,
        message: state.newPostText ,
        likesCount: 5
      }
      state.posts.push( newPost )
      state.newPostText = ''
    return state  
    case UPDATE_NEW_POST_TEXT :
      state.newPostText = action.newText
    return state
    default : return state  
  }
  return state
}
export default profileReducer