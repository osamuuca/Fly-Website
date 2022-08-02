import React from 'react';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <Hero></Hero>
      </header>
    </div>
  );
}

export default App;
