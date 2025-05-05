import React, { Fragment } from "react";
import './Home.css';
import Example from "./Modal";
import Example2 from "./Modal2";
import Example3 from "./Modal3";
import Example4 from "./Modal4";
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

function Projects(){ 
    return(
        <section className="projects">
        <Fade direction="up" delay={200}>
        <h2>Projects</h2>
        </Fade>
        <Zoom duration={800}>
        <div className="procards">
        <div class="card" >
            <img src="https://img.freepik.com/free-vector/premium-cash-reward-bonus-work-done-best-employee-rewarding-promotion-order-efficiency-stimulation-boss-subordinate-cartoon-characters_335657-2984.jpg?uid=R198613308&ga=GA1.1.2134136512.1741069948&semt=ais_hybrid&w=740" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Loan management system</h5>
              <Example2/>
            </div>
        </div>
        <div class="card" >
            <img src="https://img.freepik.com/free-vector/dark-analytics-concept-illustration_114360-2171.jpg?uid=R198613308&ga=GA1.1.2134136512.1741069948&semt=ais_hybrid&w=740" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Stock analysis</h5>
              <br></br>
              <Example3></Example3>
            </div>
        </div>
        {/* ------- */}
        <div class="card" >
            <img src="https://img.freepik.com/free-vector/gradient-smart-home-isometric-technology-background_52683-4706.jpg?uid=R198613308&ga=GA1.1.2134136512.1741069948&semt=ais_hybrid&w=740" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Mobile Nest<br></br></h5>
              <br></br>
              <br></br>
              <Example/>

            </div>
        </div>
        {/* -------- */}
        <div class="card" >
            <img src="https://img.freepik.com/free-vector/illustration-business-graph-analysis_53876-36922.jpg?uid=R198613308&ga=GA1.1.2134136512.1741069948&semt=ais_hybrid&w=740" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Data analysis with Python</h5>
              <Example4/>
            </div>
        </div>
        </div>
        </Zoom>

        </section>
    )
}

export default Projects;