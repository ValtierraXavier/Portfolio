import React,{useEffect, useState} from 'react'
import './About.css'


export default function About() {

  let listItems = document.getElementsByClassName('skillsListItem')

  function highLight1(){
    listItems[0].style.color = 'red'
    listItems[0].style.marginLeft = '.3%'
    listItems[0].style.transitionDuration = '.2s'
  }
  function unHighLight1(){
    listItems[0].style.color = 'black'
    listItems[0].style.marginLeft = '0%'
    listItems[0].style.transitionDuration = '.2s'
  }
  function highLight2(){
    listItems[1].style.color = 'red'
    listItems[1].style.marginLeft = '.3%'
    listItems[1].style.transitionDuration = '.2s'
    
  }
  function unHighLight2(){
    listItems[1].style.color = 'black'
    listItems[1].style.marginLeft = '0%'
    listItems[1].style.transitionDuration = '.2s'
    
  }
  function highLight3(){
    listItems[2].style.color = 'red'
    listItems[2].style.marginLeft = '.3%'
    listItems[2].style.transitionDuration = '.2s'
    
  }
  function unHighLight3(){
    listItems[2].style.color = 'black'
    listItems[2].style.marginLeft = '0%'
    listItems[2].style.transitionDuration = '.2s'
    
  }
  function highLight4(){
    listItems[3].style.color = 'red'
    listItems[3].style.marginLeft = '.3%'
    listItems[3].style.transitionDuration = '.2s'
    
  }
  function unHighLight4(){
    listItems[3].style.color = 'black'
    listItems[3].style.marginLeft = '0%'
    listItems[3].style.transitionDuration = '.2s'
    
  }
  function highLight5(){
    listItems[4].style.color = 'red'
    listItems[4].style.marginLeft = '.3%'
    listItems[4].style.transitionDuration = '.2s'
    
  }
  function unHighLight5(){
    listItems[4].style.color = 'black'
    listItems[4].style.marginLeft = '0%'
    listItems[4].style.transitionDuration = '.2s'
    
  }
  function highLight6(){
    listItems[5].style.color = 'red'
    listItems[5].style.marginLeft = '.3%'
    listItems[5].style.transitionDuration = '.2s'
    
  }
  function unHighLight6(){
    listItems[5].style.color = 'black'
    listItems[5].style.marginLeft = '0%'
    listItems[5].style.transitionDuration = '.2s'
    
  }
  function highLight7(){
    listItems[6].style.color = 'red'
    listItems[6].style.marginLeft = '.3%'
    listItems[6].style.transitionDuration = '.2s'
    
  }
  function unHighLight7(){
    listItems[6].style.color = 'black'
    listItems[6].style.marginLeft = '0%'
    listItems[6].style.transitionDuration = '.2s'

  }
  
  


  return (
    <div className='pageContainer'>
    <h1
      className='content'>Who am I?
    </h1>
      <p className = 'aboutMe'>
        Im a warehouse worker turned full MERN stack developer!<br/>
        I've always had a passion for electronics and tech. As a child, I was always pulling my toys apart. I <span id = 'emphasis'>NEEDED</span> to know how they ticked.<br/>
        Fast forward about 20 years and I finally took the plunge to starting a part of the career I've always wanted.<br/>
        At present, I can create websites and databases but what I really want to do in the future is work on robots/electronics.<br/>
        In the meantime I really enjoy creating intuitive, functional website for people to enjoy.<br/>
        Theres a real beauty in watching your code turn into something useful and beautiful that anyone anywhere can see and interact with.<br/>
      </p>
      <br></br>
      My technical skills include: 
      <ul className = 'list' id = 'skillsList'>
        <li className = 'skillsListItem' id = 'skill1' onMouseEnter={highLight1} onMouseLeave={unHighLight1}>HTML</li>
        <li className = 'skillsListItem' id = 'skill2' onMouseEnter={highLight2} onMouseLeave={unHighLight2}>CSS</li>
        <li className = 'skillsListItem' id = 'skill3' onMouseEnter={highLight3} onMouseLeave={unHighLight3}>JavaScript</li>
        <li className = 'skillsListItem' id = 'skill4' onMouseEnter={highLight4} onMouseLeave={unHighLight4}>Python</li>
        <li className = 'skillsListItem' id = 'skill5' onMouseEnter={highLight5} onMouseLeave={unHighLight5}>React</li>
        <li className = 'skillsListItem' id = 'skill6' onMouseEnter={highLight6} onMouseLeave={unHighLight6}>MongoDB</li>
        <li className = 'skillsListItem' id = 'skill7' onMouseEnter={highLight7} onMouseLeave={unHighLight7}>SQL Databases</li>
      </ul>
    </div>
  )
}
