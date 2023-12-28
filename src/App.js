import React from 'react';
import './App.css';
import profilePic from './images/profilepic.PNG';

const NavigationBar = () => {
  return (
    <div  className='navbar'>
      <div className='navbar-left'> Joseph Thesmar</div>
      <div className='navbar-right'>
        <button>Work</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  )
}

const MainContent = () => {
  return (
    <div className='main-content'>
      <img src={profilePic} alt='Joseph Thesmar' className='profile-image'/>
      <div className='description'>
        <h2>Joseph Thesmar</h2>
        <p>My Name is Joseph Thesmar...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavigationBar/>
      <MainContent/>
    </div>
  );
}

export default App;
