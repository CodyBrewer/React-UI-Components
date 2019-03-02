import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
const App = () => {
  return (
    <div>
      
      <div className ="number-button-container">
        <NumberButton buttonStyle ="num-button" text= "7"/>
        <NumberButton buttonStyle ="num-button" text= "8"/>
        <NumberButton buttonStyle ="num-button" text= "9"/>
        <NumberButton buttonStyle ="num-button" text= "4"/>
        <NumberButton buttonStyle ="num-button" text= "5"/>
        <NumberButton buttonStyle ="num-button" text= "6"/>
        <NumberButton buttonStyle ="num-button" text= "1"/>
        <NumberButton buttonStyle ="num-button" text= "2"/>
        <NumberButton buttonStyle ="num-button" text= "3"/>
      </div>
    </div>
  );
};

export default App;
