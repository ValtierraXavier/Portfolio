import './Navbar.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
// console.log('Nav has access to the console.')
function showHide(){
  let lastVerticalPosition = window.pageYOffset;
  window.onscroll = function() {
    let verticalPosition = window.pageYOffset;
    if (lastVerticalPosition > verticalPosition) {
      document.getElementById('Nav').style.transitionDuration = '.3s'
      document.getElementsByClassName('content')[0].style.transitionDuration = '.3s'
      document.getElementById("Nav").style.top = "2.5%";
      document.getElementsByClassName('content')[0].style.marginTop = '7%'
      // console.log("last vertical pos:" ,lastVerticalPosition)
      // console.log("vertical position:" ,verticalPosition)
    } else {
      document.getElementById('Nav').style.transitionDuration = '.3s'
      document.getElementsByClassName('content')[0].style.transitionDuration = '.3s'
      document.getElementById("Nav").style.top = "-22%";
      document.getElementsByClassName('content')[0].style.marginTop = '2.5%'
    }
    lastVerticalPosition = verticalPosition;
  }
}

useEffect(()=>{
  document.getElementById("Nav").style.top = "2.5%";
      document.getElementsByClassName('content')[0].style.marginTop = '7%'
  showHide()
},[])
  return (
    <div className = 'Nav'>
        <div className='Nav_Bar' id = 'Nav'>
            <Link className='nav-link' id = 'home-link' to = '/home'>Home</Link>
            <Link className='nav-link' id = 'about-link' to = '/about'>About</Link>
            <Link className='nav-link' id = 'projects-link' to = '/projects'>Projects</Link>
        </div>
    </div>
  )
}