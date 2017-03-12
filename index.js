var ReactDOM = require('react-dom')
var People = require('./components/People')
var peopleData = require('./data')


var view = People(peopleData)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

