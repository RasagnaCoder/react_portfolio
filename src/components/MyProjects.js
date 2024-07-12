import React, { useState } from 'react';
import Header from './Header';
import './MyProjects.css'
function MyProjects() {
  const [showMoreFirstProject, setShowMoreFirstProject] = useState(false);
  const [showMoreSecondProject, setShowMoreSecondProject] = useState(false);

  const toggleShowMoreFirstProject = () => {
    setShowMoreFirstProject(!showMoreFirstProject);
  };

  const toggleShowMoreSecondProject = () => {
    setShowMoreSecondProject(!showMoreSecondProject);
  };

  return (
    <div className="projects row bg-warning">
      <div className='container col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
        <h3>Static Portfolio Website</h3>
        I completed my first <a href="https://lnkd.in/gqhhcJbC">project</a> in web development through Bharath Intern. This project includes comprehensive details about my education and skills.
        {showMoreFirstProject && (
          <span>I have used basic HTML, CSS. I successfully accomplished this during the third semester of my Bachelor's in Engineering (BE).</span>
        )}
        <br />
        <button onClick={toggleShowMoreFirstProject}>
          {showMoreFirstProject ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className='container col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
        <h3>Temperature Converter</h3>
        <p id="text">
          My second <a href="https://lnkd.in/g9XDdPtq">project</a>, titled "Temperature Converter," was assigned by Bharat Intern. For this task, I used HTML, CSS, and JavaScript. 
          {showMoreSecondProject && (
            <span>This project converts temperature from degrees Celsius to degrees Fahrenheit and degrees Kelvin.</span>
          )}
        </p>
        <button onClick={toggleShowMoreSecondProject}>
          {showMoreSecondProject ? 'Show Less' : 'Show More'}
        </button>
        <br/>
      </div>
    </div>
  );
}

export default MyProjects;
