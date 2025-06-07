import AnimatedText from '../components/AnimatedText';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import jamesPic from '../assets/jamesPic.jpg';

const Home = () => (
  <div className="home-container">
    <section className="hero" style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
      <div style={{ flex: 1, alignItems: 'left', justifyContent: 'left', display: 'flex' }}>
        <AnimatedText />
      </div>
      <div className="hero-pic" style={{ flex: 0.5, display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
        <img
          src={jamesPic}
          alt="James O."
          style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '20%' }}
        />
      </div>
    </section>

    <section className="bio bio-flex">
      <div className="bio-text">
        <h2>About Me</h2>
        <p>
          I'm a data science engineer and mechanical engineer specializing in drones, and AI. 
          As the founder of AeroHub and AFTI, I build tools, train youths, and create innovative drone solutions for Africa.
          I am passionate about using technology to solve real-world problems and am committed to fostering a culture of innovation and collaboration in the drone industry.
          I have a strong background in mechanical engineering, data science, and machine learning, and I am always eager to learn and explore new technologies.
        </p>
      </div>
      
    </section>
    <section className="projects">
      <h2>Featured Projects</h2>
      <p>
        Check out some of my projects:
        <ul>
          <li>AirFM: A tool to aid drone designers in selecting and manipulating airfoils for their drone build and exporting to CAD softwares for more detailed designs.</li>
          <li>Fixed-wing Surveillance Aircraft: Custom UAV for long-range monitoring.</li>
          <li>Mosquito Spraying Drone: Autonomous drone for vector control operations.</li>
        </ul>
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
