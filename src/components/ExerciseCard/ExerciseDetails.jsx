
import React from 'react';

const ExerciseDetails = ({ title, description }) => {
  return (
    <div className="exercise-details">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ExerciseDetails;
