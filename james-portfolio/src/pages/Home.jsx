import React from 'react';

const Home = () => (
  <div className="home-container">
    <section className="hero">
      <h1>Hi, I’m James</h1>
      <p>Data Scientist • Drone Engineer • STEM Advocate</p>
    </section>

    <section className="bio">
      <h2>About Me</h2>
      <p>
        I'm a data science engineer and mechanical engineer specializing in drones, AI, and STEM education. 
        As the founder of AeroHub and AFTI, I build tools, train youths, and create innovative drone solutions for Africa.
      </p>
    </section>

    <section className="socials">
      <h2>Connect</h2>
      <ul>
        <li><a href="https://github.com/eng-james-o">GitHub</a></li>
        <li><a href="https://linkedin.com/in/eng-james-o">LinkedIn</a></li>
        <li><a href="https://instagram.com/engjameso">Instagram</a></li>
      </ul>
    </section>
  </div>
);

export default Home;
