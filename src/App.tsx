import React from 'react';
import './App.css';
import ConfettiComponent from './components/ConfettiComponent';
import Header from './components/Header';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="App">
      <ConfettiComponent />
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
