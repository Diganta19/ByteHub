import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateSubscription } from '../../actions/users';
import {setCurrentUser} from"../../actions/currentUser";

const Success = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [subscription,setSubscription] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const plan = window.location.search;
        const params = new URLSearchParams(plan)
        setSubscription(params.get('plan'))
        dispatch(updateSubscription(id,{subscription}))
    })

    const handleRedirect =()=>{
      dispatch({type:"LOGOUT"})
         navigate('/Auth')
            dispatch(setCurrentUser(null))
    }
    
  return (
    <div className='main-container' style={{'height':'100%','width':'100%'}}>
     <h1> Successful Payment</h1> 
     <h3> UID : {id}</h3>
      <button onClick={handleRedirect} style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>Login</button>
    </div>
  )
}

export default Success
