import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Style/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className='sh'>ssadsa</span>
        <header className="App-header">
          <Link to='/index'>Go to index</Link>
          <h1>sss</h1>
        </header>
      </div>
    );
  }
}

export default App;
