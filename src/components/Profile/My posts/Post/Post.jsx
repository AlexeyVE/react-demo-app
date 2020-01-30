import React from "react";

const Post = (props) => {
  return (
    <div className = "current-post">
      <h4 className = "current-post-name"></h4>  
      <p className = "current-post-text">{ props.message }</p>
      <span>{ props.likesCount }</span>    
    </div>
  )
}

export default Post;