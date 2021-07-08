import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [values, setValues] = useState({
    title: '', description: '', player_count: ''
  })

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      alert('Your details were saved!')
    } catch (e) {
      alert(`Error ${e.message}`)
    }
  }

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value}))
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Create a new Poker leaderboard</h1>

      <label>Title:</label>
      <input 
        type="text" required value={values.title} onChange={set('title')} 
      />

      <label>Description:</label>
      <textarea placeholder={"Tell us about your poker league here!"} 
        value={values.description} onChange={set('description')}
      />

      <label>Number of initial players:</label>
      <strong>You can edit, add and remove players later. Max 6 players (until live)</strong>
      <input 
        type="number" min="2" max="6" required
        value={values.player_count} onChange={set('player_count')} 
      />

      <button type="submit">Add Player details</button>
  </form>
  );
}

export default App;
