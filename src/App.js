import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Counters from './components/Counters';
import Movies from './components/movies';




function App(){
  return(
    <div>
      <h1>conselio</h1>
      <Counters />
      <Movies />
      <Navbar />
      
    </div>
  )
}
export default App;