import React, { Component } from 'react';
import './App.css';
import Aside from './component/aside';
import Welcome from './component/welcome';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page" id="container-wrap">
        <Aside></Aside>
        <Welcome></Welcome>
      </div>
    );
  }
}

export default App;