import React from 'react';
import './Card.css';

function CardContent(){
    return(
        <div className="card-content">
            <div className="content-container">
                <h3>Get Started with React</h3>
                <p>React makes it painless to create interactivs UIs. Design simple views for each state in your application.</p>
            <a id="react-site">reactjs.org</a>
            </div>
        </div>
    )
}

export default CardContent;