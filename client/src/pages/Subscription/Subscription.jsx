import React from 'react'
import "./Subscription.css"
import {useDispatch, useSelector} from'react-redux'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { subscription, verifyPayment } from '../../actions/subscription'
import { updateSubscription } from '../../actions/users';
import * as api from '../../api'

const Subscription = () => {
  const {id} = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // var User = useSelector((state)=>(state.currentUserReducer));
  // var subscriptionPlan = useSelector((state)=>(state.subscriptionReducer));



  const handelRedirect = ()=>{
    navigate("/")
  }
  const initPayment =(data,subplan,UId) =>{
    const options = {
        key:"rzp_test_UiwSVf7wzLmCbY",
        amount:data.amount,
        currency:data.currency,
        order_id:data.id,
        description:"Test Transaction",
        handler:async(response)=>{
            try{
                const {data} = await api.verifyPayment(response)
                console.log('Verification',data);
                if(data.message === 'PAYMENT VERIFIED'){
                  try {
                    await dispatch(updateSubscription(UId,{subplan}))
                    alert("Subscription Done")
                    handelRedirect()
                  } catch (error) {
                    console.log(error);
                  }
                }
            }catch(error){
                console.log("Verification Error",error);
            }
        },
        theme:{
            color:'#3399cc'
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open()

}

  const handleCheckout=async(e)=>{
    const itemId = e.target.value;
   const {data,subplan,UId}=  await dispatch(subscription(itemId,id));
     initPayment(data,subplan,UId);
  }

  return (
    <div>
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

      </div>
    </div>
  )
  }
export default Subscription
