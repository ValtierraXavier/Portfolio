import React,{useEffect} from 'react'
import './About.css'


export default function About() {
  useEffect(()=>{
    document.getElementsByClassName('content')[0].style.marginTop = '7%'
},[])
  return (
    <div className='pageContainer'>
    <h1 className='content'>Hello, my name is Xavier Valtiera and youve stumbled upon my portfolio site. Im a warehouse worker turned full MERN stack developer! <br></br>My technical skills include: <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>SQL Databases</li>
      </ul>
    </h1>
    <h1></h1>
    </div>
  )
}
