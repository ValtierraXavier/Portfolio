import React, { useEffect } from 'react';
import './Home.css';

export default function Home(){
// console.log('Home has access to the console.')
useEffect(()=>{
    document.getElementsByClassName('content')[0].style.marginTop = '7%'
},[])
    return(
        <div className='pageContainer' id ='homePageContainer'>
            <h1 className='content'>Hi! Welcome to my Portfolio! Hope you'll like it here!</h1>
        </div>
    );
}