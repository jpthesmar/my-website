import './App.css';
import React, { useState } from 'react';
import profilePic from './images/profilepic.png';
import linkedInIcon from './images/linkedin.png';
import githubIcon from './images/github-sign.png';

const NavigationBar = ({ setActiveSection }) => {
  return (
    <div className='navbar'>
      <div className='navbar-left'> Joseph Thesmar's Portfolio</div>
      <div className='navbar-right'>
        <button onClick={() => setActiveSection('home')}>Home</button>
        <button onClick={() => setActiveSection('work')}>Work</button>
        <button onClick={() => setActiveSection('skills')}>Skills</button>
        <button onClick={() => setActiveSection('about')}>About</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className='main-content'>
      <img src={profilePic} alt='Joseph Thesmar' className='profile-image' />
      <div className='description'>
        <p>Welcome to my Portfolio! I am an enthusiastic software developer with a strong programming foundation which has contributed to impactful projects, and work experiences. Explore my diverse skills, from Python to Java to project management tools, and discover my commitment to excellence and innovation. </p>
      </div>
      <div className='icons-container'>
        {/* LinkedIn Button*/}
        <a href='https://www.linkedin.com/in/jpthesmar/' target='blank' rel='noopener noreferrer'>
          <img src={linkedInIcon} alt='LinkedIn' className='icon' />
        </a>

        {/* GitHub Button*/}
        <a href='https://github.com/jpthesmar' target='blank' rel='noopener noreferrer'>
          <img src={githubIcon} alt='GitHub' className='icon' />
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div>
      <p>Work</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <p>Skills</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <p>Contact</p>
    </div>
  );
};



function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'work':
        return <Work />;
      case 'skills':
        return <Skills />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        console.warn(`Unexpected section: ${activeSection}`);
        return <Home />;
    };
  };
  

  return (
    <div>
      <NavigationBar setActiveSection = {setActiveSection}/>
      {renderSection()}
    </div>
  );
}

export default App;