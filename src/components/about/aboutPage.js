"use strict";

var React = require("react");

var About = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      if(!confirm("do you want to read?")){
        transition.abort();
      }else{
        callback();
      }
    },
    willTransitionFrom: function (transition, component) {
      if(!confirm("do you want to leave?")){
        transition.abort();
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following tecnologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>browserify</li>
            <li>bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
