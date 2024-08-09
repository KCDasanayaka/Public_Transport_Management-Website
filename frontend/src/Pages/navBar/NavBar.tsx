import logoImg from '../../assets/BusLogo.png';
import './navBar.css';

function NavBar() {
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
            <button>
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
