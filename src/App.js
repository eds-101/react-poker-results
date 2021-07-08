import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import './App.css';

function App() {
  const [values, setValues] = useState({
    title: '', description: '', playerCount: ''
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
        <Form.Control className="smallWidthInput" type="number" min="2" max="20" required size="sm"
          value={values.player_count} onChange={set('playerCount')} />
        <Form.Text className="text-muted">
          You can edit, add and remove players later. Maximum 20.
        </Form.Text>
      </Form.Group>

      <Button type="submit">Add Player details</Button>

    </Form>
  );
}

export default App;
