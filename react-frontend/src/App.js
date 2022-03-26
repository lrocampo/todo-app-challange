import './App.css';
import TaskComponent from './components/TaskComponent';
import React, { useState } from 'react'

function App() {
  

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h4>Your tasks</h4>
        <TaskComponent/>
    </div>
  );
}

export default App;
