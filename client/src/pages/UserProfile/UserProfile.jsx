import React, { useEffect, useState } from 'react'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar"
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faPen} from '@fortawesome/free-solid-svg-icons'
import ProfileBio from './ProfileBio'
import EditProfileForm from './EditProfileForm'
import moment from 'moment'
import './UserProfile.css'
import Badge from './Badge'
import medal from '../../assets/medal-solid.svg'

const UserProfile = () => {
    const {id} = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id ===  id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch,setSwitch] = useState();
    //const [seeBadge,setSeeBadge] = useState(false);


    const determineBadge= ()=>{
        if(currentProfile?.points >=0 && currentProfile?.points<10){
            return 'Newbie';
        }
        if(currentProfile?.points >=10 && currentProfile?.points<50){
            return 'Intermediate ';
        }
        if(currentProfile?.points >=50 && currentProfile?.points<100){
            return 'Pro';
        }
        if(currentProfile?.points >=100 ){
            return 'Advanced';
        }else{
            return null;
        }

    }
    
    const badges = determineBadge();
   
 
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
                <section className='sec'>
                    <div className="details-container">
                        <div className="user-details">
                            <Avatar  backgroundColor="purple" color='white' fontSize='50px' py='30px' px='40px'>
                            {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <h3 style={{'paddingLeft':'20px'}}>User Points: {currentProfile?.points}</h3>
                           
                            <h3 style={{'paddingLeft':'20px'}}>Badges Earned:<span className='badge-display'>{badges}<img src={medal} /></span></h3>
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <h3>{currentProfile?.subscription} Member</h3>
                                <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                            <div>
                                {
                                    currentUser?.result._id === id &&(
                                        <button type="button" onClick={()=>setSwitch(true)} style={{'marginLeft':'20px'}} className='edit-profile-btn'>
                                            <FontAwesomeIcon icon={faPen}/>Edit Profile
                                        </button>
                                    )
                                }
                            </div>
                            <>
                                {
                                    Switch ? (
                                        <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                                    ) : (
                                        <ProfileBio currentProfile={currentProfile}/>
                                    )
                                }
                            </>
                        </div>
                    </div>
                </section>
        </div>
      
    </div>
  )
}

export default UserProfile
