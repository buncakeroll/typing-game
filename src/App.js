import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Text from './components/Text';

export class App extends Component {
  render() {
  return (
    <>
    <div className="text">How many can you type in one minute?</div>
    <div className="text">Times starts when you start typing"></div>
    <Text />
    </>
  );
  }
}

export default App;