import React, { Fragment } from "react";
import './Home.css';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

function About(){ 
    return(
        <section className="aboutme">
            <Fade direction="up" delay={200}>
            <h2>About me</h2>
            </Fade>
            <div className="abtdes">
            <Zoom duration={800}>
                <img src="https://i.pinimg.com/474x/12/02/23/120223d0bcd70c2c0933de525bed2c5e.jpg"></img>
                </Zoom>
                <Slide direction="right">
            <p>
            I'm Mogeshraj M, an aspiring Full Stack Developer from Chennai, with a B.Tech in Mechanical Engineering from SASTRA Deemed University (2020–2024). I have strong skills in HTML, CSS, MySQL, and hands-on experience with JavaScript, Bootstrap, and Python. I’ve built real-world projects like a Loan Management System (MySQL), Mobile Product Website, and a Python + Excel data analysis project with 10,000+ rows.

I enjoy solving problems through code and constantly improving my skills. I'm currently learning Java to strengthen my backend development knowledge and exploring opportunities in web development, data analytics, and Python-based roles.
            </p>
            </Slide>
            </div>
        </section>
    )
}

export default About;