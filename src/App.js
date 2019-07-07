import React from 'react';
import './App.css';
import SithCard from './components/card/index';
import sith from './sith.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Lego Sith Memory
      </header>
      <section className="App-hero">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SithCard
          image={sith[0].image}
          name={sith[0].name}
        />
      </section>
    </div>
  );
}

export default App;
