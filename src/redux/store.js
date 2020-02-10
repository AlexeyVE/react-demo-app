// import profileReducer from './profileReducer'
// import dialogsReducer from './dialogsReducer'

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id:1, message:'Id voluptate commodo incididunt', likesCount:5 },
//         { id:2, message:'Id voluptate commodo incididunt', likesCount:2 },
//         { id:3, message:'Id voluptate commodo incididunt', likesCount:5 },
//         { id:4, message:'Id voluptate commodo incididunt', likesCount:5 },
//         { id:5, message:'Id voluptate commodo incididunt', likesCount:5 }
//       ],
//       newPostText: ''
//     },
//     dialogsPage: {
//       messages: [
//         { id:2, message: 'Aliqua nostrud.' },
//         { id:3, message: 'Aliqua nostrud.' },
//         { id:1, message: 'Aliqua nostrud.' },
//         { id:4, message: 'Aliqua nostrud.' },
//         { id:5, message: 'Aliqua nostrud.' }
//       ],
//       dialogs: [
//         { id:1, name: 'Alexey' },
//         { id:2, name: 'Sergey' },
//         { id:3, name: 'Stanislav' },
//         { id:4, name: 'Dmitry' },
//         { id:5, name: 'Andrew' }
//       ],
//       newMessageText : ''
//     },
//     sideBar: {
//     }
//   },
//   _callSubscriber () {
//     console.log( 'state changed' ) 
//   },
//   getState () {
//     return this._state;
//   },
//   // subscribe ( observer ) { 
//   //   this._callSubscriber = observer
//   // },
//   // addPost () {
//   //   let newPost = {
//   //     id: 6,
//   //     message: this._state.profilePage.newPostText ,
//   //     likesCount: 5
//   //   }
//   //   this._state.profilePage.posts.push( newPost )
//   //   this._state.profilePage.newPostText = ''
//   //   this._callSubscriber( this._state )
//   // },
//   // updateNewPostText ( newText ) {
//   //   this._state.profilePage.newPostText = newText
//   //   this._callSubscriber( this._state )  
//   // },
//   // addMessage () { 
//   //   let newMessage = {
//   //     id: 2,
//   //     message: this._state.dialogsPage.newMessageText
//   //   }
//   //   this._state.dialogsPage.messages.push( newMessage )
//   //   this._state.dialogsPage.newMessageText = ''
//   //   this._callSubscriber( this._state )    
//   //   // console.log(this._state.dialogsPage.newMessageText );
//   // },
//   // updateNewMessageText ( newText ) {
//   //   this._state.dialogsPage.newMessageText = newText  
//   //   this._callSubscriber( this._state )
//   // },
//   dispatch ( action ) {
//     this._state.profilePage = profileReducer ( this._state.profilePage , action )
//     this._state.dialogsPage = dialogsReducer ( this._state.dialogsPage, action )
//     this._callSubscriber (this._state)
//   }
// }

// export default store;

// getUsers = async () => {
//     let res = await axios.get("https://reqres.in/api/users?page=1");
//     let { data } = res.data;
//     this.setState({ users: data });
// };