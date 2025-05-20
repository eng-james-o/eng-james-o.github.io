import React from 'react';
import AnimatedText from '../components/AnimatedText';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Home = () => (
  <div className="home-container">
    <section className="hero">
      <AnimatedText />
      <p>Machine Learning Engineer • Drone Engineer • STEM Advocate</p>
    </section>

    <section className="bio">
      <h2>About Me</h2>
      <p>
        I'm a data science engineer and mechanical engineer specializing in drones, and AI. 
        As the founder of AeroHub and AFTI, I build tools, train youths, and create innovative drone solutions for Africa.
        I am passionate about using technology to solve real-world problems and am committed to fostering a culture of innovation and collaboration in the drone industry.
        I have a strong background in mechanical engineering, data science, and machine learning, and I am always eager to learn and explore new technologies.
      </p>
    </section>

    <section className="socials">
      <h2>Connect</h2>
      <ul>
        <li>
          <a href="https://github.com/eng-james-o" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={24} /> GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/eng-james-o" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={24} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://instagram.com/engjameso" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={24} /> Instagram
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default Home;
