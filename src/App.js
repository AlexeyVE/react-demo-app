import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
// import './App.css';

function App( props ) {
  return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header/>
        <Nav/>
        <Route path = "/profile" 
               render = { () => <Profile store = { props.store }/> }/>      
        <Route path = "/dialogs"
               render = { () => <DialogsContainer store = { props.store } />} /> {/*exact */}
        <Route path = "/news" component = { News }/>
        <Route path = "/music" component = { Music }/>
        <Route path = "/settings" component = { Settings }/>
      </div>
    </BrowserRouter>
  );
}

export default App;
