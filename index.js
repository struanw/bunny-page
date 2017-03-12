var ReactDOM = require('react-dom')
var People = require('./components/People')
var data = require('./data')

var view = People(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
