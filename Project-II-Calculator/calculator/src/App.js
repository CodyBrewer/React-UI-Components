import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Keypad from './components/Keypad';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      result: 0
    };
  }
  

  render(){
  return (
    <div>

        <CalculatorDisplay />

      <Keypad onClick={this.onClick}/>
    </div>
  );
  }   
};

export default App;
