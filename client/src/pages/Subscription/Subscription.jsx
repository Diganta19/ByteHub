import React from 'react'
import "./Subscription.css"
import {useDispatch, useSelector} from'react-redux'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { subscription } from '../../actions/subscription'

const Subscription = () => {
  const {id} = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var User = useSelector((state)=>(state.currentUserReducer));
  var subscriptionPlan = useSelector((state)=>(state.subscriptionReducer));


  const handelRedirect = ()=>{
    navigate("/Auth")
  }

  const handleCheckout=async(e)=>{
    const itemId = e.target.value;
    await dispatch(subscription(itemId,id));
    navigate('/PaymentLink');
  }

  return (
    <div>
    {
      User?.result?._id ? (
      <div className='main-container'>
        <div className="card-section">
          <div className="card">
            <h4 className='heading'>SILVER</h4>
            <p>Post upto 1 question a hour</p>
            <p><span>FREE</span></p>
            <button  className='checkout-btn' onClick={handleCheckout} value="1">Checkout</button>
          </div>
          <div className="card">
            <h4 className='heading'>GOLD</h4>
            <p>Post upto 5 question a hour</p>
            <p><span>$5</span></p>
            <button  className='checkout-btn' onClick={handleCheckout} value="2">Checkout</button>
          </div>
          <div className="card">
            <h4 className='heading'>PLATINUM</h4>
            <p>Post upto 10 question a hour</p>
            <p><span>$10</span></p>
              <button className='checkout-btn' onClick={handleCheckout} value="3">Checkout</button>
          </div>
        </div>
        
      </div>)
         : 
         (<div className='main-container'><h1>Login First</h1><button onClick={handelRedirect} className='checkout-btn' style={{'height':'40px','width':'150px'}}>Login</button></div>)

    }
    </div>
  )
  }
export default Subscription
