import logo from './logo.svg';
import './App.css';
import ImageName from './Components/ImageName';
import APITemplate from './Components/APITemplate';
import React, { useState } from 'react';
import Types from './Components/Types';
import StatsPanel from './Components/StatsPanel';

function App() {
  const [id, setId] = useState(1);
  const [stats, setStats] = useState(true);
  let pokemonJSON = APITemplate(id);

  const handleChange = (newId) => {
    setId(newId);
    pokemonJSON = APITemplate(newId);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Exercise 5: Pokedex
        </h1>
      </header>
      <body>
        <div className='flex-row'>
          <ImageName json={pokemonJSON} />
          <Types json={pokemonJSON} />
          <button disabled={() => (id === 1) ? true : false} onClick={handleChange(id-1)}>Previous</button>
          <button onClick={handleChange(id+1)}>Next</button>
          <StatsPanel json={pokemonJSON} stats={stats} />
          <button onClick={() => setStats(true)} className='bg-green-500 rounded-sm'>Info</button>
          <button onClick={() => setStats(false)} className='bg-gray-300 rounded-sm'>Moves</button>
        </div>
      </body>
    </div>
  );
}

export default App;
