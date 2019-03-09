import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    render(){
        let {result} = this.props;
        return(
            <div className="display-container">
                <div className = "total">   
                   0
                </div>
            </div>
        );
    }   
}
// //  render() {
//     let {result} = this.props;
//     return (
//         <div className="result">
//             <p>{result}</p>
// </div>
export default CalculatorDisplay;