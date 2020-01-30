import { rerenderEntireTree } from '../render'
const state = {
  profilePage: {
    posts: [
      { id:1, message:'Id voluptate commodo incididunt', likesCount:5 },
      { id:2, message:'Id voluptate commodo incididunt', likesCount:2 },
      { id:3, message:'Id voluptate commodo incididunt', likesCount:5 },
      { id:4, message:'Id voluptate commodo incididunt', likesCount:5 },
      { id:5, message:'Id voluptate commodo incididunt', likesCount:5 }
    ],
    newPostText:'Welcome to my APP'
  },
  dialogsPage: {
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
    ]
  },
  sideBar: {

  }
}

export let addPost = ( postMessage ) => { 
  let newPost = {
    id: 6,
    message: postMessage ,
    likesCount: 5
  }
  state.profilePage.posts.push( newPost )
  rerenderEntireTree(state)
  console.log (state.profilePage.posts)
}
export let updateNewPostText = ( newText ) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)  
}

export default state;