import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login'
import { Route } from 'react-router-dom';

// import './App.css';

function App( props ) {  
  return (
    <div className = "app-wrapper">
      <HeaderContainer />
      <Nav />
      <Route path = "/profile/:userId?" 
             render = { () => <Profile/> }/>      
      <Route path = "/dialogs"
             render = { () => <DialogsContainer/> } /> {/*exact */}
      <Route path ="/users" 
             render = { () => <UsersContainer/> } />
      <Route path = "/login" render = { () => <Login/> } />              
      <Route path = "/news" component = { News }/>
      <Route path = "/music" component = { Music } />
      <Route path = "/settings" component = { Settings } />
    </div>
  );
}

export default App
