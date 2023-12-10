
import AllRoutes from './AllRoutes.jsx';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes/>
    </BrowserRouter>
  );
}

export default App;
