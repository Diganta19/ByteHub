  import React from 'react'
  import {useDispatch} from 'react-redux'
  import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import AboutAuth from './AboutAuth';
import logo from "../../assets/logo.png"
import "./Auth.css"
import { signUp,logIn } from '../../actions/auth';

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup)
    }
  const handleSubmit =(e) =>{
    e.preventDefault();
    
    if(!email && !password){
      alert("Enter Email and Password");
    }

    if(isSignup){
      if(!name){
        alert("Enter Your Name");
      }
      dispatch(signUp({name,email,password},navigate))
    }else{
      dispatch(logIn({email,password},navigate))
    }
    
  }
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
    <div className='auth-container-2'>
    { !isSignup && <img src={logo} alt='stack overflow' className="login-logo"/>}

    <form onSubmit={handleSubmit}>
    {
        isSignup && (
        <label htmlFor='name'>
        <h4>Display Name</h4>
        <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/> 
        </label>  
      )
    }
      <label htmlFor="email">
        <h4>Email</h4>
        <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
      </label>
      <label htmlFor="password">
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h4>Password</h4>
          {!isSignup && <h4 style={{ color: "#007ac6", fontSize:"13px"}}>forgot password?</h4>}
        </div>
        <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        { isSignup && <p>Passwords must contain at least 8<br/> characters, including at least 1 letter and 1<br/> number.</p>}
      </label>
      {
          isSignup && (
          <label htmlFor='check'>
          <input type="checkbox" className='check' />
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
            By clicking "Sign up", you agree to our <span style={{ color: "#007ac6"}}>Terms of<br />
            Service</span>, <span style={{ color: "#007ac6"}}>Privacy Policy</span> and <span style={{ color: "#007ac6"}}>Cookie Policy</span>  
          </p>
          )
        
      }
      </form>
    <p>
    {isSignup ? 'already have an account?' : "Don't have an account?"}
    <button type="button" className='handle-switch-btn' onClick={handleSwitch}>{isSignup ?  'Login' :'SignUp' }</button>
    </p>
    </div>
    </section>
  )
}

export default Auth
