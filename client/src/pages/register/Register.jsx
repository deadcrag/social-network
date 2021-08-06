import axios from 'axios';
import React, { useRef } from 'react'
import './register.css'
import {useHistory} from 'react-router'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
        try {
            await axios.post("/auth/register", user)
            history.push("/login")
        } catch (error) {
            console.log(error)
        }
        }
    }

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
                    <form className="loginBox" onSubmit={handleClick}>
                        <input 
                            placeholder="Username" 
                            required 
                            ref={username} 
                            className="loginInput"
                        />    
                        <input
                            type="email" 
                            required 
                            ref={email} 
                            placeholder="Email" 
                            className="loginInput"
                        />    
                        <input
                            type="password" 
                            required 
                            ref={password} 
                            placeholder="Password" 
                            className="loginInput"
                            minLength="5"
                        />    
                        <input
                            type="password" 
                            required 
                            ref={passwordAgain} 
                            placeholder="Password again" 
                            className="loginInput"
                            minLength="5"
                        />    
                        <button className="loginButton" type="submit">Sign up</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </form>    
                </div>    
            </div>            
        </div>
    )
}
