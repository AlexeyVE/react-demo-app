import React from "react";
import Post from "./Post/Post";

const MyPosts = ( props ) => {
  let newPostElement = React.createRef()

  let addPost = () => props.addPost()

  let onPostChange = () => props.updateNewPostText( newPostElement.current.value )
  
  let postsElements = props.posts.map( ( post, index ) => 
                                  <Post
                                    message = { post.message }
                                    likesCount = { post.likesCount } 
                                    key = { index }
                                  />
                                )
  return (
      <div className = "posts">
        <div className = "add-new-post">
          <textarea onChange = { onPostChange } 
                    ref = { newPostElement } 
                    value = { props.newPostText }
          />
          <div>
            <button onClick = { addPost }>
              add post
            </button>
          </div>  
        </div>
        <h4>Posts</h4>
        { postsElements }
      </div>
  )
}

export default MyPosts;