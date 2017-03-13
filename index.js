var ReactDOM = require('react-dom')
var views = require('./views/index.js')
var dataFile = require('./data/data')


var view = views.helloTemplate(views.data.name)
var contactsView = views.getContactList(contactDetails)
var dateToday = views.todaysDate(date)

var placeToMount = document.getElementById('root')
var mountDivWithDetails = document.getElementById('listDetails')
var mountDate = document.getElementById('date')

ReactDOM.render(view, placeToMount)
ReactDOM.render(contactsView, mountDivWithDetails)
ReactDOM.render(dateToday, mountDate)
