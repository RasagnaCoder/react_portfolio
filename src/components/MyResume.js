import React from 'react';
import './MyResume.css'; // Ensure this CSS file is present and correctly linked
import resumeImg from './images/providence_resume.png'; // Adjust the path as needed

const MyResume = () => {
  return (
    <div className="my-resume">
      <h1>My Resume</h1>
      <div className="resume-container">
        <img src={resumeImg} alt="Resume" className="resume-img" />
      </div>
      <p>
        You can also download my resume as a PDF from the link below:
      </p>
      <a href="/path/to/resume.pdf" download="Resume_Rasagna_Uyyala" className="download-link">
        Download Resume
      </a>
    </div>
  );
}

export default MyResume;

