import React from 'react';
import "./homeRegister.css";
import homeImg from "../assets/HomeImg.png";
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
            </div>
          
        <div className="homeRegButton">
            <p style={{fontSize:'30px',margin:'auto',color:'black'}}>Select Your Role</p>
            <div className="homeRegBtn01">
                <div className="homeRegBtn02">
                    <button>
                        <div className='homeBtn'>
                            <div className="homeBtn1" style={{marginRight:'5%'}}><img src={BusSign} alt='' className='busSign' /></div>
                            <div className="homeBtn3" >Normal User & Bus Stand Keeper</div> 
                        </div>
                        
                    </button>
                </div>
                <div className="homeRegBtn02">
                    <button>
                    <div className='homeBtn'>
                        <div className="homeBtn1" style={{marginRight:'5%'}}><img src={BusSign} alt='' className='busSign' /></div>
                        <div className="homeBtn3" >Bus Registration</div> 
                    </div>
                        
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
