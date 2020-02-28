import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Text from './components/Text';

export class App extends Component {
  render() {
  return (
    <div className="game">
      <div className="header">
        <h1 className="header--title">Words Per Minute Test</h1>
        <h2 className="header--text">How many words can you type in one minute?</h2>
        <h2 className="header--text">Timer starts when you start typing</h2>
      </div>
    <Text />
    </div>
  );
  }
}

export default App;