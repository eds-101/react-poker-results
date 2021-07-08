import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import AddResults from './Components/Forms/AddResults'
import './App.css';

function App() {

  return (
    <form 
    // onSubmit={onSubmit}
    >
    <h1>Create a new Poker leaderboard</h1>

    <label>Title:</label>
    <input 
      type="text" required
    //   value={values.name} onChange={set('name')} 
      />

    <label>Description:</label>
    <textarea placeholder={"Tell us about your poker league here!"} 
    // value={values.habits} onChange={set('habits')}
    />

    <label>Number of initial players:</label>
    <strong>You can edit, add and remove players later. Max 6 players (until live)</strong>
    <input 
      type="number" min="2" max="6" required
    //   value={values.name} onChange={set('name')} 
      />

    <button type="submit">Add Player details</button>
  </form>

  );
}

export default App;
