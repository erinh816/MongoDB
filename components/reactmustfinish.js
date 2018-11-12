import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="ELLIE" age="24" />
        <Person name="Mary" age="33" />
    </div>
);
//reactDOM has a render method allows us to render a js function as a component to the real DOM
// reactDOM.render(<Person name="ELLIE" age="24" />, document.querySelector('#p1'));
// // reactDOM.render(<Person name="Mary" age="33" />, document.querySelector('#p2'));
ReactDOM.render(app, document.querySelector('#app'));
//single page app
//only ONE ReactDOM.render() call
//multiple page app
//ReactDOM.render() call per "widget"