import React from 'react';
import "./home.css";
import homeImg from "../assets/HomeIcon.png";
import NavBar from './navBar/NavBar';

function Home ()  {
  return (
    <div className='home'>
      <NavBar/>
      <div className='homeContent'>
        <div className="homeClass">
          <img src={homeImg} alt='' className='homeImg'/>  
        </div>
        <div className='homeText'>
          <h1>Welcome</h1>
          <p>to first ever sri Lankan long distance bus service booking system</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
