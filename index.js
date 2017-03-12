var ReactDOM = require('react-dom')
var data = require('./data.js')
var components = require('./components.js')

var view = components(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
