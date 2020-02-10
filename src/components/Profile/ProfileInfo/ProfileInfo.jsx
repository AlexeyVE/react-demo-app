import React from 'react';
import Preloader from '../../common/Preloader/'
import EmptyPhoto from '../../common/EmptyPhoto/'
import style from './profileInfo.module.scss'

const ProfileInfo = ( props ) => {
  if (!props.profileInfo) {
    return <Preloader / >
  }
  return (
      <div className = {style.profileInfo }>
          <h4> Profile header </h4>
        <div className = { style.profile_logo }>          
          { !props.profileInfo.photos.small
            ? <EmptyPhoto /> 
            : <img  src = { props.profileInfo.photos.small } alt ="empty" />
          }
        </div>
        <div className = { style.profile_details }>
          {props.profileInfo.fullName}
        </div>
     </div> 
    )
}
export default ProfileInfo;


