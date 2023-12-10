  import React from 'react'
import { useState } from 'react'
import AboutAuth from './AboutAuth';
import logo from "../../assets/logo.png"
import "./Auth.css"

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = () => {
    setIsSignup(!isSignup)
    }
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
    <div className='auth-container-2'>
    { !isSignup && <img src={logo} alt='stack overflow' className="login-logo"/>}
    <form >
    {
        isSignup && (
        <label htmlFor='name'>
        <h4>Display Name</h4>
        <input type="text" id='name' name='name' /> 
        </label>  
      )
    }
      <label htmlFor="email">
        <h4>Email</h4>
        <input type="email" name='email' id='email' />
      </label>
      <label htmlFor="password">
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h4>Password</h4>
          {!isSignup && <h4 style={{ color: "#007ac6", fontSize:"13px"}}>forgot password?</h4>}
        </div>
        <input type="password" name='password' id='password'/>
        { isSignup && <p>Passwords must contain at least eight<br/> characters, including at least 1 letter and 1<br/> number.</p>}
      </label>
      {
          isSignup && (
          <label htmlFor='check'>
          <input type="checkbox" id='check' />
            <p style={{fontSize:"13px"}}>
              Opt-in to receive occasional,<br />
              product updates, user research invitations,<br />
              company announcements, and digests.
            </p>
          </label>
        )
      }
      <button type='submit' className='auth-btn'>{ isSignup ? 'Sign Up' : 'Login'}</button>
      {
          isSignup &&   (
          <p style={{ color: "#666767", fontSize:"13px"}}> 
            By clicking "Sign up", you agree to our <span style={{ color: "#007ac6"}}>terms of<br />
            service</span>, <span style={{ color: "#007ac6"}}>privacy policy</span> and <span style={{ color: "#007ac6"}}>cookie policy</span>
            I 
          </p>
          )
        
      }
      </form>
    <p>
    {isSignup ? 'already have an account?' : "Don't have an account?"}
    <button type="button" className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'SignUp' : 'Login' }</button>
    </p>
    </div>
    </section>
  )
}

export default Auth