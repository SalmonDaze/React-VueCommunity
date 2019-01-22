import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/index'>Go to index</Link>
        </header>
      </div>
    );
  }
}

export default App;
