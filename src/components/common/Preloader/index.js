import React from 'react'
import style from './preloader.module.css'

 const Preloader = ( props ) => {
  return (
    <div className = { style.preloaderWrapper }>
      <h4>Loading...</h4>
    </div>
    )
}
export default Preloader