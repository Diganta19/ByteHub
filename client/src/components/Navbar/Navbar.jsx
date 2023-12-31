import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import {useSelector,useDispatch} from'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"
import {setCurrentUser} from"../../actions/currentUser";
import decode from 'jwt-decode';


const Navbar = () => {
    const dispatch = useDispatch();
    var User = useSelector((state)=>(state.currentUserReducer));
    const navigate = useNavigate();


    const handleLogout = () =>{
         dispatch({type:"LOGOUT"})
         navigate('/')
            dispatch(setCurrentUser(null))
        }

    useEffect(()=>{
        const token = User?.token
        if(token){
            const decodeToken = decode(token);
            if(decodeToken.exp * 1000 < new Date().getTime()){
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        
    },[dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to={`/Subscription/${User?.result?._id}`} className='nav-item nav-btn'>Subscription</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            { User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                <>
                 <Link to={`/User/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>  <Avatar px="10px" py="7px" borderRadius="50%" color="white" backgroundColor="#009dff" > {User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                    <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                </>
            }
        </div>  
    </nav>
  )
}

export default Navbar
