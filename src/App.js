import React, { Component } from "react";
import "./App.scss";
import Text from "./components/Text";
import Lauren from "../src/assets/lauren.png";
import Lesley from "../src/assets/lesley.png";
import Jon from "../src/assets/jon.png";
import Eula from "../src/assets/eula.png";

export class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="header">
          <h1 className="header--title">Educators's Per Minute Test</h1>
          <h2 className="header--text">
            How many Educator's can you type in one minute?
          </h2>
          <h2 className="header--text">Timer starts when you start typing</h2>
          <div className="imageBox">
            <img src={Jon} className="images" />
            <img src={Lauren} className="images" />
            <img src={Lesley} className="images" />
            <img src={Eula} className="images" />
          </div>
        </div>
        <Text />
      </div>
    );
  }
}

export default App;
