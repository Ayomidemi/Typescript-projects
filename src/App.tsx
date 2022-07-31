import React from 'react';
import './App.css';
import ConfettiComponent from './components/ConfettiComponent';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <ConfettiComponent />
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
