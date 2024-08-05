import React from 'react';
import Info from './Info';
import './Home.css';
import myPic from './images/mypic.jpg';
import Typewriter from './Typewriter';

function Home() {
    return (
        <div className='home'>
           
            <div className='profile-picture'>
                <img src={myPic} alt='Profile' />
            </div>
            <div className='typewriter-container'>
                <Typewriter texts={["Hi I'm Rasagna Uyyala", "I am a Passionate learner", "I love coding"]} />
            </div>
        </div>
    );
}

export default Home;
