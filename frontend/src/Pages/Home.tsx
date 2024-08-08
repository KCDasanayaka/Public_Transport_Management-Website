import React from 'react';
import "./home.css";
import homeImg from "../assets/HomeIcon.png";
import NavBar from './navBar/NavBar';
import BusSign from '../assets/bus.png'

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
          <h4>to Sri Lanka's Premier Long-Distance Bus Service Booking Platform!</h4>
          <br/><br/><br/>
          <p>
          Embark on a journey of comfort and convenience with our seamless online booking system. Whether you're planning a coastal adventure, a cultural exploration, or simply visiting loved ones, we are here to make your travels effortless and enjoyable.
          </p>
          <button className='HomeButton'>
            <img src={BusSign} alt='' className='busSign'/>
            Select bus type
          </button>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
