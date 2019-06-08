import React, { Component } from 'react';

import Todos from './Todos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Stuff Tim Has To Do </h2>
        <Todos />
      </div>
    );
  }
}

export default App;
