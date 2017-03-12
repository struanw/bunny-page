var ReactDOM = require('react-dom')
var routes = require('./routes/index.js')

var data = { name: 'mix' }
var contactDetails = {
  day: '',
  people: [
    { name: 'John', age: 34, hobby: "stamp collecting" },
    { name: 'Jack', age: 23, hobby: "computing" },
    { name: 'Jim', age: 75, hobby: "extreme ironing" }
  ]
}
var date = new Date()

var view = routes.helloTemplate(data)
var contactsView = routes.getContactList(contactDetails)
var dateToday = routes.todaysDate(date)

var placeToMount = document.getElementById('root')
var mountDivWithDetails = document.getElementById('listDetails')
var mountDate = document.getElementById('date')

ReactDOM.render(view, placeToMount)
ReactDOM.render(contactsView, mountDivWithDetails)
ReactDOM.render(dateToday, mountDate)
