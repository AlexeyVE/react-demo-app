import React from "react";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className = "profile">
      <ProfileInfo />
      <MyPosts posts = { props.state.posts} />
    </div>
  )
}

export default Profile;