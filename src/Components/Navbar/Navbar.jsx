import './Navbar.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
// console.log('Nav has access to the console.')
function showHide(){
  let lastVerticalPosition = window.pageYOffset;
  window.onscroll = function() {
    let verticalPosition = window.pageYOffset;
    let pos = ((window.screen.height) - verticalPosition)
    console.log(pos)
    if(pos<=-345 || pos >=795){
      console.log('past end')
    }else{
      if (lastVerticalPosition > verticalPosition) {
        document.getElementById('Nav').style.transitionDuration = '.3s'
        document.getElementsByClassName('content')[0].style.transitionDuration = '.3s'
        // document.getElementById("Nav").style.top = "2.5%";
        document.getElementById('Nav').style.height = '7%'
        document.getElementsByClassName('nav-link')[0].style.fontSize = 'xx-large'
        document.getElementsByClassName('nav-link')[0].style.display = 'block'
        document.getElementsByClassName('nav-link')[1].style.fontSize = 'xx-large'
        document.getElementsByClassName('nav-link')[1].style.display = 'block'
        document.getElementsByClassName('nav-link')[2].style.fontSize = 'xx-large'
        document.getElementsByClassName('nav-link')[2].style.display = 'block'
        document.getElementsByClassName('content')[0].style.marginTop = '7%'
        // console.log("last vertical pos:" ,lastVerticalPosition)
        // console.log("vertical position:" ,verticalPosition)
      } else {
        document.getElementById('Nav').style.transitionDuration = '.3s'
        document.getElementsByClassName('content')[0].style.transitionDuration = '.3s'
        document.getElementById('Nav').style.height = '0%'
        document.getElementsByClassName('nav-link')[0].style.display = 'none'
        document.getElementsByClassName('nav-link')[0].style.fontSize = '0%'
        document.getElementsByClassName('nav-link')[1].style.display = 'none'
        document.getElementsByClassName('nav-link')[1].style.fontSize = '0%'
        document.getElementsByClassName('nav-link')[2].style.display = 'none'
        document.getElementsByClassName('nav-link')[2].style.fontSize = '0%'
        // document.getElementById("Nav").style.top = "-22%";
        document.getElementsByClassName('content')[0].style.marginTop = '2.5%'
      }
      console.log('in document')
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
            <Link className='nav-link' id = 'home-link' to = '/'>Home</Link>
            <Link className='nav-link' id = 'about-link' to = '/about'>About</Link>
            <Link className='nav-link' id = 'projects-link' to = '/projects'>Projects</Link>
        </div>
    </div>
  )
}