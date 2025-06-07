import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => (
  <div className="projects-page">
    <section className="card-section">
      <h2>Software Projects</h2>
      <ul>
        <li><strong>AirFM:</strong> A tool to aid drone designers in selecting and manipulating airfoils for their drone build and exporting to CAD softwares for more detailed designs. 
        <br />
        <strong>Technologies:</strong> Python, Pyside 2, Qt QML
        <br />
        Explore the project on GitHub <a href="https://github.com/eng-james-o/airfm" target="_blank" rel="noopener noreferrer" className="inline"> 
        <AiFillGithub size={24} className="inline"/> </a>
        </li>
      </ul>
    </section>
    <section className="card-section">
      <h2>Hardware Projects</h2>
      <ul>
        <li><strong>Fixed-wing Surveillance Aircraft:</strong> Custom UAV for long-range monitoring.</li>
        <li><strong>Mosquito Spraying Drone:</strong> Autonomous drone for vector control operations.</li>
      </ul>
    </section>
    <section className="card-section">
      <h2>Community Projects</h2>
      <ul>
        <li><strong>AFTI:</strong> Pro-bono STEM education initiative for underprivileged youth.</li>
        <li><strong>Tech Torch Africa:</strong> Empowering African youth with hands-on tech education.</li>
      </ul>
    </section>
  </div>
);

export default Projects;
