import React from 'react';

const Career = () => (
  <div className="career-page">
    {/* Education Section */}
    <section className="card-section">
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Degree:</strong> B.Eng in Mechanical Engineering
          <br />
          <strong>Institution:</strong> Federal University of Technology, Akure
          <br />
          <strong>Year:</strong> Nov, 2015 - Nov, 2021
        </li>
        {/* Add more education entries as needed */}
      </ul>
    </section>

    {/* Certifications */}
    <section className="card-section">
      <h2>Certifications</h2>
      <ul>
        <li>
          <strong>Certification:</strong> Certificate of Drone and Data Technology
          <br />
          Level 1 & 2
          <br />
          <strong>Institution:</strong> African Drone and Data Academy
          <br />
          <strong>Year:</strong> 2023
        </li>
      </ul>
      <ul>
        <li>
          <strong>Certification:</strong> Certified Solidworks Design Associate (CWSA)
          <br />
          <strong>Institution:</strong> Dassault Systemes
          <br />
          <strong>Year:</strong> 2023
        </li>
      </ul>
    </section>

    {/* Work Experience Section */}
    <section className="card-section">
      <h2>Work Experience</h2>
      <ul className="space-y-6">
        {/* NFL */}
        <li className="bg-primary/20 rounded-xl p-4">
          <strong>Position:</strong> Drone Pilot and GIS Technician
          <br />
          <strong>Company:</strong> Nigeria Flying Labs
          <br />
          <strong>Duration:</strong> March, 2024 – Present
          <br />
          <strong>Responsibilities:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Conducted drone surveys and GIS mapping for various projects.</li>
            <li>Fleet, equipment and crew management for aerial operations</li>
          </ul>
        </li>

        {/* Aerohub */}
        <li className="bg-primary/20 rounded-xl p-4">
            <strong>Position:</strong> Co-Founder and CEO
            <br />
            <strong>Company:</strong> Aerohub UAV Solutions Ltd.
            <br />
            <strong>Duration:</strong> January, 2025 – Present
            <br />
            <strong>Responsibilities:</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Coordinate operations and management activities</li>
              <li>Strategic leadership and business development</li>
              <li>Design and development of custom drone platforms</li>
            </ul>
        </li>
        
        {/* Factware */}
        <li className="bg-primary/20 rounded-xl p-4">
          <strong>Position:</strong> Machine Learning Engineer
          <br />
          <strong>Company:</strong> Factware Analytics
          <br />
          <strong>Duration:</strong> February, 2019 – November, 2024
          <br />
          <strong>Responsibilities:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Developed machine learning models for predictive analysis</li>
            <li>Created detailed documentation and extracted insights from the machine learning models</li>
            <li>Facilitated python for machine learning classes</li>
          </ul>
        </li>

        {/* NAF */}
        <li className="bg-primary/20 rounded-xl p-4">
          <strong>Position:</strong> Aircraft Maintenance Engineering Intern
          <br />
          <strong>Company:</strong> Nigerian Air Force
          <br />
          <strong>Duration:</strong> June, 2019 – December, 2019
          <br />
          <strong>Responsibilities:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Maintenance of the C-130H airframe (tyre, brake assembly, fuselage) including PDM</li>
            <li>Inspection and maintenance of C-130H powerplant</li>
            <li>Ground handling assistance during ground refuelling operations</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
);

export default Career;
