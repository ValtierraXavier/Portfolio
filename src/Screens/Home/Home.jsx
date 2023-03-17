import React, { useEffect } from 'react';
import './Home.css';

export default function Home(){
// console.log('Home has access to the console.')
useEffect(()=>{
    document.getElementsByClassName('content')[0].style.marginTop = '7%'
},[])
    return(
        <div className='pageContainer' id ='homePageContainer'>
            <h1 className='content' id='content1'>Hi! May name is Xavier Valtierra.</h1>
            <p className = 'content' id = 'content2'>
                Welcome to my Portfolio! I hope you'll like it here!<br/><br/>
            </p>
            <p className = 'content' id = 'content3'>
                I love weilding web-developer magic to create some of the magical experiences you've come to love on the web.
            </p>
        </div>
    );
}