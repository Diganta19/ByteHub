
import AllRoutes from './AllRoutes.jsx';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question.js';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users.js';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    
  },[dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes/>
    </BrowserRouter>
  );
}

export default App;
