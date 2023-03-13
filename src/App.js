import './App.css';
import Home from "../src/Screens/Home/Home.jsx"
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Screens/About/About';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Projects from './Screens/Projects/Projects.jsx';
import Comments from './Components/Comments/Comments.jsx'

function App() {
  const location = useLocation().pathname
  const pageColor = document.body.style
  if(location === '/home'){
    pageColor.backgroundColor = 'green'
  }else if(location === '/projects'){
    pageColor.backgroundColor = 'red'
  }else if(location === '/about'){
    pageColor.backgroundColor = 'yellow'
  }

  return (
    <div className = 'App'>
      <Navbar/>
      <Routes>
        <Route path = '/home' element={<Home/>}></Route>
        <Route path = '/projects' element={<Projects/>}></Route>
        <Route path = '/about' element={<About/>}></Route>
        <Route path = '/comments' element={<Comments/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
