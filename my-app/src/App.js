import React from 'react';
import './App.css';
import Home from './components/Home';
import SearchBox from './components/SearchBox';
import Navbar from './components/Navbar';
import Instructor from './components/Instructor.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SearchBox/>
      <Instructor />
    </div>
  );
}

export default App;
