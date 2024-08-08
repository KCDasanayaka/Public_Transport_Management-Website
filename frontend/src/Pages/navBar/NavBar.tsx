import React from 'react'
import logoImg from '../../assets/BusLogo.png'
import './navBar.css'

function NavBar() {
  return (
    <div className='navBar'>
        <div className='Navimg'>
            <img src={logoImg} alt='' className='logoImg'/>
        </div>
        
        <div className='loginBtn'>
            <button>
                <p className='btnText'>Join</p>
            </button>
        </div>
    </div>
  )
}

export default NavBar