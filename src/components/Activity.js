// src/components/Activity.js

import React from 'react';
import './Activity.css'; // Import the CSS file
import dishaPic1 from './images/disha_pic_1.jpg'; // Imported image
import dishaGroupPic from './images/disha_group_pic.jpg'; // Imported image

const activities = [
  {
    id: 1,
    title: "DISHA Event",
    description: "On the 19th of November, the Health, Hygiene and Well-being department of Chaitanya Spandana visited SRD girls' home in Begum Bazaar. The primary objective of the event was to provide comprehensive guidance on life leadership, education, career paths, and health tips, aiming to empower the students to choose the right path in life.\n\nWe conducted sessions focused on health, hygiene, and overall well-being, aiming to positively impact the lives of the children. Engaging in interactive discussions, we provided valuable guidance and support, building a sense of community among volunteers and the students. To create a positive and nurturing environment, we organized recreational activities. At the end of the day, we successfully contributed to the well-being and development of the children, leaving a hint of meaningful impact on their lives.",
    images: [dishaPic1, dishaGroupPic] // Array of images for the event
  },
  // Add more events if needed
];

const Activity = () => {
  return (
    <div className="activity-page">
      <h1>My Volunteering Activities</h1>
      <div className="activity-container">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <h2>{activity.title}</h2>
            <div className="activity-images">
              {activity.images.map((image, index) => (
                <img key={index} src={image} alt={`Event Image ${index + 1}`} className="activity-image" />
              ))}
            </div>
            <div className="activity-description">
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
