
import React from 'react';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';
import { infoExrcise } from './assets/ExerciseAPI'; 
function App() {

  return (
    
    <div className="App">
            <h3>Exercícios</h3>

      <ExerciseCard exercises={infoExrcise} />
    </div>
  )
}

export default App;
