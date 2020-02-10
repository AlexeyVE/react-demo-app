import React from "react"
import Post from "./Post/Post"

const MyPosts = ( props ) => {
  let newPostElement = React.createRef()
  let onAddPost = () => { 
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value 
    props.updateNewPostText( text )
  }                                             
  let postsElements = props.posts.map( ( post,index ) => 
                                  <Post
                                    message = { post.message }
                                    likesCount = { post.likesCount } 
                                    key = { index }
                                  />
                                )
  return (
      <div className = "posts">
        <div className = "add-new-post">
          <textarea placeholder = 'new post text'
                    onChange = { onPostChange } 
                    ref = { newPostElement } 
                    value = { props.newPostText }
          />
          <div>
            <button onClick = { onAddPost }>
              Add post
            </button>
          </div>  
        </div>
        <h4>Posts</h4>
        { postsElements }
      </div>
  )
}

export default MyPosts;