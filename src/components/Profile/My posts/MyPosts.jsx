import React from "react";
import Post from "./Post/Post";

const MyPosts = ( props ) => {
 
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
          <textarea></textarea>
          <button>add post</button>  
        </div>
        {postsElements}
      </div>
  )
}

export default MyPosts;