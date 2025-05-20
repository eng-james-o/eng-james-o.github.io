import React from 'react';

const Career = () => (
  <div className="career-page">
    <h1>Career</h1>

    {/* Education Section */}
    <section>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Degree:</strong> B.Eng in Mechanical Engineering
          <br />
          <strong>Institution:</strong> Federal University of Technology, Akure
          <br />
          <strong>Year:</strong> 2021
        </li>
        {/* Add more education entries as needed */}
      </ul>
    </section>

    {/* Work Experience Section */}
    <section>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Position:</strong> Drone Pilot and GIS Technician
          <br />
          <strong>Company:</strong> Nigeria Flying Labs
          <br />
          <strong>Duration:</strong> March, 2021 – Present
          <br />
          <strong>Responsibilities:</strong> [Brief description of your role and achievements]
        </li>
        <li>
            <strong>Position:</strong> Co-Founder and CEO
            <br />
            <strong>Company:</strong> Aerohub UAV Solutions Ltd.
            <br />
            <strong>Duration:</strong> January, 2025 – Present
            <br />
            <strong>Responsibilities:</strong> [Brief description of your role and achievements]
        </li>
      </ul>
    </section>
  </div>
);

export default Career;
