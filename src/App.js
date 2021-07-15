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
      <h1>hello</h1>
    </div>
  )
}
export default App;