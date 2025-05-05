import React, { Fragment } from "react";
import './Home.css';
import developerimg from './img/Programming-amico.svg';
import {Typewriter} from 'react-simple-typewriter';


function Home(){ 
    return(
        <section id='home'>
                <div className="wordings">
                    
    <h1>
      <Typewriter
        words={['Hii  there...']}
        loop={Infinity}
        cursor
        cursorStyle='|'
        typeSpeed={200}
        deleteSpeed={100}
        delaySpeed={1500}
      />
    </h1>
 
                    <h1>This is Mogeshraj</h1>
                    <br></br>
                    <h3>A full stack developer</h3>
                </div>
                <div>
                    <img src={developerimg}></img>
                </div>
                {/* <img src="https://wallpapercave.com/wp/wp14956625.webp" className="bgimg"></img> */}
        </section>
    )
}

export default Home;