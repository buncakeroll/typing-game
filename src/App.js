import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Text from './components/Text';
import Josh from '../src/assets/josh.jpeg';
import Amy from '../src/assets/amy.jpeg';
import Roy from '../src/assets/roy.png';

export class App extends Component {
  render() {
  return (
    <div className="game">
      <div className="header">
        <h1 className="header--title">TA's Per Minute Test</h1>
        <h2 className="header--text">How many TA's can you type in one minute?</h2>
        <h2 className="header--text">Timer starts when you start typing</h2>
        <div className="imageBox">
          <img src={Josh} className="images"/>
          <img src={Amy} className="images"/>
          <img src={Roy} className="images"/>
        </div>

      </div>
    <Text />
    </div>
  );
  }
}

export default App;