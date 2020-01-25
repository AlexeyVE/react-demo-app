import React from "react";

const Post = (props) => {
  return (
    <div className="current-post">
      <h4 className="current-post-name">{props.title}</h4>  
      <p className="current-post-text">{props.body}</p>
    </div>
  )
}

export default Post;