import React from 'react';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';


function App() {
  return (
    <div className="App">
      <div className="exercise-container">
        <ExerciseCard
          title="Flexiones"
          description="Ejercicio para fortalecer el pecho y los brazos."
          imageSrc="url-de-la-imagen-para-flexiones"
        />
        {}
      </div>
    </div>
  );
}

export default App;
