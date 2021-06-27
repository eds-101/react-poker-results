import React, { useState } from 'react'

import AddResults from './Components/Forms/AddResults'
import './App.css';

function App() {

  const [results, setResults ] = useState([
    {
      id: 1,
      date: '05/06/2020',
      winner: 'Eds',
      secondPlace: 'Sean', thirdPlace: 'Mark', fourthPlace: 'Anton', fifthPlace: 'Dan',
      sixthPlace: 'Stef', seventhPlace: 'Jess'
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Poker Results App
        </p>
      </header>
      <body>
        {results.map((result, index) => (
          <React.Fragment>
            <li>Date: {result.date}</li>
            <li>Winner: {result.winner}</li>
            <li>Second: {result.secondPlace}</li>
            <li>Last: {result.seventhPlace}</li>
          </React.Fragment>
        ))}  

          <AddResults />
      </body>
    </div>
  );
}

export default App;
