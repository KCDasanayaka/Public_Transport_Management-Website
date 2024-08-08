import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Pages/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
