import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestions from './pages/AskQuestions/AskQuestions'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Subscription from './pages/Subscription/Subscription'
import LinkDisplay from './pages/Subscription/LinkDisplay'
import Success from "./pages/Subscription/Success"

const AllRoutes = () => {
return (
<Routes>
<Route  path='/' element={<Home />}/>
<Route path="/Subscription/:id" element={<Subscription/>}/>
<Route  path='/Auth' element={<Auth />}/>
<Route  path="/Questions" element={<Questions/>}/>
<Route  path="/Questions/:id" element={<DisplayQuestion/>}/>
<Route  path="/AskQuestions" element={<AskQuestions/>}/>
<Route  path="/Tags" element={<Tags/>}/>
<Route path="/Users" element={<Users/>}/>
<Route path="/User/:id" element={<UserProfile/>}/>
<Route path="/PaymentLink" element={<LinkDisplay />}/>
<Route path="/success/:id" element={<Success />}/>
</Routes>
)
}
export default AllRoutes