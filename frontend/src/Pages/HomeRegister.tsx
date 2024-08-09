import React from 'react';
import "./homeRegister.css";
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
        <div className='homeRegText'>
            <div className="homeRegleft">
               <div className="regLeft1"><h1>Register Now:</h1></div>
                <h4> Passengers, Managers, and Buses</h4>
                <br/><br/>
                <p>
                Embark on a journey of comfort and convenience with our seamless online booking system. Whether you're planning a coastal adventure, a cultural exploration, or simply visiting loved ones, we are here to make your travels effortless and enjoyable.
                </p> 
            </div>
          
        <div className="homeRegButton">
            <p>select your role</p>
            <div className="homeRegBtn01">
                <div className="homeRegBtn02">
                    <button>
                        <div className="homeBtn1" style={{marginRight:'5%'}}><img src={BusSign} alt='' className='busSign' /></div>
                        <div className="homeBtn2" >Select bus type</div> 
                    </button>
                </div>
                <div className="homeRegBtn02">
                    <button>
                        <div className="homeBtn1" style={{marginRight:'5%'}}><img src={BusSign} alt='' className='busSign' /></div>
                        <div className="homeBtn2" >Select bus type</div> 
                    </button>
                </div>
            </div>
        </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
