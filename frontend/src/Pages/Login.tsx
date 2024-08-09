import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import './navBar/NavBar';
import NavBar from './navBar/NavBar';
import loginImg from '../assets/LoginImg.jpeg';

function Login() {



return (
    <div className="login">
        <NavBar/>
        <div className="loginContent">
            <div className="loginImg">
                <img src={loginImg} alt='' className='loginImg'/>
            </div>
            <div className="loginRight">
                <h1>welcome <br/><span>back</span></h1>
                <div className="loginForm">
                <div className="loginForm">
                        <div className="signPassword">
                            <label>Email</label>
                            <input
                                className="loginInput"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        <div className="signPassword">
                            <label>Password</label>
                            <input
                                className="loginInput"
                                placeholder="Enter your password"
                                type="password"
                            />
                        </div>
                        <label>
                            Or create a new account from <span>here</span>
                        </label>
                        <button className="login_home" >Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login
