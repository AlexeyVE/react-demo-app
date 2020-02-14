import React from 'react'
import { NavLink } from 'react-router-dom'
import EmptyPhoto from '../../common/EmptyPhoto/'
import style from './user.module.scss'
import axios from 'axios'
import { usersAPI } from '../../../api/'

const User = ( props ) => {
  let url = 'https://social-network.samuraijs.com/api/1.0/follow/'
  let follow = () => { 
    // axios.post( url + props.userId, {}, { withCredentials:true,
    //                                       headers:{
    //                                         "API-KEY":"997b5ad2-6cec-45f5-8b70-71df99852bbb"
    //                                       }
    //                                   })
    
    usersAPI.follow( props.userId ).then( res => {
      if ( res.data.resultCode === 0 ) {
        props.follow( props.userId )
      }
    }).catch( err => console.log( err ) )
  }
  let unfollow = () => {
    // axios.delete( url + props.userId, { withCredentials:true,
    //                                     headers: {
    //                                       "API-KEY":"997b5ad2-6cec-45f5-8b70-71df99852bbb"
    //                                     }
    //                                   })
    usersAPI.unfollow( props.userId ).then( res => {
      if ( res.data.resultCode === 0 ) {
        props.unfollow( props.userId )
      }
    }).catch( err => console.log( err ) )
  }  

  return (
    <div className = { style.userWrapper } >
      <h5>{ props.name }</h5>
      <NavLink to = { '/profile/' + props.userId }>
        { !props.photos
          ? <EmptyPhoto /> 
          : <img className = { style.userPhoto } src = { props.photos } alt ="empty"/>
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