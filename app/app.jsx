var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

//Load foundation-sites

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate3</p>,
  document.getElementById('app')
);
