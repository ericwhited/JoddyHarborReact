import React from 'react';
import Character from './components/Character';
import './App.css';
import jobs from './jobs'


function App() {
  return (
    <div className="App">
      <img className="ms2Logo" src="/assets/logo.png" alt="logo"/>
      <div className="characterBox">
        {jobs.map(function(job){
          return (
            <Character
              key={job.name}
              name={job.name}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
