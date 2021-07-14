import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Counters from './components/Counters';
import Movies from './components/movies';
import './App.css';




function App(){
  return(
    <div className="app">
      <h1>conselio</h1>
      <Counters />
      <Movies />
      <Navbar />
    </div>
  )
}
export default App;