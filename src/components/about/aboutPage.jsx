"use strict";

var React = require('react');
var PropTypes = React.PropTypes;

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following tech:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
