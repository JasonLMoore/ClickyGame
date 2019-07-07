import React, {Component} from 'react';
import './App.css';
import Wrapper from './components/wrapper';
import SithCard from './components/card/index';
import sith from './sith.json';


class App extends Component {
  state = {
    sith
  };

  removeFriend = id => {
    const sith = this.state.sith.filter(Sith => Sith.id !== id);
    this.setState({ sith });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sith Memory
      </header>
        <Wrapper>
          <section className="App-hero">
            {this.state.sith.map(Sith => (
              <SithCard
                removeSith={this.removeSith}
                id={Sith.id}
                key={Sith.id}
                name={Sith.name}
                image={Sith.image}
              />
            ))}
          </section>
        </Wrapper>
      </div>
    );
  }
}

export default App;
