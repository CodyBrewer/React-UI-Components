import React from 'react';
import ActionButton from './ButtonComponents/ActionButton';
import NumberButton from './ButtonComponents/NumberButton';

class Keypad extends React.Component {
    render(){
        return (
            <div className="calculator-container">

            <div className="clear-button-container">
              <NumberButton buttonStyle = "clear-button" text = "clear" />
              <ActionButton buttonStyle ="action-button" text ="÷" />
            </div>
            <div className ="number-button-container">
              <NumberButton buttonStyle ="num-button" text= "7" />
              <NumberButton buttonStyle ="num-button" text= "8" />
              <NumberButton buttonStyle ="num-button" text= "9" />
              <ActionButton buttonStyle ="action-button" text ="X" />  
              <NumberButton buttonStyle ="num-button" text= "4" />
              <NumberButton buttonStyle ="num-button" text= "5" />
              <NumberButton buttonStyle ="num-button" text= "6" />
              <ActionButton buttonStyle ="action-button" text ="-"/>   
              <NumberButton buttonStyle ="num-button" text= "1" />
              <NumberButton buttonStyle ="num-button" text= "2" />
              <NumberButton buttonStyle ="num-button" text= "3" />
              <ActionButton buttonStyle ="action-button" text ="+" />     
            </div>
            <div className="zero-button-container">     
              <NumberButton buttonStyle ="num-button" text ="0" />
              <ActionButton buttonStyle = "action-button" text ="=" />        
            </div>
          </div> 
        )
    }
}

export default Keypad;