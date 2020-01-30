import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
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
               render = { () => <Profile 
                              profilePage = { props.state.profilePage }
                              addPost = { props.addPost }
                              updateNewPostText = { props.updateNewPostText }
                            />
                    }
        />      
        <Route path = "/dialogs" 
               render = { () => <Dialogs 
                                  state = { props.state.dialogsPage }/>}/>   {/*exact */}
        <Route path = "/news" component = { News }/>
        <Route path = "/music" component = { Music }/>
        <Route path = "/settings" component = { Settings }/>
      </div>
    </BrowserRouter>
  );
}

export default App;
