import React from 'react'
import './register.css'

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Arsebook</h3>    
                    <span className="loginDesc">
                        Connect with friends and the world around you on Arsebook.
                    </span>
                </div>    
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />    
                        <input type="Email"  placeholder="Email" className="loginInput" />    
                        <input type="Password"  placeholder="Password" className="loginInput" />    
                        <input type="Password"  placeholder="Password again" className="loginInput" />    
                        <button className="loginButton">Sign up</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </div>    
                </div>    
            </div>            
        </div>
    )
}
