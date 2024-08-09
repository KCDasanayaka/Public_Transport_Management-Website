import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HomeRegister from './Pages/HomeRegister';
import Login from './Pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Pages/Home" element={<Home/>} />
        <Route path='/Pages/HomeRegister' element={<HomeRegister/>}/>
        <Route path='/Pages/Login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
