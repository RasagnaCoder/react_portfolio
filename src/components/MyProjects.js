import React, { useState } from 'react';
import './MyProjects.css';

const MyProjects = () => {
  const [showMoreFirstProject, setShowMoreFirstProject] = useState(false);
  const [showMoreSecondProject, setShowMoreSecondProject] = useState(false);
  const [showMoreThirdProject, setShowMoreThirdProject] = useState(false);

  const toggleShowMoreFirstProject = () => {
    setShowMoreFirstProject(!showMoreFirstProject);
  };

  const toggleShowMoreSecondProject = () => {
    setShowMoreSecondProject(!showMoreSecondProject);
  };

  const toggleShowMoreThirdProject = () => {
    setShowMoreThirdProject(!showMoreThirdProject);
  };

  return (
    <div className="projects row">
      <div className='project-card col-sm-12 col-md-6'>
        <h3>Static Portfolio Website</h3>
        <p>I completed my first <a href="https://github.com/RasagnaCoder/RasagnaCoder.github.io-portfolio" target="_blank" rel="noopener noreferrer">project</a> in web development through Bharath Intern. This project includes comprehensive details about my education and skills.</p>
        {showMoreFirstProject && (
          <p>I have used basic HTML, CSS. I successfully accomplished this during the third semester of my Bachelor's in Engineering (BE).</p>
        )}
        <button onClick={toggleShowMoreFirstProject}>
          {showMoreFirstProject ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className='project-card col-sm-12 col-md-6'>
        <h3>Temperature Converter</h3>
        <p>My second <a href="https://github.com/RasagnaCoder/RasagnaCoder.github.io-temp_conv" target="_blank" rel="noopener noreferrer">project</a>, titled "Temperature Converter," was assigned by Bharat Intern. For this task, I used HTML, CSS, and JavaScript.</p>
        {showMoreSecondProject && (
          <p>This project converts temperature from degrees Celsius to degrees Fahrenheit and degrees Kelvin.</p>
        )}
        <button onClick={toggleShowMoreSecondProject}>
          {showMoreSecondProject ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className='project-card col-sm-12 col-md-6'>
        <h3>Bank Customer Churn Prediction</h3>
        <p>This project leverages a machine learning approach to identify patterns in customer data that indicate whether a customer is likely to churn, or leave the bank. The model uses a Support Vector Machine (SVM) classifier to predict churn. Techniques such as Random Under Sampling or Random Over Sampling are used to balance the dataset. Hyperparameter tuning is performed using Grid Search to enhance model performance.</p>
        {showMoreThirdProject && (
          <p>The final model is evaluated on metrics like accuracy, precision, recall, and F1-score to ensure it effectively predicts customer churn. This allows the bank to proactively engage with at-risk customers and take measures to retain them.</p>
        )}
        <a href="https://github.com/RasagnaCoder/Bank-Churn-model" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <button onClick={toggleShowMoreThirdProject}>
          {showMoreThirdProject ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default MyProjects;
