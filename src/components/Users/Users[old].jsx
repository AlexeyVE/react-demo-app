import React from 'react'
import style from './users.module.css'
import User from './User/User' 
import axios from 'axios'
  
const Users = ( props ) => {
  let getUsers = () => { 
    if (props.users.length === 0 ){
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => props.getUsers(res.data.items))
    } 
  }
  let usersList = props.users.map( (user,index) => 
                                <User 
                                  key = { index } 
                                  name = { user.name }
                                  followed = { user.followed }
                                  userId = { user.id }
                                  photos = { user.photos }
                                  location = {" user.location "}
                                  status = { user.status }
                                  follow = { props.follow }
                                  unfollow = { props.unfollow }/>)
  return (
      <div className = { style.users }>
        <button onClick = { getUsers }>Get users</button>
        { usersList }
      </div>
    )
}      

export default Users