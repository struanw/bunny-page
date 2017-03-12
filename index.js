// var React = require('react')
var ReactDOM = require('react-dom')
var templating = require('./reactTemplates/templating.js')
var database = require('./database/database.js')



var data = database.getData()
var weatherForecast = database.getWeather()

var weatherView = templating.weatherTemplate(weatherForecast)
var view = templating.helloTemplate(data)

var placeForWeather = document.getElementById('weather')
var placeToMount = document.getElementById('root')

// ReactDOM.render(view, placeToMount)
ReactDOM.render(weatherView, placeForWeather)






// function helloTemplate (props) {
//   return (
//     <div>
//       <div>Hello {props.name}.</div>
//       <div>Today is {props.day} and the weather is {props.weather}</div>
//     </div>
//   )
// }
//
// var data = { name: 'Dan', day: 'Monday', weather: 'sunny' }
// var view = helloTemplate(data)
//
// var placeToMount = document.getElementById('root')
//
// ReactDOM.render(view, placeToMount)
