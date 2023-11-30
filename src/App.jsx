
import React from 'react';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';
import { infoExrcise } from './assets/ExerciseAPI'; 
function App() {

  return (
    <div className="App">
      <ExerciseCard exercises={infoExrcise} />
    </div>
  )
}

export default App;
