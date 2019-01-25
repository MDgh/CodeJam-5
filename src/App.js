import React, { Component } from 'react';
import Header from './components/header/index';


const headline = 'Code Jam Dream Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headline={headline} />
      </div>
    );
  }
}

export default App;
