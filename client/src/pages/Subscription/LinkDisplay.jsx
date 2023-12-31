import React from 'react'
import {useDispatch, useSelector} from'react-redux'
import { Link } from 'react-router-dom';
import "./Subscription.css"

const LinkDisplay = () => {
    var subscriptionPlan = useSelector((state)=>(state.subscriptionReducer));
    console.log(subscriptionPlan.url);
   
  return (
    <div className='main-container totalHW'>
      <h1>Redirect to Payment Gateway</h1>
    <Link to={subscriptionPlan.url}>
        <button className='checkout-btn redirect-btn' >Redirect</button>
    </Link>
    </div>
  )
}

export default LinkDisplay
