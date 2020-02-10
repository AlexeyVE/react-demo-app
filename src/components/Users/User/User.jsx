import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './user.module.scss'

const User = ( props ) => {

  let unfollow = () => props.unfollow( props.userId )

  let follow = () => props.follow( props.userId )  
  
  return (
      <div className= { style.userWrapper } >
        <h5>{ props.name }</h5>
        <NavLink to ={'/profile/'+props.userId}>
          { !props.photos
            ? <img className = { style.userPhoto } src= "./emptyPhoto.png" alt ="empty"/> 
            : <img className = { style.userPhoto }src = { props.photos } alt ="empty"/>
          }
        </NavLink>
        <span>{ props.status }</span>
        { props.followed 
          ? <button onClick = { unfollow }>Unfollow</button>
                   
          : <button onClick = { follow }>Follow</button>
        }  
      </div>
  )
}
export default User