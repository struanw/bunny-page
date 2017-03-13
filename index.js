var ReactDOM = require('react-dom')
var template = require('./components/templates.js')
var database = require('./database/database.js')

// var data = { name: 'Dan' }
// var view = template.helloTemplate(data)
// var placeToMount = document.getElementById('root')
// ReactDOM.render(view, placeToMount)



var peopleData = database
var view = template.helloFriends(peopleData)
var placeToMount = document.getElementById('root')
ReactDOM.render(view, placeToMount)
