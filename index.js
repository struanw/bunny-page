var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./components/Lessons')
var data = require('./data')


var view = App(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
