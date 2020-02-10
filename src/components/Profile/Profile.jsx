import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = ( props ) => {
  return (
    <div className = "profile">
      <ProfileInfoContainer /> 
      <MyPostsContainer />
    </div>
  )
}

export default Profile;