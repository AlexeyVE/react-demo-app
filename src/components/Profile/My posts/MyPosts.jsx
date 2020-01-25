import React from "react";
import Post from "./Post/Post";

const MyPosts = ( props ) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };
  return (
      <div className = "posts">
        <div className = "add-new-post">
          <textarea ref={newPostElement}></textarea>
          <button onClick={ addPost }>add post</button>  
        </div>
        {props.posts.map ( post => <Post key={post.id} body={post.body} title={post.title}/>)} 
      </div>
  )
}

export default MyPosts;