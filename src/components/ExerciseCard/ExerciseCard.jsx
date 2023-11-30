import React from 'react';
import ExerciseDetails from './ExerciseDetails';
import ExerciseImage from './ExerciseImage';
import './ExerciseCard.css';


const ExerciseCard = ({ exercises }) => {
  return (
    <div className="exercise-container">
      {exercises.map((exercise, index) => (
        <div className="exercise-card" key={index}>
          <ExerciseImage src={exercise.img_item} alt={exercise.titulo} />
          <ExerciseDetails
            title={exercise.titulo}
            description={exercise.series}
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseCard;
