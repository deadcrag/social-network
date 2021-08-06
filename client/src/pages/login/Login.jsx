import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email: email.current.value ,password: password.current.value}, dispatch)
    }

    console.log(user)
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
                            type="email" 
                            placeholder="Email" 
                            className="loginInput" 
                            ref={email} 
                            required
                        />    
                        <input 
                            type="Password"  
                            placeholder="Password"
                            minLength="5"
                            className="loginInput" 
                            ref={password} 
                            required
                        />    
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress style={{'color':'white'}} size="25px"/> : "Log in"}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </form>    
                </div>    
            </div>            
        </div>
    )
}
