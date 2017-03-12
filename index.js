var React = require('react')
var ReactDOM = require('react-dom')


function App (props) {
  return (
    <div>
      <Heading />
      <Repos />
    </div>
  )
}

function Heading (props) {
  return (
    <h1>HEADING</h1>
  )
}

function Repos (props) {
  return ( 
    <div>repos</div>
  )
}

var view = App()

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

