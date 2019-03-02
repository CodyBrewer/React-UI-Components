import React from 'react';
import './Button.css';

const numbers = [7,8,9,4,5,6,1,2,3]

function NumberButton (props) {
    return(
            <button className={props.buttonStyle}>{props.text}</button>
    )
}

export default NumberButton;