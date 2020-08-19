import React from 'react';
import './App.css';
import './mock/index.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
