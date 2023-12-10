import React from 'react'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'

const Widget = () => {
  return (
    <div className= 'widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className= 'right-sidebar-div-2'> 
            <img src={pen} alt="pen" width='18'/>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className= 'right-sidebar-div-2'> 
            <img src={pen} alt="pen" width='18'/>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
    </div>

    <h4>The Meta Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className= 'right-sidebar-div-2'> 
            <img src={comment} alt="pen" width='18'/>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className= 'right-sidebar-div-2'> 
            <img src={comment} alt="pen" width='18'/>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className= 'right-sidebar-div-2'> 
            <img src={comment} alt="pen" width='18'/>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
    </div>

    <h4>The Future Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className= 'right-sidebar-div-2'> 
        <p>22</p>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className= 'right-sidebar-div-2'> 
        <p>22</p>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className= 'right-sidebar-div-2'> 
           <p>22</p>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
    </div>


</div>
  )
}

export default Widget
