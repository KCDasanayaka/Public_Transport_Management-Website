import React from 'react';
import "./home.css";
import { useNavigate } from 'react-router-dom';
import homeImg from "../assets/HomeIcon.png";
import homeImg01 from "../assets/stbBus02.png";
import NavBar from './navBar/NavBar';
import BusSign from '../assets/bus.png'

function Home ()  {
  const navigate=useNavigate();
  const handleRegister=()=>{
    navigate("/Pages/TypeSelection");
  }
  return (
    <div className='home'>
      <NavBar/>
      <div className='homeContent'>
        <div className="homeClass">
          <img src={homeImg01} alt='' className='homeImg'/>  
        </div>
        <div className='homeText'>
          <h1>Welcome</h1>
          <h4>to Sri Lanka's Premier Long-Distance Bus Service Booking Platform!</h4>
          <br/><br/>
          <p>
          Embark on a journey of comfort and convenience with our seamless online booking system. Whether you're planning a coastal adventure, a cultural exploration, or simply visiting loved ones, we are here to make your travels effortless and enjoyable.
          </p>
          <button onClick={handleRegister}>
            <div className="homeBtn">
             <div className="homeBtn1" style={{marginRight:'5%'}}><img src={BusSign} alt='' className='busSign' /></div>
              <div className="homeBtn2" >Select bus type</div> 
            </div>
            
          </button>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
