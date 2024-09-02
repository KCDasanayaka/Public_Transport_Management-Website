import React from 'react';
import "./typeSeection.css";
import homeImg from "../assets/HomeImg.png";
import logoImg from '../assets/Bus icon.png';
import NavBar from './navBar/NavBar';
import BusSign from '../assets/bus.png'

function Home ()  {
  return (
    <div className='home'>
      <NavBar/>
      <div className='homeContent'>
        
        <div className='homeRegText'>
            <div className="regLeftlogo">
                <img src={logoImg} alt='Company Logo' className='logoImg' />
                <div className="homeRegleft">
                  <div className="regLeft1"><h1>Select<br/>
                  <span style={{textTransform:'capitalize'}}>Bus Type</span></h1></div>
                    <h4> Passengers, Managers, and Buses</h4> 
                </div>
            </div>
            
          
        <div className="homeRegButton">
            <p style={{fontSize:'30px',margin:'auto',color:'black'}}>Select Your Role</p>
            <div className="homeRegBtn01">
                <div className="homeRegBtn02">
                    <button>
                        
                        
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
        <div className="homeClass">
          <img src={homeImg} alt='' className='homeImg'/>  
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
