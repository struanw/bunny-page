var ReactDOM = require('react-dom')
var People = require('./components/People.js')

var data = {
  people: [
    { name: 'mix', age: 32},
    { name: 'mikey', age: 24},
    { name: 'piet', age: 33}
  ]
}

var view = People(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

