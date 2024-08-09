import logoImg from '../../assets/BusLogo.png';
import './navBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate('../Pages/Login');
  }
  return (
    <nav className='navBar'>
      <div className='Navimg'>
        <img src={logoImg} alt='Company Logo' className='logoImg' />
      </div>
      <div className="navList">
       <ul>
        <li>
          <a href='#news'><p>News</p></a>
        </li>
        <li>
          <a href='#about'><p>About</p></a>
        </li>
        <li>
          <div className='loginBtn'>
            <button onClick={handleLogin}>
              <p className='btnText'>Join</p>
            </button>
          </div>
        </li>
      </ul> 
      </div>
      
    </nav>
  );
}

export default NavBar;
