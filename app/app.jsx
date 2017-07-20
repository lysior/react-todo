var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//Load foundation-sites

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
