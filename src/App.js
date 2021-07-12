import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [values, setValues] = useState({
    title: '', description: '', playerCount: '',
    player1:'', player2:'', player3:'', player4:''
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
    <Form onSubmit={onSubmit}>
      <h1>Create a new Poker leaderboard</h1>
      
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" required value={values.title} onChange={set('title')} 
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder={"Tell us about your poker league here!"}
          value={values.description} onChange={set('description')} rows={2} />
      </Form.Group>

      <Form.Group controlId="formPlayerCount">
        <Form.Label>Number of initial players</Form.Label>
        <Form.Control className="smallWidthInput" type="number" min="4" max="4" required size="sm"
          value={values.player_count} onChange={set('playerCount')} />
        <Form.Text className="text-muted">
          You can edit, add and remove players later. Set to 4 whilst in development.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPlayers">
        <Form.Control type="text" required placeholder="Name of Player 1"
          value={values.player1} onChange={set('player1')} />
        <Form.Control type="text" required placeholder="Name of Player 2"
          value={values.player2} onChange={set('player2')} />
        <Form.Control type="text" required placeholder="Name of Player 3"
          value={values.player3} onChange={set('player3')} />
        <Form.Control type="text" required placeholder="Name of Player 4"
          value={values.player4} onChange={set('player4')} />
      </Form.Group>

      <Button type="submit">Create league</Button>

    </Form>
  );
}

export default App;
