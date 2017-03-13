var React = require('react')
var ReactDOM = require('react-dom')
var Beers = require('./components/Beers')
var BeerDetails = require('./components/BeerDetails')
var data = require('./data')

function app (props) {
  return (
    <div>
      {Beers(props)}
      {BeerDetails(props)}
    </div>
  )
}

var view = app(data)

var root = document.getElementById('root')

ReactDOM.render(view, root)
