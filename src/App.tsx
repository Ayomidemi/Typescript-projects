import React from 'react';
import './App.css';
import ConfettiComponent from './components/ConfettiComponent';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


function App() {

  return (
    <div className="App">
      <ConfettiComponent />
      <NavBar />
      <Header />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
