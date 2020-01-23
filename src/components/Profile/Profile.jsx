import React from "react";
import MyPosts from "./My posts/MyPosts"

const Profile = () => {
  return (
    <div className = "profile">
      <div className = "profile-header">
        Profile header  
      </div>
      <div className = "profile-logo border">          
        <img src = "" alt = "Profile avatar"/>
      </div>
      <div className = "profile-details border">
        Profile details
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;