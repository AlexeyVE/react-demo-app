import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';
import DialogItem from'./Dialog/DialogItem';
import Message from'./Message/Message';

const Dialogs = ( props ) => {
    return (    
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        { props.users.map( user => 
          <DialogItem name={user.name} key={user.id} id={user.id} />
          )
        }                   
      </div>
      <div className={style.messages}>
        <Message text="Sint ullamco."/>
      </div> 
    </div>
    );
}

export default Dialogs;