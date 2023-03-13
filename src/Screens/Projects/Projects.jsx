import React,{useEffect} from 'react'
import './Projects.css'

export default function Projects() {
  useEffect(()=>{
    document.getElementsByClassName('content')[0].style.marginTop = '7%'
},[])
  return (
    <div className='pageContainer'>
    <h1 className='content'>Projects</h1>
    </div>
  )
}
