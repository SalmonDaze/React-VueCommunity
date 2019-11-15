import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import './Style/main.css'

class App extends Component {
  render() {
    return (
        <div className="App"> 
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
