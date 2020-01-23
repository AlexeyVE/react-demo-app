import React from "react";
import Post from "./Post/Post"

const MyPosts = () => {
  return (
      <div className = "posts">
        <div className = "add-new-post">
          <textarea></textarea>
          <button>add post</button>  
        </div> 
        <Post />
      </div>
  )
}

export default MyPosts;