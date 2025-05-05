import React, { Fragment } from "react";
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

function Skills(){ 
    return(
        <section className="skills">
        <Fade direction="up" delay={200}>
        <h2>skills</h2>
        <div className="icons">
        <i className="devicon-python-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="Python"></i>
        <i className="devicon-javascript-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="JavaScript"></i>
        <i className="devicon-java-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="Java"></i>
        <i className="devicon-html5-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="HTML5"></i>
        </div>
        <div className="icons2">
        <i className="devicon-css3-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="CSS3"></i>
        <i className="devicon-bootstrap-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="Bootstrap"></i>
        <i className="devicon-mysql-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="MySQL"></i>
        <i className="devicon-vscode-plain colored" style={{ fontSize: '48px', margin: '10px' }} title="VS Code"></i>
        </div>
        </Fade>




        </section>
    )
}

export default Skills;